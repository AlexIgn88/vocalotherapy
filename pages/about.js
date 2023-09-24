import Head from 'next/head';
import Image from 'next/image';
import background from '../public/img/imgAbout.jpg';
import {
    Box, Flex,
    List, ListItem, ListIcon, OrderedList, UnorderedList,
} from '@chakra-ui/react';
import { marginParameters, halfMarginParameters } from '../displayParameters/marginParameters';
// import { flexDirection } from '../displayParameters/flexParameters';
// import { h1HeadersFontSize } from '../displayParameters/fontParameters';


export default function AboutPage() {
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
                <Flex
                    gap={'50px'}
                    flexDirection={{ base: 'column-reverse', lg: 'row' }}
                    alignItems={{ base: 'center', lg: 'flex-start' }}
                >
                    <UnorderedList
                        // w={'50%'}
                        w={{ base: '100%', lg: '50%' }}
                    >
                        <ListItem>Член Федерации педагогов вокального искусства РФ,
                            обладатель судейской категории III степени
                        </ListItem>
                        <ListItem>Педагог дополнительного образования в сфере эстрадного вокала со стажем 7 лет.
                        </ListItem>
                        <ListItem>В 2015 году с отличием окончила факультет искусств и художественного образования
                            Воронежского государственного педагогического университета. Профиль "Музыка"
                        </ListItem>
                        <ListItem>В 2019 года прошла курсы повышения квалификации в ГБУ ВО "Областной центр
                            развития дополнительного образования, гражданского и патриотического воспитания детей и молодёжи"
                            по программе "Вокальное искусство".
                        </ListItem>
                        <ListItem>Лауреат районных, городских, Всероссийских и Международных конкурсов (эстрадный вокал).
                        </ListItem>
                        <ListItem>Участница II Международной научно-практической конференции "Современное художественное образование:
                            теория и практика" (г. Воронеж).
                        </ListItem>
                        <ListItem>Ученики - лауреаты и дипломанты районных, городских, региональных, Всероссийских, Международных
                            вокальных конкурсов, а также участники городских мероприятий.
                        </ListItem>
                        <ListItem>Мастерство и успехи в образовательной и творческой деятельности были отмечены благодарственными
                            письмами Воронежской Городской Думы.
                        </ListItem>
                    </UnorderedList>
                    {/* <Box
                        // p={'50px'}
                        w={'50%'}
                    > */}
                    <Image
                        src={background}
                        alt='Vocalotherapy'
                        placeholder="blur"
                        height={200}
                        width={300}
                        priority={true}
                        style={{
                            // padding: '50px',
                            borderRadius: '5px',
                            // width: '400px',
                            width: '50%',
                            height: '50%',
                            objectFit: 'cover',
                            objectPosition: 'center',
                        }}
                    />
                    {/* </Box> */}
                </Flex>
            </Box>
        </>
    )
}
