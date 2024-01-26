import { Box, Image, Text, HStack, Heading,
    Card, CardHeader, CardBody, CardFooter , VStack} from '@chakra-ui/react'

export default function AdminEventCard(props) {
    return (
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            height='200px'
        >
            <CardBody>
                <Box boxSize='sm'>
                    <HStack spacing='25%'>
                        <Image 
                            objectFit='cover'
                            src={props.image}
                            alt='Event Card'
                            borderRadius='lg'
                        />
                        <VStack
                            spacing={1}
                            align='stretch'
                            whiteSpace='nowrap'
                        >
                            <Heading size='lg'>{props.title}</Heading>
                            <Text as='b' color="slateblue">{props.date}, {props.time}</Text>
                            <Text as='b' color="slateblue">{props.cost}</Text>
                            <Text as='b' color="grey">{props.location}</Text>
                            <Text as='b' color="grey">Total registration: {props.registered}/{props.totalRegistered}</Text>
                        </VStack>
                    </HStack>
                </Box>
            </CardBody>
        </Card>
    )
}

AdminEventCard.defaultProps = {
    image: 'https://www.sfu.ca/content/sfu/siat/news-events/news/2021/03/stormhacks-2021/jcr:content/main_content/image.img.2000.high.png/1615320430514.png',
    title: 'StormHacks 2023',
    date: 'Saturday, March 18',
    time: '19:00',
    cost: 'FREE',
    location: 'TASC 1 9204',
    registered: '0',
    totalRegistered: '100'
};