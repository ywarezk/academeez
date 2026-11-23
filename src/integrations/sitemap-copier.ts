import type { AstroIntegration } from 'astro';
import { readdir, cp, readFile, writeFile } from 'node:fs/promises';
import * as path from 'node:path';

export function sitemapCopier(): AstroIntegration {
	return {
		name: 'sitemap-copier',
		hooks: {
			'astro:build:done': async ({ logger }) => {
				const buildLogger = logger.fork('sitemap-copier');
				buildLogger.info('Copying and patching sitemap XML files');

				const clientDir = './dist/client';
				const outDir = './.vercel/output/static';
				const baseUrl = 'https://www.academeez.com';
				const additionalLoc = `${baseUrl}/sitemap-video.xml`;

				try {
					const files = await readdir(clientDir);
					const xmlFiles = files.filter(
						(file) =>
							path.extname(file).toLowerCase() === '.xml' &&
							path.basename(file).toLowerCase().startsWith('sitemap')
					);

					buildLogger.info(`Found: ${xmlFiles.join(', ')}`);

					for (const file of xmlFiles) {
						const sourcePath = path.join(clientDir, file);
						const destPath = path.join(outDir, file);

						// If it's the sitemap index, inject <loc>
						if (file === 'sitemap-index.xml') {
							let xml = await readFile(sourcePath, 'utf8');

							// insert <sitemap><loc>...</loc></sitemap> before </sitemapindex>
							const insertion = `
  <sitemap>
    <loc>${additionalLoc}</loc>
  </sitemap>`;

							xml = xml.replace('</sitemapindex>', `${insertion}\n</sitemapindex>`);
							await writeFile(sourcePath, xml, 'utf8');
						}

						await cp(sourcePath, destPath);
					}

					buildLogger.info('Sitemap files copied and modified successfully');
				} catch (error) {
					buildLogger.error(`Error copying or modifying sitemaps: ${error}`);
				}
			},
		},
	};
}
