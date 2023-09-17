import Head from 'next/head';
import Layout from '../components/Layout.js';
import { ChakraProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import { globalStyles } from '../displayParameters/globalStyles';
// import { extendTheme } from '@chakra-ui/react';


export default function App({ Component, pageProps }) {

  // const theme = extendTheme({ globalStyles });

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider>
        {/* <ChakraProvider theme={theme}> */}
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  )
}
