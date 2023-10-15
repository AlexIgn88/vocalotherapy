import {
    Box, Flex, Heading, Stack, Divider, Text,
    Card, CardHeader, CardBody, CardFooter,
} from '@chakra-ui/react';
import Image from 'next/image';



export default function BlogCardComponent({ heading, img, description }) {

    return <Card maxW='sm'>
        <CardBody
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
        >
            <Image
                src={img}
                alt={heading}
                // placeholder="blur"
                height={200}
                width={300}
                priority={true}
                style={{
                    borderRadius: '10px',
                    width: '300px',
                    objectFit: 'cover',
                    objectPosition: 'center',
                }}
            />
            <Stack
                mt='6'
                spacing='3'
            >
                <Heading size='md' textAlign={'center'}>{heading}</Heading>
                <Text>{description}</Text>
            </Stack>
        </CardBody>
    </Card>
}