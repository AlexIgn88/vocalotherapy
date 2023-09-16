import { useRouter } from 'next/router';
import {
    Button, useBreakpointValue, useDisclosure,
    Drawer, DrawerBody, DrawerFooter, DrawerOverlay, DrawerContent, DrawerCloseButton,
} from '@chakra-ui/react';
import { FcMenu } from "react-icons/fc";
import { useRef } from 'react';
import NavbarListComponent from '../components/NavbarListComponent';


export default function Navbar() {

    const isWide = useBreakpointValue({ base: false, lg: true });

    function DrawerMenu() {
        const { isOpen, onOpen, onClose } = useDisclosure()
        const btnRef = useRef()

        return (
            <>
                <Button
                    ref={btnRef}
                    onClick={onOpen}
                    title=''
                    backgroundColor={'#feb849'}
                    color={'white'}
                    p={'10px 20px'}
                    border='none'
                    borderRadius='50px'
                    _hover={{
                        backgroundColor: 'white',
                        color: 'black',
                    }}
                    _active={{
                        backgroundColor: 'white',
                        color: '#feb849',
                    }}
                >
                    <FcMenu />
                </Button>

                <Drawer
                    isOpen={isOpen}
                    placement='top'
                    onClose={onClose}
                    finalFocusRef={btnRef}
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />

                        <DrawerBody
                            background={'#8d634b'}
                        >
                            <NavbarListComponent
                                flexDirection={'column'}
                            />
                        </DrawerBody>

                        <DrawerFooter
                            background={'#8d634b'}
                            justifyContent={'center'}
                        >
                            <Button
                                mr={3}
                                backgroundColor={'#feb849'}
                                color={'white'}
                                onClick={onClose}
                                _hover={{
                                    backgroundColor: 'white',
                                    color: 'black',
                                }}
                                _active={{
                                    backgroundColor: 'white',
                                    color: '#feb849',
                                }}
                            >
                                Закрыть
                            </Button>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </>
        )
    }


    return <>
        <nav>
            {!isWide && <DrawerMenu />}

            {isWide && <NavbarListComponent
                flexDirection={'row'}
            />}
        </nav>
    </>;
}