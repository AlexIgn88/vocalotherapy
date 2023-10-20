import { Flex, Text, ListItem, UnorderedList, } from '@chakra-ui/react';
import pages from '../data/pagesData';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SocialIcon } from 'react-social-icons';


export default function Footer() {

    const
        router = useRouter();

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
            <Flex
                flexDirection={'column'}
                alignItems={'center'}
                gap={'20px'}
            >
                <UnorderedList
                    className="navbar"
                    listStyleType={'none'}
                    mt={'10px'}
                    mb={'10px'}
                    display={'flex'}
                    flexDirection={{ base: 'column', sm: 'row', }}
                    justifyContent={'space-evenly'}
                    alignItems={'center'}
                    flexWrap={'wrap'}
                >
                    {pages.map((page) =>
                        <ListItem
                            key={page.name}
                            className={router.pathname.split('/')[1] === page.src.split('/')[1]
                                ? 'active'
                                : ''}
                            p={'5px'}
                        >
                            <Text
                                as={Link}
                                m={{ base: '5px', lg: '10px', xl: '30px' }}
                                href={page.src}
                                className="link"
                                _hover={{ color: 'black' }}
                                transition="color 0.8s ease"
                                textDecoration={'none'}
                            >
                                {page.name}
                            </Text>
                        </ListItem>
                    )}
                </UnorderedList>
                <UnorderedList
                    className="social-icon"
                    listStyleType={'none'}
                    display={'flex'}
                    flexDirection={{ base: 'column', sm: 'row', }}
                    gap={'20px'}
                    justifyContent={{ base: 'center', lg: 'normal' }}
                    flexWrap={'wrap'}
                >
                    <ListItem
                        className="social-icon__item"
                    >
                        <SocialIcon url="https://instagram.com/vocalotherapy?igshid=MmU2YjMzNjRlOQ==" />
                    </ListItem>
                    <ListItem
                        className="social-icon__item"
                    >
                        <SocialIcon url="https://telegram.me/loveliverose" />
                    </ListItem>
                </UnorderedList>
                <Text>©{new Date().getFullYear()} Vocalotherapy | All Rights Reserved</Text>
            </Flex>
        </footer>
    );
};
