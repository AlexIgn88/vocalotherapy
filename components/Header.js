import Navbar from '../components/Navbar.js';


export default function Header() {

    return <>
        <header
            style={{
                background: 'rgb(141, 99, 75)',
                opacity: '100%',
                position: 'fixed',
                top: '0px',
                width: '100%',
            }}
        >
            <Navbar />
        </header>
    </>
}