import Head from 'next/head';
import { MastHead } from 'modules/sections/MasterHead';
import { Container } from 'modules/shared/';
import { HomepageArticles } from 'modules/sections/HomepageArticles';

export default function Home() {
  return (
    <>
      <Head>
        <title>Javascrip - Suraj Auwal </title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main>
        <Container>
          <MastHead />
          <HomepageArticles sectionHeading="Let's build: " />
          <HomepageArticles sectionHeading="How to: " />
          <HomepageArticles sectionHeading="What is: " />
        </Container>
      </main>
    </>
  );
}
