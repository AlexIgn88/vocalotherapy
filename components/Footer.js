


export default function Footer() {
    return (
        <footer
            style={{
                background: 'black',
                color: 'white',
                opacity: '100%',
                padding: '20px',
                textAlign: 'center',
                zIndex: '3',
            }}
        >
            {/* <hr /> */}
            Copyright ©{new Date().getFullYear()} Все права защищены
        </footer>
    );
};
