import { Sandpack, type SandpackProps } from '@codesandbox/sandpack-react';

/**
 * Sandpack wrapper for MDX lessons.
 * Use with `client:only="react"` so Sandpack (and its transitive deps) load only in the browser.
 */
export default function CourseSandpack(props: SandpackProps) {
	return <Sandpack {...props} />;
}
