import Head from 'next/head';
import Image from 'next/image';
import background from '../public/img/imgAbout.jpg';
import {
    Box, Heading, useBreakpointValue,
    List, ListItem, ListIcon,
} from '@chakra-ui/react';
import { marginParameters, halfMarginParameters } from '../displayParameters/marginParameters';
import { h1HeadersFontSize } from '../displayParameters/fontParameters';
import { PiMusicNotesFill } from 'react-icons/pi';


export default function AboutPage() {

    const isWide = useBreakpointValue({ base: false, md: true });

    return (
        <>
            <Head>
                <title>Обо мне</title>
            </Head>
            <Box
                className='about-page'
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
                    Обо мне
                </Heading>
                <Box>
                    <Box
                        w={{ base: '100%', md: '50%' }}
                        h={{ base: '100%', md: '50%' }}
                        mt={'0px'}
                        mb={'30px'}
                        ml={{ base: '0', md: '30px' }}
                        mr={{ base: '30px', md: '0' }}
                        style={{ float: isWide ? 'right' : 'none', }}
                    >
                        <Image
                            src={background}
                            alt='Vocalotherapy'
                            placeholder="blur"
                            height={200}
                            width={300}
                            priority={true}
                            style={{
                                borderRadius: '10px',
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: 'center',
                            }}
                        />
                    </Box>

                    <List className='about-list'>
                        <ListItem>
                            <ListIcon as={PiMusicNotesFill} color='brown' />
                            Член Федерации педагогов вокального искусства РФ,
                            обладатель судейской категории III степени
                        </ListItem>
                        <ListItem>
                            <ListIcon as={PiMusicNotesFill} color='brown' />
                            Педагог дополнительного образования в сфере эстрадного вокала со стажем 7 лет.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={PiMusicNotesFill} color='brown' />
                            В 2015 году с отличием окончила факультет искусств и художественного образования
                            Воронежского государственного педагогического университета. Профиль &quot;Музыка&quot;
                        </ListItem>
                        <ListItem>
                            <ListIcon as={PiMusicNotesFill} color='brown' />
                            В 2019 года прошла курсы повышения квалификации в ГБУ ВО &quot;Областной центр
                            развития дополнительного образования, гражданского и патриотического воспитания детей и молодёжи&quot;
                            по программе &quot;Вокальное искусство&quot;.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={PiMusicNotesFill} color='brown' />
                            Лауреат районных, городских, Всероссийских и Международных конкурсов (эстрадный вокал).
                        </ListItem>
                        <ListItem>
                            <ListIcon as={PiMusicNotesFill} color='brown' />
                            Участница II Международной научно-практической конференции &quot;Современное художественное образование:
                            теория и практика&quot; (г. Воронеж).
                        </ListItem>
                        <ListItem>
                            <ListIcon as={PiMusicNotesFill} color='brown' />
                            Ученики - лауреаты и дипломанты районных, городских, региональных, Всероссийских, Международных
                            вокальных конкурсов, а также участники городских мероприятий.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={PiMusicNotesFill} color='brown' />
                            Мастерство и успехи в образовательной и творческой деятельности были отмечены благодарственными
                            письмами Воронежской Городской Думы.
                        </ListItem>
                    </List>
                </Box>
            </Box>
        </>
    )
}
