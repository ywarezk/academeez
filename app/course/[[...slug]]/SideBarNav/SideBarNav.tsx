'use client';

import Link from 'next/link';
import {notFound, useParams, useRouter, useSelectedLayoutSegment, useSelectedLayoutSegments} from 'next/navigation';
import {cn} from '@/lib/utils';
import {toc} from './toc';
import {NavItem} from './nav.types';
import {Collapsible, CollapsibleTrigger} from '@/ui';
import {useState} from 'react';
import {difference, isEmpty} from 'lodash';
import {TriangleRightIcon} from '@radix-ui/react-icons';
// import {} from '@/ui';
// import {useRouter} from 'next/router';

export function SideBarNav() {
  const {slug} = useParams();
  const course = toc.find(course => course.href === `/course/${slug[0]}`);

  if (!course) {
    return notFound();
  }

  return (
    <div className="w-full">
      <h3 className={cn('text-2xl hover:underline hover:text-green-400')}>
        <Link href={course?.href}>{course?.title}</Link>
      </h3>
      {course.items.map(item => {
        return <SideBarNavItems item={item} />;
      })}
    </div>
  );
}

// export function SideBarNav() {
//   const {slug} = useParams();
//   const title = slug[0];
//   const items = toc[title];
//   console.log(items);

//   return (
//     <div className="w-full">
//       {items.map((item, index) => (
//         <div key={index} className={cn('pb-4')}>
//           <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">{item.title}</h4>
//           <div className="text-sm">{item?.items?.length && <SideBarNavItems items={item.items} />}</div>
//         </div>
//       ))}
//     </div>
//   );
// }

interface DocsSidebarNavItemsProps {
  item: NavItem;
}

export function SideBarNavItems({item}: DocsSidebarNavItemsProps) {
  const segments = useSelectedLayoutSegment();
  console.log(segments);
  const router = useRouter();
  console.log(router);
  const {slug} = useParams() as {slug: string[]};

  const itemSlug = item.href.split('/').shift();

  // lodash check if array slug contains the array itemSlug
  const isInitialOpen = difference(itemSlug, slug).length === 0;
  const [isOpen, setIsOpen] = useState(isInitialOpen);

  if (!isEmpty(item.items)) {
    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild></CollapsibleTrigger>
      </Collapsible>
    );
  }
}

// export function SideBarNavItems({items}: DocsSidebarNavItemsProps) {
//   const pathname = usePathname();
//   console.log(pathname);

//   return items?.length ? (
//     <>
//       {items.map((item, index) =>
//         item.href ? (
//           <div className={cn('p-2')}>
//             <Link
//               key={index}
//               href={item.href}
//               className={cn(
//                 'group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline',
//                 pathname === item.href ? 'font-medium text-foreground' : 'text-muted-foreground'
//               )}
//             >
//               {item.title}
//             </Link>
//           </div>
//         ) : (
//           <>
//             <div
//               key={index}
//               className={cn(
//                 'border-l-2',
//                 'w-full cursor-not-allowed items-center rounded-md p-2 px-4 text-muted-foreground'
//               )}
//             >
//               {item.title}
//               {item.items?.length > 0 && <SideBarNavItems items={item.items} />}
//             </div>
//           </>
//         )
//       )}
//     </>
//   ) : null;
// }
