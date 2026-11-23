/* eslint-disable @typescript-eslint/no-explicit-any -- any is allowed here due to missing types */
import { test } from '@playwright/test';
import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';
import { createRequire } from 'node:module';
import type { CoverageMapData } from 'istanbul-lib-coverage';

const require = createRequire(import.meta.url);

// CJS imports (runtime-safe)
const { createCoverageMap } =
	require('istanbul-lib-coverage') as typeof import('istanbul-lib-coverage');
const { createContext } = require('istanbul-lib-report') as typeof import('istanbul-lib-report');
const reports = require('istanbul-reports') as typeof import('istanbul-reports');

const NYC_DIR = path.resolve('.nyc_output');
const OUT_DIR = path.resolve('coverage');

// /vercel/path0/, /vercel/path1/, ...
const VERCEL_PREFIX_RE = /^\/vercel\/path\d+\//;
const REPLACEMENT_PREFIX = './'; // or path.resolve('.') for absolute repo paths

test('merge coverage, normalize paths, emit LCOV', async () => {
	if (!fs.existsSync(NYC_DIR)) return;

	const map = createCoverageMap({});

	const files = (await fsp.readdir(NYC_DIR)).filter((f) => f.endsWith('.json'));
	for (const f of files) {
		const full = path.join(NYC_DIR, f);
		const raw = JSON.parse(await fsp.readFile(full, 'utf8')) as CoverageMapData;

		// Normalize keys and inner `path` to strip Vercel prefix
		const fixed: CoverageMapData = {};
		for (const [k, v] of Object.entries(raw)) {
			const newKey = k.replace(VERCEL_PREFIX_RE, REPLACEMENT_PREFIX);
			const origPath = (v as any).path;
			const newV = {
				...v,
				path: origPath ? origPath.replace(VERCEL_PREFIX_RE, REPLACEMENT_PREFIX) : newKey,
			};
			fixed[newKey] = newV;
		}

		map.merge(fixed as CoverageMapData);
	}

	await fsp.mkdir(OUT_DIR, { recursive: true });
	const context = createContext({ dir: OUT_DIR, coverageMap: map });

	// Emit LCOV + handy text summary (and HTML if you like)
	reports.create('lcovonly').execute(context);

	// delete the NYC_DIR
	try {
		await fsp.rm(NYC_DIR, { recursive: true, force: true });
	} catch (_err) {
		console.error('Failed to delete NYC_DIR:', _err);
	}
});
