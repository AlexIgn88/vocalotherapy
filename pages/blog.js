import Head from 'next/head';
import {
    Box, Flex, Heading, Grid,
} from '@chakra-ui/react';
import { marginParameters, halfMarginParameters } from '../displayParameters/marginParameters';
// import { h1HeadersFontSize, h2HeadersFontSize } from '../displayParameters/fontParameters';
import BlogArticleComponent from '../components/BlogArticleComponent';


export default function BlogPage() {
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
                >
                    Блог
                </Heading>

                <Grid
                    templateColumns={{
                        base: "repeat(1, 1fr)",
                        '2xl': "repeat(3, 1fr)",
                        xl: "repeat(3, 1fr)",
                        lg: "repeat(3, 1fr)",
                        md: "repeat(3, 1fr)",
                        sm: "repeat(2, 1fr)"
                    }}

                    justifyItems={'center'}
                    gap={'5vw'}
                >

                    <BlogArticleComponent />
                    <BlogArticleComponent />
                    <BlogArticleComponent />
                    <BlogArticleComponent />
                    <BlogArticleComponent />
                    <BlogArticleComponent />

                </Grid>
            </Box>
        </>
    )
}
