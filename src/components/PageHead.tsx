import Head from 'next/head';

type PageHeadProps = {
  title?: string;
  description?: string;
};

export default function PageHead({
  title = 'Next Tailwind Template',
  description = 'Generated by create next app',
}: PageHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content={description}
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <link
        rel="icon"
        href="/favicon.ico"
      />
    </Head>
  );
}
