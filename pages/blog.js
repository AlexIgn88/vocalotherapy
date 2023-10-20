import Head from 'next/head';
import { Box, Heading, Grid, Link } from '@chakra-ui/react';
import { marginParameters, halfMarginParameters } from '../displayParameters/marginParameters';
import { h1HeadersFontSize } from '../displayParameters/fontParameters';
import BlogCardComponent from '../components/BlogCardComponent';
import blogArticleData from '../data/blogArticleData';
import NextLink from 'next/link';


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
                // h={'100vh'}
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
                    {blogArticleData.map((item, i) =>
                        <Link
                            as={NextLink}
                            key={blogArticleData[i].id}
                            href={`/blog/${item.id}`}
                        >
                            <BlogCardComponent
                                heading={blogArticleData[i].heading}
                                img={blogArticleData[i].mainImage}
                                description={blogArticleData[i].description}
                            />
                        </Link>
                    )}
                </Grid>
            </Box>
        </>
    )
}
