// import '@/styles/globals.css';
import Head from 'next/head';
import Layout from '../components/Layout.js';


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
