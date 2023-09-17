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
import {TwitterLogoIcon, GitHubLogoIcon, VideoIcon} from '@radix-ui/react-icons';
import {buttonVariants, AzLineIcon} from '@/ui';

export const Nav: FC = () => {
  return (
    <nav className={cn('border-b')}>
      <div className={cn('flex px-4 py-3 justify-between items-center mx-auto')}>
        <div>
          <Link href="/" data-test="az-logo" className={cn('flex items-center font-bold text-2xl')}>
            <AzLineIcon />
            <span>academeez</span>
          </Link>
        </div>
        <div className={cn('h-auto flex grow justify-end')}>
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
  );
};
