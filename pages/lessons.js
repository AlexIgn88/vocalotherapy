import Head from 'next/head';
import Image from 'next/image';
import background from '../public/img/contact.jpg';
import { Box, Flex, Heading, useBreakpointValue, Text } from '@chakra-ui/react';
import { marginParameters, halfMarginParameters } from '../displayParameters/marginParameters';
// import { flexDirection } from '../displayParameters/flexParameters';
// import { h1HeadersFontSize, h2HeadersFontSize } from '../displayParameters/fontParameters';


export default function LessonsPage() {

    const isWide = useBreakpointValue({ base: false, lg: true });

    return (
        <>
            <Head>
                <title>Уроки вокала</title>
            </Head>
            <Box
                className='lessons-page'
                m={marginParameters}
                mt={halfMarginParameters}
            >
                <Heading
                    as={'h1'}
                    mb={'30px'}
                    textAlign={'center'}
                    fontWeight={'normal'}
                    color={'brown'}
                    fontFamily={'cursive'}
                >
                    Уроки вокала
                </Heading>
                <Box
                // flexDirection={{ base: 'column', md: 'row' }}
                // gap={{ base: '30px', lg: '50px' }}
                >
                    <Box
                        // w={{ base: '100%', lg: '50%' }}

                        w={{ base: '100%', lg: '50%' }}
                        h={{ base: '100%', lg: '50%' }}
                        // m={'30px'}
                        m={{ base: '0', lg: '30px' }}
                        mt={{ base: '0', lg: '0' }}
                        mb={'30px'}
                        style={{
                            float: isWide ? 'left' : 'none',
                            display: isWide ? 'block' : 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Image

                        //временный бэкграунд. Найти картинку
                            src={background}

                            alt='Vocalotherapy'
                            placeholder="blur"
                            height={200}
                            width={300}
                            priority={true}
                            style={{
                                borderRadius: '20px',
                                // width: '100%',
                                width: isWide ? '100%' : '50%',
                                objectFit: 'cover',
                                objectPosition: 'center',
                            }}
                        />
                    </Box>
                    <Box
                    // w={{ base: '100%', lg: '50%' }}
                    >
                        <Text
                            textAlign={'justify'}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat maecenas volutpat blandit aliquam etiam. Ut porttitor leo a diam sollicitudin tempor id eu nisl. Mollis nunc sed id semper risus in. Ullamcorper sit amet risus nullam eget felis eget nunc. Rhoncus mattis rhoncus urna neque viverra justo nec. Dui faucibus in ornare quam viverra orci sagittis. Amet commodo nulla facilisi nullam vehicula ipsum a arcu. Risus nec feugiat in fermentum posuere urna nec. Lorem sed risus ultricies tristique nulla aliquet enim. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros in.
                        </Text>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
