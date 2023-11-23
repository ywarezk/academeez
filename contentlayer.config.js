import path from 'path';
import {defineDocumentType, makeSource} from 'contentlayer/source-files';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import {codeImport} from 'remark-code-import';
import remarkGfm from 'remark-gfm';
import {getHighlighter, loadTheme} from 'shiki';
import {visit} from 'unist-util-visit';

export const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },

    lessonType: {
      type: 'string',
      required: false,
      default: 'lesson',
    },
    video: {
      type: 'string',
      required: false,
    },
    publishDate: {
      type: 'string',
      required: true,
      default: '2021-01-01',  
    },
    isReady: {
      type: 'boolean',
      required: true,
      default: true        
    }
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: doc => {
        return doc._raw.flattenedPath;
      },
    },
    thumbnail: {
      type: 'string',
      resolve: doc => {
        return `https://raw.githubusercontent.com/ywarezk/academeez/main/content/${doc._raw.flattenedPath}/video/thumbnail.png`;
      },
    },
    getPublishDate: {
      type: 'date',
      resolve: doc => {
        return new Date(doc.publishDate);
      },
    }
  },
}));

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Doc],
  contentDirExclude: ['**/*.md'],
  mdx: {
    remarkPlugins: [remarkGfm, codeImport],
    rehypePlugins: [
      rehypeSlug,
      () => tree => {
        visit(tree, node => {
          if (node?.type === 'element' && node?.tagName === 'pre') {
            const [codeEl] = node.children;
            if (codeEl.tagName !== 'code') {
              return;
            }

            if (codeEl.data?.meta) {
              // Extract event from meta and pass it down the tree.
              const regex = /event="([^"]*)"/;
              const match = codeEl.data?.meta.match(regex);
              if (match) {
                node.__event__ = match ? match[1] : null;
                codeEl.data.meta = codeEl.data.meta.replace(regex, '');
              }
            }

            node.__rawString__ = codeEl.children?.[0].value;
            node.__src__ = node.properties?.__src__;
            node.__style__ = node.properties?.__style__;
          }
        });
      },
      [
        rehypePrettyCode,
        {
          getHighlighter: async () => {
            const theme = await loadTheme(path.join(process.cwd(), '/lib/themes/dark.json'));
            return await getHighlighter({theme});
          },
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{type: 'text', value: ' '}];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push('line--highlighted');
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ['word--highlighted'];
          },
        },
      ],
      () => tree => {
        visit(tree, node => {
          if (node?.type === 'element' && node?.tagName === 'div') {
            if (!('data-rehype-pretty-code-fragment' in node.properties)) {
              return;
            }

            const preElement = node.children.at(-1);
            if (preElement.tagName !== 'pre') {
              return;
            }

            preElement.properties['__withMeta__'] = node.children.at(0).tagName === 'div';
            preElement.properties['__rawString__'] = node.__rawString__;

            if (node.__src__) {
              preElement.properties['__src__'] = node.__src__;
            }

            if (node.__event__) {
              preElement.properties['__event__'] = node.__event__;
            }

            if (node.__style__) {
              preElement.properties['__style__'] = node.__style__;
            }
          }
        });
      },
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['subheading-anchor'],
            ariaLabel: 'Link to section',
          },
        },
      ],
    ],
  },
});
