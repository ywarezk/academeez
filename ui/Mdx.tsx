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
