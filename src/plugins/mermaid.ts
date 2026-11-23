import type { RemarkPlugin } from '@astrojs/markdown-remark';
import type { Root } from 'mdast';
import { visit } from 'unist-util-visit';

const escapeMap: Record<string, string> = {
	'&': '&amp;',
	'<': '&lt;',
	'>': '&gt;',
	'"': '&quot;',
	"'": '&#39;',
};

const escapeHtml = (str: string) => str.replace(/[&<>"']/g, (c) => escapeMap[c]);

export const mermaid: RemarkPlugin<[]> = () => (tree: Root) => {
	visit(tree, 'code', (node) => {
		if (node.lang !== 'mermaid') return;

		// @ts-expect-error -- node type is not defined in unist, we're mutating it to html
		node.type = 'html';
		node.value = `
      <div class="mermaid" data-content="${escapeHtml(node.value)}">
        <p>Loading graph...</p>
      </div>
    `;
	});
};
