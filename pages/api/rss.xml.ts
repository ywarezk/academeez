/**
 * generate the rss feed
 *
 * Created November 23rd, 2023
 * @author ywarezk
 * @version 0.31.0
 * @license MIT
 */

import { allDocs } from '@/.contentlayer/generated';
import type {NextApiRequest, NextApiResponse} from 'next';
import RSS from 'rss';

export default function rss(req: NextApiRequest, res: NextApiResponse) {
  const siteUrl = 'www.academeez.com';

  const feedOptions = {
    title: 'academeez | RSS Feed',
    description: 'Open Source Learning Platform for Coders',
    site_url: siteUrl,
    feed_url: `${siteUrl}/rss.xml`,
    image_url: `${siteUrl}/og.png`,
    pubDate: new Date("2023-10-01"),
    
  };

  const feed = new RSS(feedOptions);
  
  allDocs.filter(doc => doc.isReady).sort((a, b) => {
    if (a.getPublishDate < b.getPublishDate) return 1;
    if (a.getPublishDate > b.getPublishDate) return -1;
    return 0;
  }).forEach((doc) => {
    feed.item({
      title: doc.title,
      description: doc.description,
      url: `${siteUrl}/${doc.slug}`,
      date: doc.getPublishDate,
    })
  });

  res.writeHead(200, {
    'Content-Type': 'application/xml',
  });
  
  res.end(feed.xml());
}
