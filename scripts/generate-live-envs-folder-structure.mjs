import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputDir = join(__dirname, '../src/content/docs/courses/terraform/stack');
const baseName = 'live-envs-folder-structure';

const BRAND_GREEN = '#01D662';
const BRAND_GREEN_DARK = '#019A48';
const BRAND_GREEN_LIGHT = '#6EEBA8';
const TEXT_COLOR = '#14532D';
const LINE_COLOR = '#86EFAC';

const INDENT = 38;
const ROW_HEIGHT = 44;
const PADDING = 44;
const ICON_SIZE = 24;
const ICON_GAP = 12;
const FONT_SIZE = 17;
const LABEL_WIDTH = 180;
const CHEVRON_SIZE = 12;
const TREE_LINE_WIDTH = 2;

function environmentUnits() {
	return [
		{
			name: 'folder',
			type: 'folder',
			expanded: true,
			children: [{ name: 'terragrunt.hcl', type: 'file' }],
		},
		{
			name: 'project',
			type: 'folder',
			expanded: true,
			children: [{ name: 'terragrunt.hcl', type: 'file' }],
		},
		{ name: '...', type: 'ellipsis' },
	];
}

function environment(name) {
	return {
		name,
		type: 'folder',
		expanded: true,
		children: environmentUnits(),
	};
}

const tree = [
	{
		name: 'live',
		type: 'folder',
		expanded: true,
		children: [
			{
				name: 'envs',
				type: 'folder',
				expanded: true,
				children: [environment('prod'), environment('non-prod')],
			},
		],
	},
];

function flatten(nodes, depth = 0, isLastStack = [true], result = []) {
	nodes.forEach((node, index) => {
		const isLast = index === nodes.length - 1;
		result.push({
			name: node.name,
			type: node.type,
			depth,
			isLast,
			expanded: node.expanded ?? false,
			isLastStack: [...isLastStack, isLast],
		});

		if (node.type === 'ellipsis') {
			return;
		}

		if (node.expanded && node.children?.length) {
			flatten(node.children, depth + 1, [...isLastStack, isLast], result);
		}
	});

	return result;
}

function folderIcon(x, y, size, open = true) {
	const s = size / 18;
	if (!open) {
		return `
      <g transform="translate(${x}, ${y}) scale(${s})">
        <path d="M1 4.5C1 3.67 1.67 3 2.5 3H7.2L9 4.8H15.5C16.33 4.8 17 5.47 17 6.3V14.5C17 15.33 16.33 16 15.5 16H2.5C1.67 16 1 15.33 1 14.5V4.5Z" fill="${BRAND_GREEN_LIGHT}" stroke="${BRAND_GREEN}" stroke-width="1.1"/>
        <path d="M1 6.5H17V14.5C17 15.33 16.33 16 15.5 16H2.5C1.67 16 1 15.33 1 14.5V6.5Z" fill="${BRAND_GREEN}" fill-opacity="0.25"/>
      </g>`;
	}

	return `
    <g transform="translate(${x}, ${y}) scale(${s})">
      <path d="M1 4.5C1 3.67 1.67 3 2.5 3H7.2L9 4.8H15.5C16.33 4.8 17 5.47 17 6.3V14.5C17 15.33 16.33 16 15.5 16H2.5C1.67 16 1 15.33 1 14.5V4.5Z" fill="${BRAND_GREEN_LIGHT}" stroke="${BRAND_GREEN}" stroke-width="1.1"/>
      <path d="M1 6.5H17V14.5C17 15.33 16.33 16 15.5 16H2.5C1.67 16 1 15.33 1 14.5V6.5Z" fill="${BRAND_GREEN}" fill-opacity="0.35"/>
      <path d="M1 8H17" stroke="${BRAND_GREEN}" stroke-width="0.8" opacity="0.5"/>
    </g>`;
}

function fileIcon(x, y, size) {
	const s = size / 18;
	return `
    <g transform="translate(${x}, ${y}) scale(${s})">
      <path d="M4 1H11L15 5V15C15 16.1 14.1 17 13 17H4C2.9 17 2 16.1 2 15V3C2 1.9 2.9 1 4 1Z" fill="#FFFFFF" stroke="${BRAND_GREEN}" stroke-width="1.2"/>
      <path d="M11 1V5H15" fill="none" stroke="${BRAND_GREEN}" stroke-width="1.2"/>
      <path d="M5.2 10.2L6.4 12.4L8.6 8.8" fill="none" stroke="${BRAND_GREEN_DARK}" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9.2 12.4H12.4" fill="none" stroke="${BRAND_GREEN_DARK}" stroke-width="1.3" stroke-linecap="round"/>
      <path d="M9.2 9.6H12.4" fill="none" stroke="${BRAND_GREEN_DARK}" stroke-width="1.3" stroke-linecap="round"/>
    </g>`;
}

