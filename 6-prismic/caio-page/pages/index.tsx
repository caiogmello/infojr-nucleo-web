import { SliceZone } from '@prismicio/react'; 
import { createClient } from '../prismicio';
import { components } from '../slices/';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import Head from 'next/head';

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;


export default function Home({ page } : PageProps) {
  return (
    <div>
      <Head>
        <title>Caio's site</title>
        <meta name="description" content='CMS Website'/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <SliceZone slices={page.data.slices} components={components} />
      </main>
    </div>
  )
}


export async function getStaticProps({ previewData } : GetStaticPropsContext) {
  const client = createClient({ previewData });
  const page = await client.getByUID('page', "home");

  return {
    props: {
      page,
    },
  };
}