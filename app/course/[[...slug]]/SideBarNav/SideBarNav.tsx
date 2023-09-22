'use client';

import Link from 'next/link';
import {notFound, useParams} from 'next/navigation';
import {cn} from '@/lib/utils';
import {toc} from './toc';
import {NavItem} from './nav.types';
import {Collapsible, CollapsibleContent} from '@/ui';
import {difference, isEmpty} from 'lodash';
import {CaretRightIcon, CaretDownIcon} from '@radix-ui/react-icons';
import {buttonVariants} from '@/ui';
import {FC, Fragment, SVGProps} from 'react';
import {IconProps} from '@radix-ui/react-icons/dist/types';

export function SideBarNav() {
  const {slug} = useParams();
  const course = toc.find(course => course.href === `/course/${slug[0]}`);
  const Icon: FC<SVGProps<any>> = course?.Icon as FC<SVGProps<any>>;

  if (!course) {
    return notFound();
  }

  return (
    <div className="lg:-mt-16">
      <div className="lg:pt-16 fixed lg:sticky top-0 start-0 end-0 py-0 shadow lg:shadow-none">
        <div className="sticky top-0 lg:bottom-0 lg:h-[calc(100vh-4rem)] flex flex-col">
          <div className="overflow-y-scroll no-bg-scrollbar lg:w-[342px] grow bg-wash dark:bg-wash-dark">
            <aside className="lg:grow flex-col w-full pb-8 lg:pb-0 lg:max-w-xs z-10 hidden lg:block">
              <nav>
                <ul>
                  <Link
                    className={cn('mb-5 justify-start font-bold flex p-3 items-center hover:text-primary/60 w-fit')}
                    href={course?.href}
                  >
                    <Icon height={48} width={48} />
                    <h3 className={cn('font-bold ml-3')}>{course?.title}</h3>
                  </Link>

                  {course.items.map(item => {
                    return <SideBarNavItems item={item} key={item.href} />;
                  })}
                </ul>
              </nav>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}

interface DocsSidebarNavItemsProps {
  item: NavItem;
  ps?: number;
  className?: string;
}

export function SideBarNavItems({item, ps = 5}: DocsSidebarNavItemsProps) {
  const {slug} = useParams() as {slug: string[]};

  const itemSlug = item.href.split('/').shift();

  // lodash check if array slug contains the array itemSlug
  const isOpen = difference(itemSlug, slug).length === 0;

  let Icon = <></>;
  if (!isEmpty(item.items) && !isOpen) {
    Icon = <CaretRightIcon width={20} height={20} />;
  }
  if (!isEmpty(item.items) && isOpen) {
    Icon = <CaretDownIcon width={20} height={20} />;
  }

  return (
    <li>
      <Link
        className={cn(
          `hover:bg-green/20 flex justify-between font-medium p-2 ps-${ps} text-secondary rounded-r-2xl`,
          !isEmpty(item.items) ? 'font-bold text-base' : 'text-sm'
        )}
        href={item.href}
      >
        <div className="overflow-ellipsis whitespace-nowrap overflow-hidden">{item.title}</div>
        <span className="pe-1 text-tertiary dark:text-tertiary-dark ml-2 flex items-center">{Icon}</span>
      </Link>

      {!isEmpty(item.items) && (
        <Collapsible open={isOpen}>
          <CollapsibleContent>
            <ul>
              {item.items.map(item => {
                return <SideBarNavItems className="ps-5 ps-6 ps-7 ps-8" ps={ps + 1} item={item} key={item.href} />;
              })}
            </ul>
          </CollapsibleContent>
        </Collapsible>
      )}
    </li>
  );
}
