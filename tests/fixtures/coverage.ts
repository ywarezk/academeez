/* eslint-disable @typescript-eslint/no-explicit-any -- any is allowed here due to missing types */
import { test as base } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const istanbulCLIOutput = path.join(process.cwd(), '.nyc_output');

export function generateUUID(): string {
	return crypto.randomBytes(16).toString('hex');
}

export const test = base.extend({
	context: async ({ context }, use) => {
		await context.addInitScript(() =>
			window.addEventListener('beforeunload', () =>
				(window as any).collectIstanbulCoverage(JSON.stringify((window as any).__coverage__))
			)
		);
		await fs.promises.mkdir(istanbulCLIOutput, { recursive: true });
		await context.exposeFunction('collectIstanbulCoverage', async (coverageJSON: string) => {
			if (coverageJSON)
				await fs.promises.writeFile(
					path.join(istanbulCLIOutput, `playwright_coverage_${generateUUID()}.json`),
					coverageJSON
				);
		});
		await use(context);
		for (const page of context.pages()) {
			await page.evaluate(() =>
				(window as any).collectIstanbulCoverage(JSON.stringify((window as any).__coverage__))
			);
		}
	},
});

export const expect = test.expect;
