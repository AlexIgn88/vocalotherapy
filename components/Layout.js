import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import { Box } from '@chakra-ui/react';
import { textFontSize } from '../displayParameters/fontParameters';

export default function Layout({ children }) {

    return <>
        <Header />
        <main>
            <Box
                fontSize={textFontSize}
            >
                {children}
            </Box>
        </main>
        <Footer />
    </>
};