function chevron(x, y, expanded) {
	const half = CHEVRON_SIZE / 2;
	if (expanded) {
		return `<path d="M ${x} ${y - half * 0.45} L ${x + half} ${y + half * 0.55} L ${x + CHEVRON_SIZE} ${y - half * 0.45}" fill="none" stroke="${BRAND_GREEN_DARK}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;
	}

	return `<path d="M ${x + 2} ${y - half} L ${x + half + 2} ${y} L ${x + 2} ${y + half}" fill="none" stroke="${BRAND_GREEN_DARK}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;
}

function treeGuides(row, y) {
	const guides = [];
	const baseX = PADDING;

	for (let level = 0; level < row.depth; level += 1) {
		const x = baseX + level * INDENT + 12;
		const parentIsLast = row.isLastStack[level + 1];
		const branchLength = 16;

		if (level < row.depth - 1) {
			if (!parentIsLast) {
				guides.push(
					`<line x1="${x}" y1="${y - ROW_HEIGHT / 2}" x2="${x}" y2="${y + ROW_HEIGHT / 2}" stroke="${LINE_COLOR}" stroke-width="${TREE_LINE_WIDTH}"/>`
				);
			}
		} else {
			guides.push(
				`<line x1="${x}" y1="${y - ROW_HEIGHT / 2}" x2="${x}" y2="${y}" stroke="${LINE_COLOR}" stroke-width="${TREE_LINE_WIDTH}"/>`
			);
			guides.push(
				`<line x1="${x}" y1="${y}" x2="${x + branchLength}" y2="${y}" stroke="${LINE_COLOR}" stroke-width="${TREE_LINE_WIDTH}"/>`
			);
			if (!row.isLast) {
				guides.push(
					`<line x1="${x}" y1="${y}" x2="${x}" y2="${y + ROW_HEIGHT / 2}" stroke="${LINE_COLOR}" stroke-width="${TREE_LINE_WIDTH}"/>`
				);
			}
		}
	}

	return guides.join('\n');
}

const rows = flatten(tree);
const maxDepth = Math.max(...rows.map((row) => row.depth));
const contentWidth =
	PADDING * 2 + (maxDepth + 2) * INDENT + 32 + ICON_SIZE + ICON_GAP + LABEL_WIDTH;
const contentHeight = PADDING * 2 + rows.length * ROW_HEIGHT;

const body = rows
	.map((row, index) => {
		const y = PADDING + index * ROW_HEIGHT + ROW_HEIGHT / 2;
		const chevronX = PADDING + row.depth * INDENT;
		const iconX = PADDING + row.depth * INDENT + 24;
		const iconY = y - ICON_SIZE / 2;
		const textX = iconX + ICON_SIZE + ICON_GAP;
		const icon =
			row.type === 'folder'
				? folderIcon(iconX, iconY, ICON_SIZE, row.expanded)
				: row.type === 'ellipsis'
					? ''
					: fileIcon(iconX, iconY, ICON_SIZE);
		const chevronMarkup = row.type === 'folder' ? chevron(chevronX, y, row.expanded) : '';
		const textXForRow = row.type === 'ellipsis' ? iconX : textX;

		return `
      ${treeGuides(row, y)}
      ${chevronMarkup}
      ${icon}
      <text x="${textXForRow}" y="${y + 6}" font-family="SF Mono, Menlo, Monaco, Consolas, monospace" font-size="${row.type === 'ellipsis' ? FONT_SIZE + 4 : FONT_SIZE}" font-weight="${row.type === 'ellipsis' ? '700' : '400'}" fill="${TEXT_COLOR}">${row.name}</text>
    `;
	})
	.join('\n');

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${contentWidth}" height="${contentHeight}" viewBox="0 0 ${contentWidth} ${contentHeight}">
  ${body}
</svg>
`;

const svgPath = join(outputDir, `${baseName}.svg`);
const pngPath = join(outputDir, `${baseName}.png`);

writeFileSync(svgPath, svg.trim() + '\n');
console.log(`Wrote ${svgPath} (${contentWidth}x${contentHeight})`);

await sharp(Buffer.from(svg)).png().toFile(pngPath);
console.log(`Wrote ${pngPath}`);
