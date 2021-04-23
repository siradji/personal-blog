import Head from 'next/head';
import { Typography } from 'modules/atoms/typography';
import { MastHead } from 'modules/sections/MasterHead';
import { Container } from 'modules/shared/';
import { HomepageArticles } from '@modules/sections/HomepageArticles';

export default function Home() {
  return (
    <>
      <Head>
        <title>Javascript development blog - Suraj Auwal </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container>
          <MastHead />
          <HomepageArticles />
        </Container>
      </main>
    </>
  );
}