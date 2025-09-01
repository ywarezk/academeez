import { getCollection } from 'astro:content';
import { getThumbnailBySlug, getLocaleFromDoc } from '~/components/utils';

export async function GET() {
	const allDocs = await getCollection('docs');
	const videos = allDocs.filter((doc) => doc.data.video);

	const baseUrl = 'https://www.academeez.com';

	let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">`;

	for (const video of videos) {
		const { data, slug } = video;
		const locale = getLocaleFromDoc(video);
		const thumbnail = getThumbnailBySlug(slug, locale);
		const thumbnailSrc = thumbnail?.src;
		const description = data.description?.trim() || '';
		const publishDate =
			data.video?.publishDate instanceof Date ? data.video.publishDate.toISOString() : '';

		xml += `
  <url>
    <loc>${baseUrl}/${slug}</loc>
    <video:video>
      <video:title><![CDATA[${data.title.trim()}]]></video:title>
      <video:family_friendly>yes</video:family_friendly>
      <video:player_loc allow_embed="yes">${baseUrl}/${slug}</video:player_loc>
      ${
				data.video?.duration !== undefined
					? `<video:duration>${data.video.duration}</video:duration>`
					: ''
			}`;

		if (publishDate) {
			xml += `
      <video:publication_date>${publishDate}</video:publication_date>`;
		}

		if (thumbnailSrc) {
			xml += `
      <video:thumbnail_loc>${baseUrl}${thumbnailSrc}</video:thumbnail_loc>
      `;
		}

		if (description) {
			xml += `
      <video:description><![CDATA[${description}]]></video:description>`;
		}

		const tags = data.video?.tags || [];
		for (const tag of tags) {
			if (typeof tag === 'string') {
				const trimmedTag = tag.trim();
				// Skip tags containing ']]>' to avoid breaking the XML structure
				if (trimmedTag && !trimmedTag.includes(']]>')) {
					xml += `
      <video:tag><![CDATA[${trimmedTag}]]></video:tag>`;
				}
			}
		}

		xml += `
    </video:video>
  </url>`;
	}

	xml += `
</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml',
		},
	});
}
