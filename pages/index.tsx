import Head from 'next/head';
import { Link } from 'components/atoms/Link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Javascript development blog - Suraj Auwal </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-main-red">Hello world</h1>
        <Link to="/home" variant="primary">
          Click me
        </Link>
      </main>
    </>
  );
}
