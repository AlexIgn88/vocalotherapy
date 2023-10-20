import Head from 'next/head';
import { Box, Flex, Heading, Text, useBreakpointValue, } from '@chakra-ui/react';
import { marginParameters, halfMarginParameters } from '../../displayParameters/marginParameters';
import { h1HeadersFontSize } from '../../displayParameters/fontParameters';
import blogArticleData from '../../data/blogArticleData';
import { useRouter } from 'next/router';
import Image from 'next/image';


export default function BlogArticlePage() {
    const
        { query } = useRouter(),
        { id: articleId } = query;

    const isWide = useBreakpointValue({ base: false, md: true });

    const blogArticleObject = blogArticleData.find(item => item.id == articleId);


    let
        heading = blogArticleObject?.heading,
        textArr = blogArticleObject?.text,
        imagesArr = blogArticleObject?.images;


    return (
        <>
            <Head>
                <title>Блог</title>
            </Head>
            {blogArticleObject && (
                <Flex
                    className='blog-page'
                    m={marginParameters}
                    mt={halfMarginParameters}
                    flexDirection={'column'}
                    gap={'5vw'}
                >
                    <Heading
                        as={'h1'}
                        textAlign={'center'}
                        fontWeight={'normal'}
                        color={'brown'}
                        fontFamily={'cursive'}
                        fontSize={h1HeadersFontSize}
                    >
                        {heading}
                    </Heading>

                    {textArr.map((item, i) =>

                        i % 2 === 0
                            ? <ArticleBlocks
                                key={i}
                                orderValue={isWide}
                                text={item}
                                img={imagesArr[i] ?? '/img/microphone.jpg'}
                            />

                            : <ArticleBlocks
                                key={i}
                                text={item}
                                img={imagesArr[i] ?? '/img/microphone.jpg'}
                            />
                    )}
                </Flex>)}
        </>
    )
}


function ArticleBlocks({ orderValue, text, img }) {

    return (
        <Box
            w={'100%'}
            textAlign={'justify'}
            textIndent={'30px'}
            display={{ base: 'flex', sm: 'block', md: 'flex' }}
            flexDirection={{ base: 'column', sm: 'row' }}
            gap={{ base: '3vw', sm: '0', md: '0' }}
            alignItems={{ base: 'center', md: 'flex-start' }}
        >
            <Box
                order={'1'}
                w={{ base: '50%', md: '20%' }}
                borderRadius={'10px'}
                mb={{ base: '0', sm: '3vw', md: '0' }}
                float={{ base: 'none', sm: 'left', md: 'none' }}
                display={'flex'}
                justifyContent={{ base: 'center', sm: 'space-around', md: 'space-around' }}
            >
                <Image
                    src={img}
                    alt={'Изображение'}
                    height={150}
                    width={250}
                    priority={true}
                    style={{
                        borderRadius: '10px',
                        width: '60%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                    }}
                />
            </Box>
            <Box
                order={orderValue ? '0' : '2'}
                h={'100%'}
                w={{ base: '100%', md: '80%' }}
                borderRadius={'10px'}
            >
                <Text>
                    {text}
                </Text>
            </Box>
        </Box>)
}