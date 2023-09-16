export const globalStyles = {
    'html, body': {
        height: '100%',
        // backgroundColor: '#f8e183',
        fontFamily: 'sans-serif',
    },
    '#__next': {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    'main': {
        flexGrow: '1',
        marginTop: '70px',
    },
    '.main-header': {
        background: 'rgb(141, 99, 75)',
        opacity: '100%',
        position: 'fixed',
        top: '0px',
        width: '100%',
    },
    '.main-header nav': {
        flexGrow: '1',
    },
    '.navbar': {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginBottom: '0px',
        paddingLeft: '10px',
        listStyleType: 'none',
    },
    '.navbar li': {
        padding: '5px',
    },
    '.link': {
        // color: 'white',
        textDecoration: 'none',
        fontSize: '20px',
    },
    '.active': {
        'backgroundColor': '#feb849',
        'borderRadius': '50px',
    },
    // '.main-footer': {
    //     background: 'black',
    //     color: 'white',
    //     opacity: '100%',
    //     padding: '20px',
    //     textAlign: 'center',
    //     'z-index': '3',
    // },
    // '.main-footer ul': {
    //     listStyleType: 'none',
    // },
    // '.footer-useful-Links': {
    //     color: 'white',
    // },
    // '.footer-useful-Links:hover': {
    //     color: 'yellow',
    // },
    // '.share-button': {
    //     display: 'flex',
    //     alignItems: 'center',
    //     gap: '10px',
    // },
};