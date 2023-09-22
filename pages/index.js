import Head from 'next/head';
import { Global } from '@emotion/react';
import Image from 'next/image';
import background from '../public/img/vocalotherapy.jpg';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { marginParameters, halfMarginParameters } from '../displayParameters/marginParameters';
// import { h1HeadersFontSize } from '../displayParameters/fontParameters';
// import { flexDirection } from '../displayParameters/flexParameters';


export default function HomePage() {
  return (
    <>
      <Head>
        <title>Vocalotherapy</title>
      </Head>
      {/* <Global styles={{ 'body': { backgroundColor: '#f8e183', } }} /> */}
      {/* <Global styles={{ 'body': { backgroundColor: 'rgb(29,13,0)', } }} /> */}
      {/* <Global styles={{ 'body': { backgroundColor: 'rgb(50,45,42)', } }} /> */}
      {/* <Global styles={{ 'body': { backgroundImage: 'url("../img/note.jpg")', } }} /> */}
      <Box
        className='home-page'
        m={marginParameters}
        mt={halfMarginParameters}
        mb={halfMarginParameters}
        // color={'white'}
        color={'brown'}
        fontFamily={'cursive'}
      >
        <Flex
          flexDirection={'column'}
          // fontSize={h1HeadersFontSize}
          justifyContent={'center'}
          alignItems={'center'}
          mb={halfMarginParameters}
          fontSize={'5vmin'}
        >
          <Box>Педагог по вокалу</Box>
          <Box>Виктория Андреевна Бобешко</Box>
        </Flex>
        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          alignItems={'center'}
          gap={marginParameters}
        >
          <Image
            src={background}
            alt='Vocalotherapy'
            placeholder="blur"
            height={200}
            width={300}
            priority={true}
            style={{
              borderRadius: '50%',
              width: '400px',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
          <Box>about Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ante metus dictum at tempor commodo ullamcorper a.
            Aliquet lectus proin nibh nisl condimentum id. Diam maecenas ultricies mi eget mauris.
          </Box>
        </Flex>
      </Box>
    </>
  )
}
