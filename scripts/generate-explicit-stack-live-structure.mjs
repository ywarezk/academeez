import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputDir = join(__dirname, '../src/content/docs/courses/terraform/stack');
const baseName = 'explicit-stack-live-structure';

const BRAND_GREEN = '#01D662';
const BRAND_GREEN_DARK = '#019A48';
const BRAND_GREEN_LIGHT = '#B8F5D0';
const TEXT_COLOR = '#0F3D2E';
const GENERATED_TEXT_COLOR = '#2F6B4F';
const LINE_COLOR = '#019A48';
const GENERATED_LINE_COLOR = '#3FAF72';
const GENERATED_FILL = 'rgba(1, 214, 98, 0.14)';
const GENERATED_BORDER = '#01D662';

const INDENT = 36;
const ROW_HEIGHT = 42;
const PADDING = 44;
const ICON_SIZE = 24;
const ICON_GAP = 12;
const FONT_SIZE = 16;
const LABEL_WIDTH = 240;
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
				children: [
					{ name: 'terragrunt.stack.hcl', type: 'file' },
					{
						name: '.terragrunt-stack',
						type: 'folder',
						expanded: true,
						generated: true,
						children: [environment('prod'), environment('non-prod')],
					},
				],
			},
		],
	},
];

function flatten(nodes, depth = 0, isLastStack = [true], muted = false, result = []) {
	nodes.forEach((node, index) => {
		const isLast = index === nodes.length - 1;
		const rowMuted = muted || node.generated === true;

		result.push({
			name: node.name,
			type: node.type,
			depth,
			isLast,
			expanded: node.expanded ?? false,
			muted: rowMuted,
			isLastStack: [...isLastStack, isLast],
		});

		if (node.type === 'ellipsis') {
			return;
		}

		if (node.expanded && node.children?.length) {
			flatten(node.children, depth + 1, [...isLastStack, isLast], rowMuted, result);
		}
	});

	return result;
}

function folderIcon(x, y, size, open = true, muted = false) {
	const s = size / 18;
	const stroke = muted ? GENERATED_BORDER : BRAND_GREEN;
	const dash = muted ? ' stroke-dasharray="3.5 2.5"' : '';
	const fillOpacity = muted ? 0.22 : 0.35;

	if (!open) {
		return `
      <g transform="translate(${x}, ${y}) scale(${s})">
        <path d="M1 4.5C1 3.67 1.67 3 2.5 3H7.2L9 4.8H15.5C16.33 4.8 17 5.47 17 6.3V14.5C17 15.33 16.33 16 15.5 16H2.5C1.67 16 1 15.33 1 14.5V4.5Z" fill="${BRAND_GREEN_LIGHT}" stroke="${stroke}" stroke-width="1.2"${dash}/>
        <path d="M1 6.5H17V14.5C17 15.33 16.33 16 15.5 16H2.5C1.67 16 1 15.33 1 14.5V6.5Z" fill="${BRAND_GREEN}" fill-opacity="${muted ? 0.15 : 0.25}"/>
      </g>`;
	}

	return `
    <g transform="translate(${x}, ${y}) scale(${s})">
      <path d="M1 4.5C1 3.67 1.67 3 2.5 3H7.2L9 4.8H15.5C16.33 4.8 17 5.47 17 6.3V14.5C17 15.33 16.33 16 15.5 16H2.5C1.67 16 1 15.33 1 14.5V4.5Z" fill="${BRAND_GREEN_LIGHT}" stroke="${stroke}" stroke-width="1.2"${dash}/>
      <path d="M1 6.5H17V14.5C17 15.33 16.33 16 15.5 16H2.5C1.67 16 1 15.33 1 14.5V6.5Z" fill="${BRAND_GREEN}" fill-opacity="${fillOpacity}"/>
      <path d="M1 8H17" stroke="${stroke}" stroke-width="0.8" opacity="0.45"/>
    </g>`;
}

function fileIcon(x, y, size, muted = false) {
	const s = size / 18;
	const stroke = muted ? GENERATED_BORDER : BRAND_GREEN;
	const detail = muted ? GENERATED_TEXT_COLOR : BRAND_GREEN_DARK;
	const dash = muted ? ' stroke-dasharray="3.5 2.5"' : '';

	return `
    <g transform="translate(${x}, ${y}) scale(${s})">
      <path d="M4 1H11L15 5V15C15 16.1 14.1 17 13 17H4C2.9 17 2 16.1 2 15V3C2 1.9 2.9 1 4 1Z" fill="#FFFFFF" stroke="${stroke}" stroke-width="1.2"${dash}/>
      <path d="M11 1V5H15" fill="none" stroke="${stroke}" stroke-width="1.2"/>
      <path d="M5.2 10.2L6.4 12.4L8.6 8.8" fill="none" stroke="${detail}" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9.2 12.4H12.4" fill="none" stroke="${detail}" stroke-width="1.3" stroke-linecap="round"/>
      <path d="M9.2 9.6H12.4" fill="none" stroke="${detail}" stroke-width="1.3" stroke-linecap="round"/>
    </g>`;
}

