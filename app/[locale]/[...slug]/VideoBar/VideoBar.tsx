/**
 * The bar on the right side will display a video and coding section.
 * This bar is optional and will only display if there is a vidoe.mdx file
 *
 * Created September 23rd, 2023
 * @author ywarezk
 * @version 0.0.1
 * @license MIT
 */

import type {FC} from 'react';
import {getDocFromSlug} from '@/lib';
import type {Params} from 'next/dist/shared/lib/router/utils/route-matcher';
import {Mdx} from '@/ui';

export const VideoBar: FC<{params: Params}> = async ({params}) => {
  const video = await getDocFromSlug([...params.slug, 'video'], params.locale);

  if (!video) {
    return null;
  }

  return (
    <div className="-mt-16">
      <nav className="pt-16 sticky top-0 end-0 pr-5">
        <Mdx code={video.body.code} />
      </nav>
    </div>
  );
};
