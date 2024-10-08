import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from './Carousel';
import { getCollection } from 'astro:content';
import type {FC} from 'react';
import {useEffect, useState} from 'react';
import { LessonCard } from './LessonCard';


export const CourseCarousel: FC<{
  title: string;
  courseLink: string;
  locale: string;
}> = ({title, courseLink = title.toLowerCase(), locale}) => {
	const [articles, setArticles] = useState<Array<any>>([]);
	
  useEffect(() => {    
    getCollection('docs', content => {   
      let prefix = '';
      if (locale) {
        prefix = `${locale.substring(1)}/courses/${courseLink}`;
      } else {
        prefix = `courses/${courseLink}`;
      }
      return content.data.template === 'doc' && content.slug.startsWith(prefix) && content.data.preview;
    }).then(allCollections => {			
      setArticles(allCollections.sort((a: any, b: any) => {
				return a.data.sidebar.order - b.data.sidebar.order;
			}))			
		});
  }, []);

  return (
    <div className="not-content">
      <h4>
        <a href={`${locale}/courses/${courseLink}`}>{title}</a>
      </h4>
      <br />
      <Carousel>
        <CarouselContent>
					{
						articles.map((article: any) => (
							<CarouselItem className="basis-1/3" key={article.id}>
								<LessonCard
                  locale={locale}
									article={article}									
								/>																
							</CarouselItem>
						))
					}          
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
