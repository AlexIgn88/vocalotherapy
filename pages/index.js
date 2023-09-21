import Head from 'next/head';
import { Global } from '@emotion/react';
import Image from 'next/image';
import background from '../public/img/vocalotherapy.jpg';
import { Box } from '@chakra-ui/react';
import { marginParameters, halfMarginParameters } from '../displayParameters/marginParameters';
// import { flexDirection } from '../displayParameters/flexParameters';


export default function HomePage() {
  return (
    <>
      <Head>
        <title>Vocalotherapy</title>
      </Head>
      <Global styles={{ 'body': { backgroundColor: '#f8e183', } }} />
      <Box
        className='home-page'
        m={marginParameters}
        mt={halfMarginParameters}
        // mt={marginParameters}
        mb={halfMarginParameters}
      >
        <Image
          src={background}
          alt='Vocalotherapy'
          placeholder="blur"
          // style={{
          //   objectFit: 'cover',
          //   objectPosition: 'left',
          // }}
          // fill={true}

        height={200}
        width={300}
        priority={true}
        style={{
          borderRadius: '50%',
          // height: '400px',
          width: '500px',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
        />
      </Box>
    </>
  )
}
