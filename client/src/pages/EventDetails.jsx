import { Image } from '@chakra-ui/react'

export default function EventDetails(props) {
    return (
        <>
            <Box boxSize='sm'>
                <Image src={props.image} alt='Image' />
            </Box>
        </>
    )
}