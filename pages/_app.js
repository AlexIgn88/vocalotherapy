import Head from 'next/head';
import Layout from '../components/Layout.js';
import { ChakraProvider } from '@chakra-ui/react';
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
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  )
}
