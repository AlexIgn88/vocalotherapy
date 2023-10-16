import Head from 'next/head';
import Image from 'next/image';
import background from '../public/img/lessons.jpeg';
import {
    Box, Heading, useBreakpointValue, Text,
    List, ListItem, ListIcon
} from '@chakra-ui/react';
import { PiMusicNotesFill } from 'react-icons/pi';
import { marginParameters, halfMarginParameters } from '../displayParameters/marginParameters';
import { h1HeadersFontSize, h2HeadersFontSize } from '../displayParameters/fontParameters';


export default function LessonsPage() {

    const isWide = useBreakpointValue({ base: false, lg: true });

    return (
        <>
            <Head>
                <title>Уроки вокала</title>
            </Head>
            <Box
                className='lessons-page'
                m={marginParameters}
                mt={halfMarginParameters}
            >
                <Heading
                    as={'h1'}
                    mb={'30px'}
                    textAlign={'center'}
                    fontWeight={'normal'}
                    color={'brown'}
                    fontFamily={'cursive'}
                    fontSize={h1HeadersFontSize}
                >
                    Уроки вокала
                </Heading>
                <Box textAlign={'justify'}>
                    <Text
                        textIndent={'30px'}
                        mb={halfMarginParameters}
                    >
                        Вы мечтаете научиться петь, развить свой голос и улучшить свои вокальные способности?
                        Тогда вы по адресу!
                    </Text>

                    <Text>
                        На занятиях вокалом вы сможете раскрыть свой потенциал и освоить вокальное мастерство под руководством опытного педагога.
                        Я предлагаю уникальную методику обучения, которая сочетает в себе
                        традиционные и современные подходы к обучению вокалу.
                    </Text>
                    <Box
                        w={{ base: '100%', lg: '30%' }}
                        h={{ base: '100%', lg: '30%' }}
                        m={{ base: '0', lg: '30px' }}
                        ml={{ base: '0', lg: '0' }}
                        mt={'30px'}
                        mb={'30px'}
                        style={{
                            float: isWide ? 'left' : 'none',
                            display: isWide ? 'block' : 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Image
                            src={background}
                            alt='Vocalotherapy'
                            placeholder="blur"
                            height={200}
                            width={300}
                            priority={true}
                            style={{
                                borderRadius: '20px',
                                width: isWide ? '100%' : '50%',
                                objectFit: 'cover',
                                objectPosition: 'center',
                            }}
                        />
                    </Box>
                    <Box>
                        <Heading
                            as={'h2'}
                            mt={'25px'}
                            mb={'30px'}
                            textAlign={'center'}
                            fontWeight={'normal'}
                            color={'brown'}
                            fontFamily={'cursive'}
                            fontSize={h2HeadersFontSize}
                        >
                            Преимущества занятий вокалом со мной
                        </Heading>
                        <List>
                            <ListItem>
                                <ListIcon as={PiMusicNotesFill} color='brown' />
                                Индивидуальный подход: я учитываю ваши музыкальные предпочтения,
                                чтобы помочь вам достичь вашей цели.
                            </ListItem>
                            <ListItem>
                                <ListIcon as={PiMusicNotesFill} color='brown' />
                                Разнообразие методик: благодаря сочетанию различных техник, вы получите
                                более глубокое понимание основ вокала и сможете подобрать наиболее подходящую для вас методику.
                            </ListItem>
                            <ListItem>
                                <ListIcon as={PiMusicNotesFill} color='brown' />
                                Развитие музыкального слуха: вы научитесь различать различные тона, аккорды и мелодии,
                                что поможет вам лучше понимать и воспроизводить музыку.
                            </ListItem>
                            <ListItem>
                                <ListIcon as={PiMusicNotesFill} color='brown' />
                                Улучшение дыхания и голоса: вы освоите техники правильного дыхания и научитесь контролировать
                                свой голос, что позволит вам петь долго и без усталости.
                            </ListItem>
                            <ListItem>
                                <ListIcon as={PiMusicNotesFill} color='brown' />
                                Снятие голосовых зажимов: на моем курсе вы избавитесь от голосовых блоков и зажимов,
                                которые мешают вам свободно и уверенно петь.
                            </ListItem>
                        </List>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
