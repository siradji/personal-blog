import Head from 'next/head';
import { Link } from 'components/atoms/Link';
import { Typography } from 'components/atoms/typography';

export default function Home() {
  return (
    <>
      <Head>
        <title>Javascript development blog - Suraj Auwal </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Typography color="white" variant="h1">
          Heading
        </Typography>
      </main>
    </>
  );
}
