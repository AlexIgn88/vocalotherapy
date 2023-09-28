import Head from "next/head";
import { Box, Heading } from "@chakra-ui/react";
import { marginParameters, halfMarginParameters } from '../displayParameters/marginParameters';
import { h1HeadersFontSize } from '../displayParameters/fontParameters';

export default function ErrorPage() {
    return <>
        <Head>
            <title>Страница не найдена</title>
        </Head>
        <Box
            className="error-page"
            m={marginParameters}
            mt={halfMarginParameters}
            mb={halfMarginParameters}
        >
            <Heading
                as={'h1'}
                textAlign={'center'}
                color={'brown'}
                fontFamily={'cursive'}
                fontSize={h1HeadersFontSize}
            >
                Страница не найдена
            </Heading>
        </Box>
    </>
}