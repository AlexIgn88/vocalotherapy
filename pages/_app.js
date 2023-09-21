import Head from 'next/head';
import Layout from '../components/Layout.js';
import { ChakraProvider } from '@chakra-ui/react';
// import { Global } from '@emotion/react';
import { extendTheme } from '@chakra-ui/react';
import { globalStyles } from '../displayParameters/globalStyles';


const styles = {
  global: globalStyles,
}


export default function App({ Component, pageProps }) {

  const theme = extendTheme({ styles });

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <ChakraProvider> */}
      <ChakraProvider theme={theme}>
        {/* <Global styles={globalStyles} /> */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  )
}
