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

const components: MDXComponents = {
  h1: ({className, ...props}: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className={cn('font-bold mt-2 text-7xl', className)} {...props} />
  ),
  h2: ({className, ...props}: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className={cn('font-bold mt-2 text-5xl', className)} {...props} />
  ),
  a: ({className, ...props}: React.HTMLAttributes<HTMLAnchorElement>) => (
    <a className={cn('font-medium underline underline-offset-4', className)} {...props} />
  ),
  p: ({className, ...props}: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className={cn('leading-7 [&:not(:first-child)]:mt-6', className)} {...props} />
  ),
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
