import Link from 'next/link';
import {cn} from '@/lib/utils';
import {NavItem, getToc} from '@/lib';
import {Collapsible, CollapsibleContent} from '@/ui';
import {difference, isEmpty, isEqual} from 'lodash';
import {CaretRightIcon, CaretDownIcon} from '@radix-ui/react-icons';
import {FC, SVGProps} from 'react';
import {ScrollArea} from '@/ui';
import {useLocale} from 'next-intl';

export const TocBar: FC<{slug: string[]}> = async ({slug = []}) => {
  const locale = useLocale();
  let toc = await getToc(slug, locale);

  if (isEmpty(slug)) {
    return null;
  }

  const Icon: FC<SVGProps<any>> = toc?.Icon as FC<SVGProps<any>>;

  return (
    <div className="lg:-mt-16">
      <div className="lg:pt-16 fixed lg:sticky top-0 start-0 end-0 py-0 shadow lg:shadow-none">
        <div className="sticky top-0 lg:bottom-0 lg:h-[calc(100vh-4rem)] flex flex-col">
          <div className="overflow-y-scroll no-bg-scrollbar lg:w-[342px] grow bg-wash dark:bg-wash-dark">
            <aside className="lg:grow flex-col w-full pb-8 lg:pb-0 lg:max-w-xs z-10 hidden lg:block">
              {toc && (
                <aside className="lg:grow flex-col w-full pb-8 lg:pb-0 lg:max-w-xs z-10 hidden lg:block">
                  <nav>
                    <ul>
                      <Link
                        className={cn('mb-5 justify-start font-bold flex p-3 items-center hover:text-primary/60 w-fit')}
                        href={toc?.href}
                      >
                        <Icon height={48} width={48} />
                        <h3 className={cn('font-bold ml-3')}>{toc?.title}</h3>
                      </Link>

                      {toc.items.map((item: NavItem) => {
                        return <TocBarNavItems item={item} key={item.href} slug={slug} />;
                      })}
                    </ul>
                  </nav>
                </aside>
              )}
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

interface TocBarNavItemsProps {
  item: NavItem;
  ps?: number;
  className?: string;
  slug: string[];
}

export function TocBarNavItems({item, ps = 5, slug}: TocBarNavItemsProps) {
  // remove first item from the array
  const itemFullUrlArray = item.href.split('/');
  const itemSlug = itemFullUrlArray.slice(2);

  // lodash check if array slug contains the array itemSlug
  const isOpen = difference(itemSlug, slug).length === 0;
  const isEqualSlug = isEqual(itemSlug, slug);

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
          !isEmpty(item.items) ? 'font-bold text-base' : 'text-sm',
          isEqualSlug && 'bg-green/20'
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
                return (
                  <TocBarNavItems slug={slug} className="ps-5 ps-6 ps-7 ps-8" ps={ps + 1} item={item} key={item.href} />
                );
              })}
            </ul>
          </CollapsibleContent>
        </Collapsible>
      )}
    </li>
  );
}
