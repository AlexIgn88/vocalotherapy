import {
    Heading, Stack, Text, useBreakpointValue,
    Card, CardBody,
} from '@chakra-ui/react';
import Image from 'next/image';
import { textFontSize, h3HeadersFontSize } from '../displayParameters/fontParameters';



export default function BlogCardComponent({ heading, img, description }) {

    const isWide = useBreakpointValue({ base: false, md: true });

    return (
        <Card
            maxW='sm'
            height={'45vw'}
        >
            <CardBody
                p={'30px'}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
            >
                {isWide && <Image
                    src={img}
                    alt={heading}
                    height={150}
                    width={250}
                    priority={true}
                    style={{
                        borderRadius: '10px',
                        width: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                    }}
                />}
                <Stack
                    mt={{ base: '0', md: '6' }}
                    spacing='3'
                >
                    <Heading
                        fontSize={h3HeadersFontSize}
                        textAlign={'center'}
                    >{heading}</Heading>
                    <Text
                        fontSize={textFontSize}
                    >{description}</Text>
                </Stack>
            </CardBody>
        </Card>)
}
