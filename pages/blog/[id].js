import Head from 'next/head';
import {
    Box, Flex, Heading, Grid, Text,
} from '@chakra-ui/react';
import { marginParameters, halfMarginParameters } from '../../displayParameters/marginParameters';
import { h1HeadersFontSize, h2HeadersFontSize } from '../../displayParameters/fontParameters';
import blogArticleData from '../../data/blogArticleData';
import { useRouter } from 'next/router';


export default function BlogArticlePage() {
    const
        { query } = useRouter(),
        { id: articleId } = query;

    let text = blogArticleData.find(item => item.id == articleId)?.text;

    return (
        <>
            <Head>
                <title>Блог</title>
            </Head>
            <Box
                className='blog-page'
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
                    Заголовок
                </Heading>
                {text && <Text>{text}</Text>}
            </Box>
        </>
    )
}