import Head from 'next/head';
import { Box, Flex, Button } from '@chakra-ui/react';
import { marginParameters, halfMarginParameters } from '../displayParameters/marginParameters';
// import { flexDirection } from '../displayParameters/flexParameters';
// import { h1HeadersFontSize } from '../displayParameters/fontParameters';
import { SocialIcon } from 'react-social-icons';


export default function ContactPage() {
    return (
        <>
            <Head>
                <title>Контакты</title>
            </Head>
            <Flex
                className='contact-page'
                h={'100%'}
                m={marginParameters}
                mt={halfMarginParameters}
                mb={halfMarginParameters}
                alignItems={'center'}
                justifyContent={'center'}
            >
                <Flex
                    flexDirection={'column'}
                    gap={'50px'}
                    position={'relative'}
                    bottom={'100px'}
                >
                    <Box
                        color={'brown'}
                        fontWeight={'bold'}
                        fontSize={'4vmin'}
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
                        <Box>
                            {/* <Button>инстаграмм</Button> */}
                            {/* <Button colorScheme='whatsapp'>Vocalotherapy</Button> */}
                            <SocialIcon url="https://instagram.com/vocalotherapy?igshid=MmU2YjMzNjRlOQ==" />
                            <SocialIcon url="https://t.me/loveliverose" />
                            <SocialIcon url="https://web.telegram.org/a/" />
                            <Button colorScheme='telegram'>Telegram</Button>
                        </Box>
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}
