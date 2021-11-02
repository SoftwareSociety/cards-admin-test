import Head from "next/head";
import Layout from "../components/layout/Layout";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from "react-i18next";

export async function getStaticProps({ locale }) {

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta charSet='UTF-8' />
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <Layout title='Начален екран'>

        Lorem Ipsum is simply dummy text of the printing and typesetting industry.

      </Layout>
    </>
  );
}
