import { useRef, useState, type KeyboardEvent } from 'react';
import CourseSandpack from '~/components/CourseSandpack';

const EXAMPLE_IMAGE = 'https://react.dev/images/docs/scientists/7vQD0fPs.jpg';

const htmlFiles = {
	'index.html': {
		readOnly: false,
		code: `<!DOCTYPE html>
<html lang="en">
  <body>
    <div>
      <h1>Close tags and self-closing tags</h1>
      <p>
        In HTML you can have a tag that is not closed. For example, the following
        <code>img</code> tag:
      </p>
      <img src="${EXAMPLE_IMAGE}" alt="Gregorio Y. Zara">
      <h1>Case insensitive</h1>
      <P>
        HTML is not case sensitive. For example, this paragraph tag is created with a
        capital P.
      </P>
      <h1>Events are lowercased</h1>
      <p>
        In HTML, event attributes are written in lowercase, for example
        <code>onclick</code>:
      </p>
      <button type="button" onclick="alert('Hello from HTML!')">
        Click me
      </button>
      <h1>style attribute</h1>
      <p>
        In HTML, the <code>style</code> attribute is a string. CSS properties use
        kebab-case:
      </p>
      <p style="background-color: red">
        This paragraph has a red background in HTML.
      </p>
      <h1>Insert JavaScript</h1>
      <p>
        In HTML you need a <code>script</code> tag to run JavaScript. In this
        example, JavaScript writes today's date into the element below.
      </p>
      <p id="today">Today is </p>
      <script>
        document.getElementById('today').textContent +=
          new Date().toLocaleDateString();
      </script>
      <h1>class</h1>
      <p>
        To mark an element with a CSS class we use the <code>class</code> attribute:
      </p>
      <style>
        .highlight {
          background-color: yellow;
          padding: 4px 8px;
        }
      </style>
      <p class="highlight">
        This paragraph uses the highlight class.
      </p>
      <h1>for</h1>
      <p>
        The same applies to <code>for</code>. In HTML we use <code>for</code> to
        associate a label with an input:
      </p>
      <label for="email">Email</label>
      <input id="email" type="text" />
      <h1>One parent</h1>
      <p>
        In HTML, adjacent elements do not need an extra wrapper. These two
        sections are siblings:
      </p>
      <h2>Section A</h2>
      <p>Content for section A.</p>
      <h2>Section B</h2>
      <p>Content for section B.</p>
    </div>
  </body>
</html>`,
	},
	'index.js': {
		code: '',
	},
};

const jsxFiles = {
	'App.js': {
		readOnly: false,
		code: `import './styles.css';

export default function App() {
  return (
    /* Remove this comment block to return two roots — see "One parent" below.
    <div aria-hidden="true" />
    */
    <div>
      <h1>Close tags and self-closing tags</h1>
      <p>
        In JSX you must always close your tags. The same image uses a
        self-closing tag. Note the slash before the closing angle bracket:
      </p>
      <img src="${EXAMPLE_IMAGE}" alt="Gregorio Y. Zara" />
      <h1>Case matters</h1>
      <p>
        In JSX, capital letters matter. Lowercase tags like <code>p</code> are HTML
        elements. If a tag starts with a capital letter, React looks for a component
        with that name in this file.
      </p>
      {/* Uncomment the block below to see what happens with a capital tag
          when there is no matching component in this file. */}
      {/* <P>
        This uses a capital P like the HTML example, but there is no P component
        defined here.
      </P> */}
      <h1>Events use camelCase</h1>
      <p>
        In JSX, the same event uses camelCase and a JavaScript function in curly
        braces, for example <code>onClick</code>:
      </p>
      <button type="button" onClick={() => alert('Hello from JSX!')}>
        Click me
      </button>
      <h1>style attribute</h1>
      <p>
        In JSX, <code>style</code> takes a JavaScript object with camelCase property
        names. Note the double curly braces — an object inside JSX:
      </p>
      <p style={{ backgroundColor: 'red' }}>
        This paragraph has a red background in JSX.
      </p>
      <h1>Insert JavaScript</h1>
      <p>
        In JSX you embed JavaScript directly with curly braces. No script tag is
        needed inside the component:
      </p>
      <p>Today is {new Date().toLocaleDateString()}</p>
      <h1>className</h1>
      <p>
        In JSX we use <code>className</code> instead of <code>class</code> because{' '}
        <code>class</code> is a reserved word in JavaScript:
      </p>
      <p className="highlight">
        This paragraph uses the highlight class.
      </p>
      <h1>htmlFor</h1>
      <p>
        In JSX we use <code>htmlFor</code> instead of <code>for</code> because{' '}
        <code>for</code> is a reserved word in JavaScript:
      </p>
      <label htmlFor="email">Email</label>
      <input id="email" type="text" />
      <h1>One parent</h1>
      <p>
        In JSX, a component must return a single parent element. At the top of this{' '}
        <code>return</code>, remove the block comment around the extra{' '}
        <code>div</code> to see the error. Inside one parent you can group siblings
        with a <code>div</code> or a Fragment (<code>{'<>...</>'}</code>):
      </p>
      <>
        <h2>Section A</h2>
        <p>Content for section A.</p>
        <h2>Section B</h2>
        <p>Content for section B.</p>
      </>
    </div>
  );
}`,
	},
	'styles.css': {
		code: `.highlight {
  background-color: yellow;
  padding: 4px 8px;
}`,
	},
};

