import Head from "next/head";

export default function Seo({ title, content }) {
  return (
    <Head>
      <title>
        {title} | {content}
      </title>
    </Head>
  );
}
