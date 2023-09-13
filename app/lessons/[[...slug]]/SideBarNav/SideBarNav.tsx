'use client';

import Link from 'next/link';
import {useParams, usePathname} from 'next/navigation';
import {cn} from '@/lib/utils';
import {SidebarNavItem} from './nav.types';
import {toc} from './toc';

export function SideBarNav() {
  const {slug} = useParams();
  const items = toc[slug[0]];
  console.log(items);

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <div key={index} className={cn('pb-4')}>
          <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">{item.title}</h4>
          <div className="text-sm">{item?.items?.length && <SideBarNavItems items={item.items} />}</div>
        </div>
      ))}
    </div>
  );
}

interface DocsSidebarNavItemsProps {
  items: SidebarNavItem[];
}

export function SideBarNavItems({items}: DocsSidebarNavItemsProps) {
  const pathname = usePathname();
  console.log(pathname);

  return items?.length ? (
    <>
      {items.map((item, index) =>
        item.href ? (
          <div className={cn('p-2')}>
            <Link
              key={index}
              href={item.href}
              className={cn(
                'group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline',
                pathname === item.href ? 'font-medium text-foreground' : 'text-muted-foreground'
              )}
            >
              {item.title}
            </Link>
          </div>
        ) : (
          <>
            <div
              key={index}
              className={cn(
                'border-l-2',
                'w-full cursor-not-allowed items-center rounded-md p-2 px-4 text-muted-foreground'
              )}
            >
              {item.title}
              {item.items?.length > 0 && <SideBarNavItems items={item.items} />}
            </div>
          </>
        )
      )}
    </>
  ) : null;
}
