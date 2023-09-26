import Head from 'next/head';
import Image from 'next/image';
import background from '../public/img/contact.jpg';
import { Box, Flex } from '@chakra-ui/react';
import { marginParameters, halfMarginParameters } from '../displayParameters/marginParameters';
import { SocialIcon } from 'react-social-icons';


export default function ContactPage() {
    return (
        <>
            <Head>
                <title>Контакты</title>
            </Head>
            <Flex
                className='contact-page'
                flexDirection={{ base: 'column-reverse', lg: 'row' }}
                gap={{ base: '30px', lg: '50px' }}
                h={'100%'}
                m={marginParameters}
                mt={marginParameters}
                mb={halfMarginParameters}
                alignItems={'center'}
                justifyContent={'center'}
                position={'relative'}
                bottom={'100px'}
            >
                <Flex
                    flexDirection={'column'}
                gap={'50px'}
                alignItems={{ base: 'center', lg: 'normal' }}
                >
                    <Box
                        color={'brown'}
                        fontWeight={'bold'}
                        fontSize={'4vmin'}
                        textAlign={{ base: 'center', lg: 'left' }}
                    >
                        Запишитесь на занятия по вокалу уже сегодня!
                    </Box>
                    <Flex
                        flexDirection={'column'}
                        gap={'50px'}
                    >
                        <Box textDecoration={'underline'}>
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
        </>
    )
}
