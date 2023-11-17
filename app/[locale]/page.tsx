/**
 * HomePage
 *
 * Created April 4th, 2023
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import {AzLineIcon} from '@/ui'
import {cn} from '@/lib'
import {useTranslations} from 'next-intl'
import {generateMetadata as genericGenerateData} from '@/lib'
import {unstable_setRequestLocale} from 'next-intl/server'

type HomePageProps = {
  params: {
    locale: string
  }
}

// list of urls of featured articles
// const featuredCards = [
//   "course/angular/best-practices/inject-repeating-initializations",
//   ""
// ]

export async function generateMetadata({params}: HomePageProps) {
  const messages = (await import(`@/messages/${params.locale}.json`)).default

  const description = messages['HomePage']['description']
  const title = `academeez | ${description}`

  // TODO: add image
  const image = ''
  return genericGenerateData(title, description, image)
}

export default function HomePage(props: HomePageProps) {
  const t = useTranslations('HomePage')

  unstable_setRequestLocale(props.params.locale)
  
  

  return (
    <div className="container mx-auto mt-20 text-center">
      <div className={cn('flex justify-center items-center')}>
        <AzLineIcon className="w-7 h-10 relative top-1 left-1" />
        <h1 className={cn('font-bold text-5xl leading-snug')}>academeez</h1>
      </div>

      <p className="text-3xl text-green/90 font-mono self-center py-1 leading-snug mt-5">{t('description')}</p>

      <div className="grid gap-8 grid-cols-4 mt-9">
        {/* <article>
          {allDocs
            .filter(doc => doc.isFeatured)
            .map(doc => (
              <LessonCard key={doc.slug} lesson={doc} />
            ))}
        </article> */}
      </div>
    </div>
  )
}
