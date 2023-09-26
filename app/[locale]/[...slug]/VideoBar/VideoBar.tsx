/**
 * The bar on the right side will display a video and coding section
 *
 * Created September 23rd, 2023
 * @author ywarezk
 * @version 0.0.1
 * @license MIT
 */

import {cn} from '@/lib'
import type {FC} from 'react'
import {getDocFromSlug} from '@/lib'
import type {Params} from 'next/dist/shared/lib/router/utils/route-matcher'

export const VideoBar: FC<{params: Params}> = async ({params}) => {
  const doc = await getDocFromSlug(params.slug)

  if (!doc?.video && !doc?.exercise) {
    return null
  }

  return <div className={cn('bg-slate-300 flex-1')}>video is here</div>
}
