import Navbar from '../components/Navbar.js';


export default function Header() {

    return <>
        <header
            style={{
                backgroundColor: '#f5e7b3',
                opacity: '100%',
                position: 'fixed',
                top: '0px',
                width: '100%',
                zIndex: '3',
            }}
        >
            <Navbar />
        </header>
    </>
}