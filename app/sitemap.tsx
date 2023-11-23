/**
 * Dynamic sitemap page
 *
 * Created November 20th, 2023
 * @author ywarezk
 * @license MIT
 * @version 0.30.0
 */

import { allDocs } from '@/.contentlayer/generated'
import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
	return allDocs.filter(doc => doc.isReady).map((doc) => {
		return {
			url: `https://www.academeez.com/${doc.slug}`,
			changeFrequency: 'monthly',			
		}
	})  
}