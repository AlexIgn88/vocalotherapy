import Head from 'next/head';
import {
    Box, Flex, Heading, Text, useBreakpointValue,
} from '@chakra-ui/react';
import { marginParameters, halfMarginParameters } from '../../displayParameters/marginParameters';
import { h1HeadersFontSize, h2HeadersFontSize } from '../../displayParameters/fontParameters';
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
        id = blogArticleObject?.id,
        heading = blogArticleObject?.heading,
        description = blogArticleObject?.description,
        mainImage = blogArticleObject?.mainImage,
        textArr = blogArticleObject?.text,
        imagesArr = blogArticleObject?.images;


    // console.log(blogArticleObject, text);

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
                        // mb={'30px'}
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
                                img={imagesArr[i] ?? '/img/blogArticleImg.jpeg'}
                            />

                            : <ArticleBlocks
                                key={i}
                                text={item}
                                img={imagesArr[i] ?? '/img/blogArticleImg.jpeg'}
                            />
                    )}
                </Flex>)}
        </>
    )
}


function ArticleBlocks({ orderValue, text, img }) {

    return (
        <Box
            // mb={halfMarginParameters}

            display={{ base: 'flex', sm: 'block', md: 'flex' }}
            gap={'3vw'}

            // h={'600px'}
            w={'100%'}
            textAlign={'justify'}
            // flexDirection={{ base: 'column', md: 'row' }}
            flexDirection={{ base: 'column', sm: 'row' }}
            // justifyContent={'space-between'}
            // alignItems={'center'}
            alignItems={{ base: 'center', md: 'flex-start' }}
            textIndent={'30px'}
        >
            <Box
                order={'1'}
                // h={'100%'}
                w={'50%'}
                // backgroundColor={'green'}
                borderRadius={'10px'}
                // flexShrink={'2'}

                // float={'left'}
                float={{ base: 'none', sm: 'left', md: 'none' }}
                mr={{ base: '0', sm: '3vw', md: '0' }}
            >
                <Image
                    src={img}
                    alt={'Изображение'}
                    height={150}
                    width={250}
                    priority={true}
                    style={{
                        borderRadius: '10px',
                        width: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                    }}
                />
            </Box>
            <Box
                order={orderValue ? '0' : '2'}
                h={'100%'}
                w={{ base: '100%', md: '50%' }}
                // backgroundColor={'red'}
                borderRadius={'10px'}
            // flexGrow={'1'}
            >
                <Text>
                    {text}
                </Text>
            </Box>
        </Box>)
}