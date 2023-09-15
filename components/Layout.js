import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
// import { textFontSize } from '../displayParameters/fontParameters';

export default function Layout({ children }) {

    return <>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </>
};