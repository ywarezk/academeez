/**
 * Component for main navigation
 *
 * Created August 14th, 2023
 * @author ywarezk
 * @version 0.3.0
 * @license MIT
 */

import type {FC} from 'react';
import {cn} from '@/lib';
import Link from 'next/link';
import {TwitterLogoIcon, GitHubLogoIcon, VideoIcon, MagnifyingGlassIcon} from '@radix-ui/react-icons';
import {buttonVariants, AzLineIcon, Button} from '@/ui';

export const Nav: FC = () => {
  return (
    <header className={cn('sticky z-50 top-0')}>
      <nav className={cn('border-b')}>
        <div className={cn('flex px-4 py-3 justify-between items-center mx-auto')}>
          <div className="flex">
            <Link href="/" data-test="az-logo" className={cn('flex items-center font-bold text-2xl')}>
              <AzLineIcon className="h-8 w-8" />
              <span>academeez</span>
            </Link>
          </div>
          <div className={cn('h-auto flex grow justify-end')}>
            {/* begin search */}
            <Button
              variant="outline"
              className={cn(
                'relative w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64 mr-2'
              )}
            >
              <MagnifyingGlassIcon />
              <span className="inline-flex ml-3">Search</span>
              <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                <span className="text-xs">⌘</span>K
              </kbd>
            </Button>
            {/* end search */}

            <Link
              href="/course"
              className={cn(
                buttonVariants({
                  variant: 'outline',
                }),
                'mx-2 text-muted-foreground'
              )}
            >
              Courses
            </Link>

            {/* link to github */}
            <a target="_blank" data-test="github-link" href="https://github.com/ywarezk/academeez">
              <div
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                  }),
                  'w-11 px-0'
                )}
              >
                <GitHubLogoIcon className="h-5 w-5 fill-current" />
              </div>
            </a>

            {/* link to youtube with svg icon */}
            <a data-test="youtube-link" target="_blank" href="https://www.youtube.com/channel/UCmnTSM4hGDJin7g5PyXa9pQ">
              <div
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                  }),
                  'w-11 px-0'
                )}
              >
                <VideoIcon className="h-5 w-5 fill-current" />
              </div>
            </a>

            <a target="_blank" data-test="twitter-link" href="https://twitter.com/academeez">
              <div
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                  }),
                  'w-11 px-0'
                )}
              >
                <TwitterLogoIcon className="h-5 w-5 fill-current" />
              </div>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};
