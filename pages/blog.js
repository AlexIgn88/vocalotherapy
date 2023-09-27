import Head from 'next/head';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { marginParameters, halfMarginParameters } from '../displayParameters/marginParameters';
// import { h1HeadersFontSize, h2HeadersFontSize } from '../displayParameters/fontParameters';


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
                <Box>
                    Блог
                </Box>
            </Box>
        </>
    )
}
