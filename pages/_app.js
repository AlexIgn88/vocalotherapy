import Head from 'next/head';
import Layout from '../components/Layout.js';
import { ChakraProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import { globalStyles } from '../displayParameters/globalStyles';
// import { extendTheme } from '@chakra-ui/react';

// const styles = {
//   global: {
//     'html, body': {
//       height: '100%',
//       // backgroundColor: '#f8e183',
//       fontFamily: 'sans-serif',
//     },
//     '#__next': {
//       height: '100%',
//       display: 'flex',
//       flexDirection: 'column',
//     },
//     'main': {
//       flexGrow: '1',
//       marginTop: '70px',
//     },
//     '.active': {
//       'backgroundColor': '#feb849',
//       'borderRadius': '50px',
//     },
//   },
// }

// export const theme = extendTheme({ styles })


export default function App({ Component, pageProps: { ...pageProps } }) {

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
