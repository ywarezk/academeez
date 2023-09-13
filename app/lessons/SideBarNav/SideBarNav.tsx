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

  return items?.length ? (
    <>
      {items.map((item, index) =>
        item.href ? (
          <div>
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
                'flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground hover:underline'
              )}
            >
              {item.title}
            </div>
            {item.items?.length && <SideBarNavItems items={item.items} />}
          </>
        )
      )}
    </>
  ) : null;
}
