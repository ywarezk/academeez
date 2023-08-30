import {allDocs} from 'contentlayer/generated';
import {notFound} from 'next/navigation';
import {Mdx} from '@/ui/Mdx';

interface PageProps {
  params: {
    slug: string[];
  };
}

async function getDocFromParams({params}: PageProps) {
  const slug = params.slug?.join('/') || '';
  const doc = allDocs.find(doc => doc.slugAsParams === slug);

  if (!doc) {
    null;
  }

  return doc;
}

export default async function Home({params}: PageProps) {
  const doc = await getDocFromParams({params});

  if (!doc) {
    notFound();
  }

  return (
    <div className="pb-12 pt-8">
      <Mdx code={doc.body.code} />
    </div>
  );
}
