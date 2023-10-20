import Head from 'next/head';
import Image from 'next/image';
import background from '../public/img/vocalotherapy.jpg';
import { Box, Flex } from '@chakra-ui/react';
import { marginParameters, halfMarginParameters } from '../displayParameters/marginParameters';


export default function HomePage() {
  return (
    <>
      <Head>
        <title>Vocalotherapy</title>
      </Head>
      <Box
        className='home-page'
        m={marginParameters}
        color={'brown'}
        // h={'100vh'}
        h={{ base: 'auto', lg: '100vh' }}
      >
        <Flex
          flexDirection={{ base: 'column', lg: 'row' }}
          alignItems={'center'}
          gap={marginParameters}
        >
          <Image
            src={background}
            alt='Vocalotherapy'
            placeholder="blur"
            height={'400px'}
            width={'400px'}
            priority={true}
            style={{
              borderRadius: '50%',
              width: '400px',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
          <Flex
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'flex-start'}
            mb={halfMarginParameters}
            fontSize={'5vmin'}
            gap={'5px'}
          >
            <Box fontWeight={'bold'}>Привет!</Box>
            <Box fontWeight={'bold'}>Я - Виктория Бобешко</Box>
            <Box
              background={'brown'}
              color={'white'}
              pl={'20px'}
              pr={'20px'}
              borderRadius={'5px'}
              mb={'20px'}
            >
              педагог по вокалу
            </Box>
            <Box fontSize={'4vmin'} mb={'20px'}>
              Педагог по эстрадному вокалу со стажем 7 лет.
              Лауреат районных, городских, Всероссийских и Международных конкурсов по эстрадному вокалу.
            </Box>
            <Box>
              Воплотите свои музыкальные мечты в реальность!
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}
