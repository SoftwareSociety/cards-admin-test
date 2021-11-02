import Layout from '../components/layout/Layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Breadcrumbs from '../components/breadcrumbs';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default function Home() {
  return (
    <Layout title='Издадени карти'>
      <Breadcrumbs />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo cum ut deserunt repellendus consequuntur quisquam
        culpa saepe eligendi, minima porro sunt consequatur nulla exercitationem non corporis reiciendis aliquid vel
        consectetur!
      </p>
    </Layout>
  );
}
