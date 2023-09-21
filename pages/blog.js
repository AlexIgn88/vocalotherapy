import Head from 'next/head';
import { Box } from '@chakra-ui/react';


export default function BlogPage() {
    return (
        <>
            <Head>
                <title>Блог</title>
            </Head>
            <Box className='blog-page'>
                Блог
            </Box>
        </>
    )
}
