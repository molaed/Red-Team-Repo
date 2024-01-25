import { Box, Image, Text } from '@chakra-ui/react'

export default function AdminEventCard(props) {
    return (
        <>
            <Box boxSize='sm'>
                <Image src={props.image} alt='Event Card' />
                <Text noOfLines={1}>
                    {props.title}
                </Text>
            </Box>
        </>
    )
}