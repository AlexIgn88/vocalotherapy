import Head from 'next/head';
// import Image from 'next/image';
import { Box } from '@chakra-ui/react';


export default function HomePage() {
  return (
    <>
      <Head>
        <title>Главная</title>
      </Head>
      <Box className='home-page'>
        Главная
      </Box>
    </>
  )
}
