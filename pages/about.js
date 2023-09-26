import Head from 'next/head';
import Image from 'next/image';
import background from '../public/img/imgAbout.jpg';
import {
    Box, Flex, Text, Heading, useBreakpointValue,
    List, ListItem, ListIcon, OrderedList, UnorderedList,
} from '@chakra-ui/react';
import { marginParameters, halfMarginParameters } from '../displayParameters/marginParameters';
// import { flexDirection } from '../displayParameters/flexParameters';
// import { h1HeadersFontSize } from '../displayParameters/fontParameters';


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
                mb={halfMarginParameters}
            >
                <Heading
                    as={'h1'}
                    mb={'30px'}
                    textAlign={'center'}
                    fontWeight={'normal'}
                    color={'brown'}
                    fontFamily={'cursive'}
                >
                    Обо мне
                </Heading>
                <Box
                // gap={'50px'}
                // flexDirection={{ base: 'column-reverse', lg: 'row' }}
                // alignItems={{ base: 'center', lg: 'flex-start' }}
                >
                    <Box
                        w={{ base: '100%', md: '50%' }}
                        h={{ base: '100%', md: '50%' }}
                        m={'30px'}
                        mt={'0px'}
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
                                borderRadius: '5px',
                                width: '90%',
                                height: '90%',
                                objectFit: 'cover',
                                objectPosition: 'center',
                            }}
                        />
                    </Box>

                    <UnorderedList className='about-list'>
                        <ListItem>Член Федерации педагогов вокального искусства РФ,
                            обладатель судейской категории III степени
                        </ListItem>
                        <ListItem>Педагог дополнительного образования в сфере эстрадного вокала со стажем 7 лет.
                        </ListItem>
                        <ListItem>В 2015 году с отличием окончила факультет искусств и художественного образования
                            Воронежского государственного педагогического университета. Профиль &quot;Музыка&quot;
                        </ListItem>
                        <ListItem>В 2019 года прошла курсы повышения квалификации в ГБУ ВО &quot;Областной центр
                            развития дополнительного образования, гражданского и патриотического воспитания детей и молодёжи&quot;
                            по программе &quot;Вокальное искусство&quot;.
                        </ListItem>
                        <ListItem>Лауреат районных, городских, Всероссийских и Международных конкурсов (эстрадный вокал).
                        </ListItem>
                        <ListItem>Участница II Международной научно-практической конференции &quot;Современное художественное образование:
                            теория и практика&quot; (г. Воронеж).
                        </ListItem>
                        <ListItem>Ученики - лауреаты и дипломанты районных, городских, региональных, Всероссийских, Международных
                            вокальных конкурсов, а также участники городских мероприятий.
                        </ListItem>
                        <ListItem>Мастерство и успехи в образовательной и творческой деятельности были отмечены благодарственными
                            письмами Воронежской Городской Думы.
                        </ListItem>
                    </UnorderedList>



                </Box>
            </Box>
        </>
    )
}
