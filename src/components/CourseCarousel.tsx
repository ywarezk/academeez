import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from './Carousel';
import { getCollection } from 'astro:content';
import type {FC} from 'react';
import {useEffect, useState} from 'react';
import { LessonCard } from './LessonCard';

export const CourseCarousel: FC<{
  title: string;
  courseLink?: string;
}> = ({title, courseLink = title.toLowerCase()}) => {
	const [articles, setArticles] = useState<Array<any>>([]);
	
  useEffect(() => {
    getCollection('docs', content => {
      return content.data.template === 'doc' && content.slug.indexOf(courseLink) > -1;
    }).then(allCollections => {
			console.log(allCollections);
      setArticles(allCollections.sort((a: any, b: any) => {
				return a.data.order - b.data.order;
			}))			
		});
  }, []);

  return (
    <div className="not-content">
      <h4>
        <a href={`/courses/${courseLink}`}>{title}</a>
      </h4>
      <br />
      <Carousel>
        <CarouselContent>
					{
						articles.map((article: any) => (
							<CarouselItem className="basis-1/3" key={article.id}>
								<LessonCard
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