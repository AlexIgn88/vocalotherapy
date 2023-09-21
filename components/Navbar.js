import {
    Button, useBreakpointValue, useDisclosure,
    Drawer, DrawerBody, DrawerFooter, DrawerOverlay, DrawerContent, DrawerCloseButton,
} from '@chakra-ui/react';
import { FcMenu } from "react-icons/fc";
import { useRef } from 'react';
import NavbarListComponent from '../components/NavbarListComponent';


export default function Navbar() {

    const isWide = useBreakpointValue({ base: false, md: true });

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
                    m={'10px'}
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
                        <DrawerCloseButton
                            position={'absolute'}
                            left={'10px'}
                        />
                        <DrawerBody
                            // background={'#8d634b'}
                            background={'#f8e183'}
                        >
                            <NavbarListComponent
                                flexDirection={'column'}
                            />
                        </DrawerBody>
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
