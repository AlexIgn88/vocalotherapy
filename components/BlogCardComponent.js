import {
    Heading, Stack, Text,
    Card, CardBody,
} from '@chakra-ui/react';
import Image from 'next/image';



export default function BlogCardComponent({ heading, img, description }) {

    return <Card maxW='sm'>
        <CardBody
            p={'30px'}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
        >
            <Image
                src={img}
                alt={heading}
                height={200}
                width={300}
                priority={true}
                style={{
                    borderRadius: '10px',
                    width: '100%',
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
