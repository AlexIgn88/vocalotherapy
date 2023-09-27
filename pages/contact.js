import Head from 'next/head';
import Image from 'next/image';
import background from '../public/img/contact.jpg';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { marginParametersInArray, halfMarginParameters } from '../displayParameters/marginParameters';
import { SocialIcon } from 'react-social-icons';
import { h1HeadersFontSize, h2HeadersFontSize } from '../displayParameters/fontParameters';


export default function ContactPage() {

    const newMarginParametersInArray = marginParametersInArray
        .map(item => parseInt(item).toString() * 2 + 'px');

    return (
        <>
            <Head>
                <title>Контакты</title>
            </Head>
            <Box
                className='contact-page'
                mt={halfMarginParameters}
                mb={marginParametersInArray}
                ml={newMarginParametersInArray}
                mr={newMarginParametersInArray}
            >
                <Heading
                    as={'h1'}
                    mb={'30px'}
                    textAlign={'center'}
                    fontWeight={'normal'}
                    color={'brown'}
                    fontFamily={'cursive'}
                >
                    Контакты
                </Heading>
                <Flex
                    flexDirection={{ base: 'column-reverse', lg: 'row' }}
                    gap={{ base: '30px', lg: '50px' }}
                    h={'100%'}
                    alignItems={'center'}
                    justifyContent={'center'}
                >
                    <Flex
                        flexDirection={'column'}
                        gap={'50px'}
                        alignItems={{ base: 'center', lg: 'normal' }}
                    >
                        <Box
                            color={'brown'}
                            fontWeight={'bold'}
                            fontSize={h1HeadersFontSize}
                            textAlign={{ base: 'center', lg: 'left' }}
                        >
                            Запишитесь на занятия по вокалу уже сегодня!
                        </Box>
                        <Flex
                            flexDirection={'column'}
                            gap={'50px'}
                        >
                            <Box
                                textDecoration={'underline'}
                                fontSize={h2HeadersFontSize}
                                color={'brown'}
                            >
                                <a href={'mailto:' + 'bobeshko131192@mail.ru'}>bobeshko131192@mail.ru</a>
                            </Box>
                            <Flex gap={'20px'} justifyContent={{ base: 'center', lg: 'normal' }}>
                                <SocialIcon url="https://instagram.com/vocalotherapy?igshid=MmU2YjMzNjRlOQ==" />
                                <SocialIcon url="https://telegram.me/loveliverose" />
                            </Flex>
                        </Flex>
                    </Flex>
                    <Image
                        src={background}
                        alt='Vocalotherapy'
                        placeholder="blur"
                        height={200}
                        width={300}
                        priority={true}
                        style={{
                            borderRadius: '20px',
                            width: '400px',
                            objectFit: 'cover',
                            objectPosition: 'center',
                        }}
                    />
                </Flex>
            </Box>
        </>
    )
}
