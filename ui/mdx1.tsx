/**
 * Translate MDX syntax properly with  our styling
 *
 * Created August 30th, 2023
 * @author ywarezk
 * @version 0.0.1
 * @license MIT
 */

import {useMDXComponent} from 'next-contentlayer/hooks';
import type {MDXComponents} from 'mdx/types';
import {cn} from '@/lib/utils';
import Link from 'next/link';
import * as icons from './icons';
import * as ui from '@/ui';
import {CodeEditor} from './CodeEditor';
import {Sandpack} from './Sandpack';
import {SandpackProps} from '@codesandbox/sandpack-react';
import {CopyButton} from './copy-button';
import {Callout} from './callout';

export const components: MDXComponents = {
  h1: ({className, ...props}: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className={cn('font-heading mt-2 scroll-m-20 text-4xl font-bold', className)} {...props} />
  ),
  h2: ({className, ...props}: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        'font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0',
        className
      )}
      {...props}
    />
  ),
  h3: ({className, ...props}: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className={cn('font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight', className)} {...props} />
  ),
  h4: ({className, ...props}: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4 className={cn('font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight', className)} {...props} />
  ),
  h5: ({className, ...props}: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5 className={cn('mt-8 scroll-m-20 text-lg font-semibold tracking-tight', className)} {...props} />
  ),
  h6: ({className, ...props}: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6 className={cn('mt-8 scroll-m-20 text-base font-semibold tracking-tight', className)} {...props} />
  ),

  a: ({className, ...props}: React.HTMLAttributes<HTMLAnchorElement>) => (
    <a
      className={cn(
        'duration-100 leading-normal transition ease-in hover:border-opacity-100 border-opacity-0 inline border-link border-b text-green',
        className
      )}
      {...props}
    />
  ),
  p: ({className, ...props}: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className={cn('leading-7 [&:not(:first-child)]:mt-6 text-lg', className)} {...props} />
  ),
  Step: ({className, ...props}: React.ComponentProps<'h3'>) => (
    <h3 className={cn('font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight', className)} {...props} />
  ),
  Steps: ({...props}) => <div className="[&>h3]:step steps mb-12 ml-4 border-l pl-8 [counter-reset:step]" {...props} />,
  LinkedCard: ({className, ...props}: React.ComponentProps<typeof Link>) => (
    <Link
      className={cn(
        'flex w-full flex-col items-center rounded-xl border bg-card p-6 text-card-foreground shadow transition-colors hover:bg-muted/50 sm:p-10',
        className
      )}
      {...props}
    />
  ),
  ul: ({className, ...props}: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn('my-6 ml-6 list-disc', className)} {...props} />
  ),
  ol: ({className, ...props}: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn('my-6 ml-6 list-decimal', className)} {...props} />
  ),
  li: ({className, ...props}: React.HTMLAttributes<HTMLElement>) => <li className={cn('mt-2', className)} {...props} />,
  pre: ({className, style, __rawString__, ...props}: any) => {
    const fileExtension = {
      javascript: 'js',
      typescript: 'ts',
      json: 'json',
    } as const;

    const ext = fileExtension[props['data-language'] as keyof typeof fileExtension];

    if (!ext) {
      return (
        <>
          <pre
            className={cn(
              'mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900',
              className
            )}
            {...props}
          />
          <CopyButton className="absolute right-4 top-4" value={__rawString__} />
        </>
      );
    }

    return (
      <ui.Card className="mt-5 text-sm">
        <ui.CardContent className="pt-6">
          {ext && (
            <CodeEditor
              showTabs={false}
              files={{
                [`index.${ext}`]: {
                  code: __rawString__.trim(),
                  active: true,
                  readOnly: true,
                },
              }}
              readOnly
              initMode="immediate"
            />
          )}
        </ui.CardContent>
      </ui.Card>
    );
  },
  code: ({className, ...props}: React.HTMLAttributes<HTMLElement>) => (
    <code className={cn('relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm', className)} {...props} />
  ),
  icons,
  ui,
  Link,
  Sandpack: (props: SandpackProps) => {
    return <Sandpack {...props} />;
  },
  Callout,
};

interface MdxProps {
  code: string;
}

export function Mdx({code}: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  );
}
