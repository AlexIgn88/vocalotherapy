import pages from '../data/pagesData';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { UnorderedList, ListItem, Text } from '@chakra-ui/react';


export default function NavbarListComponent({ flexDirection }) {

    const
        router = useRouter();

    return (
        <UnorderedList
            className="navbar"
            listStyleType={'none'}
            mt={'10px'}
            mb={'10px'}
            display={'flex'}
            flexDirection={flexDirection}
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
                        color={'white'}
                        textDecoration={'none'}
                        fontSize={'20px'}
                    >
                        {page.name}
                    </Text>
                </ListItem>
            )}
        </UnorderedList>
    )
}