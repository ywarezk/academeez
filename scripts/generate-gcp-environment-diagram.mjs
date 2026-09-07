import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputDir = join(__dirname, '../src/content/docs/courses/terraform/stack');
const baseName = 'gcp-k8s-environment';

const WIDTH = 760;
const HEIGHT = 520;
const PADDING = 36;

// Academeez brand green (logo + --color-green)
const BRAND_GREEN = '#01D662';
const BRAND_GREEN_DARK = '#019A48';
const BRAND_GREEN_FILL = 'rgba(1, 214, 98, 0.08)';
const BRAND_GREEN_FILL_STRONG = 'rgba(1, 214, 98, 0.14)';

const folderBox = {
	x: PADDING,
	y: PADDING,
	width: WIDTH - PADDING * 2,
	height: HEIGHT - PADDING * 2,
	label: 'GCP Folder',
	stroke: BRAND_GREEN,
	fill: BRAND_GREEN_FILL,
};

const projectBox = {
	x: folderBox.x + 32,
	y: folderBox.y + 56,
	width: folderBox.width - 64,
	height: folderBox.height - 88,
	label: 'GCP Project',
	stroke: BRAND_GREEN_DARK,
	fill: BRAND_GREEN_FILL_STRONG,
};

const resourceGap = 24;
const resourceWidth = 168;
const resourceHeight = 112;
const resources = ['VPC', 'GKE', 'DB'];
const resourcesTotalWidth = resources.length * resourceWidth + (resources.length - 1) * resourceGap;
const resourcesStartX = projectBox.x + (projectBox.width - resourcesTotalWidth) / 2;
const resourceY = projectBox.y + projectBox.height - resourceHeight - 36;

function roundedRect(x, y, width, height, radius, stroke, fill, strokeWidth = 2.5) {
	return `
    <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="${radius}" ry="${radius}"
      fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}"/>
  `;
}

function boxLabel(text, x, y, color) {
	return `
    <text x="${x}" y="${y}" font-family="SF Pro Text, Helvetica Neue, Arial, sans-serif"
      font-size="20" font-weight="600" fill="${color}">${text}</text>
  `;
}

function resourceBox(label, x, y) {
	return `
    ${roundedRect(x, y, resourceWidth, resourceHeight, 14, BRAND_GREEN, BRAND_GREEN_FILL_STRONG)}
    <text x="${x + resourceWidth / 2}" y="${y + resourceHeight / 2 + 7}" text-anchor="middle"
      font-family="SF Mono, Menlo, Monaco, Consolas, monospace" font-size="22" font-weight="600"
      fill="${BRAND_GREEN_DARK}">${label}</text>
  `;
}

const resourceBoxes = resources
	.map((label, index) => {
		const x = resourcesStartX + index * (resourceWidth + resourceGap);
		return resourceBox(label, x, resourceY);
	})
	.join('\n');

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  ${roundedRect(folderBox.x, folderBox.y, folderBox.width, folderBox.height, 18, folderBox.stroke, folderBox.fill)}
  ${boxLabel(folderBox.label, folderBox.x + 20, folderBox.y + 34, folderBox.stroke)}

  ${roundedRect(projectBox.x, projectBox.y, projectBox.width, projectBox.height, 16, projectBox.stroke, projectBox.fill)}
  ${boxLabel(projectBox.label, projectBox.x + 20, projectBox.y + 34, projectBox.stroke)}

  <text x="${projectBox.x + projectBox.width / 2}" y="${resourceY - 18}" text-anchor="middle"
    font-family="SF Pro Text, Helvetica Neue, Arial, sans-serif" font-size="15" fill="${BRAND_GREEN_DARK}">
    infrastructure inside the project
  </text>

  ${resourceBoxes}
</svg>
`;

const svgPath = join(outputDir, `${baseName}.svg`);
const pngPath = join(outputDir, `${baseName}.png`);

writeFileSync(svgPath, svg.trim() + '\n');
console.log(`Wrote ${svgPath}`);

await sharp(Buffer.from(svg)).png().toFile(pngPath);
console.log(`Wrote ${pngPath}`);