type Tab = 'html' | 'jsx';

const TABS: Tab[] = ['html', 'jsx'];

const tabButtonClass = (active: boolean) =>
	[
		'px-4 py-2 text-sm font-medium border-b-2 -mb-px transition-colors',
		active
			? 'border-[hsl(var(--sl-color-accent))] text-[hsl(var(--sl-color-text-accent))]'
			: 'border-transparent text-[hsl(var(--sl-color-gray-3))] hover:text-[hsl(var(--sl-color-text))]',
	].join(' ');

/** HTML vs JSX tabbed Sandpack for the JSX chapter intro lesson. */
export default function HtmlJsxCompareEditor() {
	const [tab, setTab] = useState<Tab>('html');
	const tabRefs = useRef<Record<Tab, HTMLButtonElement | null>>({
		html: null,
		jsx: null,
	});

	const selectTab = (next: Tab) => {
		setTab(next);
		tabRefs.current[next]?.focus();
	};

	const handleTabListKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
		const index = TABS.indexOf(tab);
		let nextIndex = index;

		switch (event.key) {
			case 'ArrowLeft':
				nextIndex = index === 0 ? TABS.length - 1 : index - 1;
				break;
			case 'ArrowRight':
				nextIndex = index === TABS.length - 1 ? 0 : index + 1;
				break;
			case 'Home':
				nextIndex = 0;
				break;
			case 'End':
				nextIndex = TABS.length - 1;
				break;
			default:
				return;
		}

		event.preventDefault();
		selectTab(TABS[nextIndex]);
	};

	return (
		<div>
			<div
				role="tablist"
				aria-label="HTML vs JSX"
				className="flex gap-1 border-b border-[hsl(var(--sl-color-gray-5))] mb-4"
				onKeyDown={handleTabListKeyDown}
			>
				<button
					type="button"
					role="tab"
					id="html-jsx-tab-html"
					ref={(el) => {
						tabRefs.current.html = el;
					}}
					aria-selected={tab === 'html'}
					aria-controls="html-jsx-panel"
					tabIndex={tab === 'html' ? 0 : -1}
					className={tabButtonClass(tab === 'html')}
					onClick={() => selectTab('html')}
				>
					HTML
				</button>
				<button
					type="button"
					role="tab"
					id="html-jsx-tab-jsx"
					ref={(el) => {
						tabRefs.current.jsx = el;
					}}
					aria-selected={tab === 'jsx'}
					aria-controls="html-jsx-panel"
					tabIndex={tab === 'jsx' ? 0 : -1}
					className={tabButtonClass(tab === 'jsx')}
					onClick={() => selectTab('jsx')}
				>
					JSX
				</button>
			</div>

			<div
				role="tabpanel"
				id="html-jsx-panel"
				aria-labelledby={tab === 'html' ? 'html-jsx-tab-html' : 'html-jsx-tab-jsx'}
			>
				{tab === 'html' ? (
					<CourseSandpack
						key="html"
						template="vanilla"
						options={{
							visibleFiles: ['/index.html'],
							activeFile: '/index.html',
						}}
						files={htmlFiles}
					/>
				) : (
					<CourseSandpack key="jsx" template="react" files={jsxFiles} />
				)}
			</div>
		</div>
	);
}
