export default function Footer() {
    return (
        <footer
            style={{
                background: 'brown',
                color: 'white',
                opacity: '100%',
                padding: '20px',
                textAlign: 'center',
                zIndex: '3',
            }}
        >
            ©{new Date().getFullYear()} Vocalotherapy | All Rights Reserved
        </footer>
    );
};