function chevron(x, y, expanded, muted = false) {
	const half = CHEVRON_SIZE / 2;
	const stroke = muted ? GENERATED_TEXT_COLOR : BRAND_GREEN_DARK;

	if (expanded) {
		return `<path d="M ${x} ${y - half * 0.45} L ${x + half} ${y + half * 0.55} L ${x + CHEVRON_SIZE} ${y - half * 0.45}" fill="none" stroke="${stroke}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;
	}

	return `<path d="M ${x + 2} ${y - half} L ${x + half + 2} ${y} L ${x + 2} ${y + half}" fill="none" stroke="${stroke}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;
}

function treeGuides(row, y) {
	const guides = [];
	const baseX = PADDING;
	const lineColor = row.muted ? GENERATED_LINE_COLOR : LINE_COLOR;
	const dash = row.muted ? ' stroke-dasharray="4 3"' : '';

	for (let level = 0; level < row.depth; level += 1) {
		const x = baseX + level * INDENT + 12;
		const parentIsLast = row.isLastStack[level + 1];
		const branchLength = 16;

		if (level < row.depth - 1) {
			if (!parentIsLast) {
				guides.push(
					`<line x1="${x}" y1="${y - ROW_HEIGHT / 2}" x2="${x}" y2="${y + ROW_HEIGHT / 2}" stroke="${lineColor}" stroke-width="${TREE_LINE_WIDTH}"${dash}/>`
				);
			}
		} else {
			guides.push(
				`<line x1="${x}" y1="${y - ROW_HEIGHT / 2}" x2="${x}" y2="${y}" stroke="${lineColor}" stroke-width="${TREE_LINE_WIDTH}"${dash}/>`
			);
			guides.push(
				`<line x1="${x}" y1="${y}" x2="${x + branchLength}" y2="${y}" stroke="${lineColor}" stroke-width="${TREE_LINE_WIDTH}"${dash}/>`
			);
			if (!row.isLast) {
				guides.push(
					`<line x1="${x}" y1="${y}" x2="${x}" y2="${y + ROW_HEIGHT / 2}" stroke="${lineColor}" stroke-width="${TREE_LINE_WIDTH}"${dash}/>`
				);
			}
		}
	}

	return guides.join('\n');
}

function generatedBackground(rows, contentWidth) {
	const generatedIndexes = rows
		.map((row, index) => (row.muted ? index : -1))
		.filter((index) => index >= 0);

	if (generatedIndexes.length === 0) {
		return '';
	}

	const first = generatedIndexes[0];
	const last = generatedIndexes[generatedIndexes.length - 1];
	const top = PADDING + first * ROW_HEIGHT - 6;
	const height = (last - first + 1) * ROW_HEIGHT + 12;
	const left = PADDING - 10;
	const width = contentWidth - PADDING * 2 + 20;

	return `
    <rect x="${left}" y="${top}" width="${width}" height="${height}" rx="12" ry="12"
      fill="${GENERATED_FILL}" stroke="${GENERATED_BORDER}" stroke-width="1.5" stroke-dasharray="8 5"/>
    <text x="${left + 14}" y="${top + 16}" font-family="SF Pro Text, Helvetica Neue, Arial, sans-serif"
      font-size="12" font-weight="600" fill="${GENERATED_TEXT_COLOR}">gitignored</text>
  `;
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
				? folderIcon(iconX, iconY, ICON_SIZE, row.expanded, row.muted)
				: row.type === 'ellipsis'
					? ''
					: fileIcon(iconX, iconY, ICON_SIZE, row.muted);
		const chevronMarkup =
			row.type === 'folder' ? chevron(chevronX, y, row.expanded, row.muted) : '';
		const textXForRow = row.type === 'ellipsis' ? iconX : textX;
		const textColor = row.muted ? GENERATED_TEXT_COLOR : TEXT_COLOR;
		const fontStyle = row.muted && row.name === '.terragrunt-stack' ? ' font-style="italic"' : '';

		return `
      ${treeGuides(row, y)}
      ${chevronMarkup}
      ${icon}
      <text x="${textXForRow}" y="${y + 6}" font-family="SF Mono, Menlo, Monaco, Consolas, monospace" font-size="${row.type === 'ellipsis' ? FONT_SIZE + 4 : FONT_SIZE}" font-weight="${row.type === 'ellipsis' ? '700' : '400'}" fill="${textColor}"${fontStyle}>${row.name}</text>
    `;
	})
	.join('\n');

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${contentWidth}" height="${contentHeight}" viewBox="0 0 ${contentWidth} ${contentHeight}">
  ${generatedBackground(rows, contentWidth)}
  ${body}
</svg>
`;

const svgPath = join(outputDir, `${baseName}.svg`);
const pngPath = join(outputDir, `${baseName}.png`);

writeFileSync(svgPath, svg.trim() + '\n');
console.log(`Wrote ${svgPath} (${contentWidth}x${contentHeight})`);

await sharp(Buffer.from(svg)).png().toFile(pngPath);
console.log(`Wrote ${pngPath}`);
