import { Box, Image, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
export default function EventCard({ eventId, eventName, date, location, participants }) {
  return (
    <Link to={`/EventDetails`}>
    <Box
      maxW='100%'
      maxH='100%'
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'
      boxShadow='lg'
    >
      <Image src='https://placekitten.com/300/200' alt='Card Image' w='full' />

      <Box p='4'>
        <Heading as='h2' size='md' mb='2'>
          {eventName}
        </Heading>
        <Text fontSize='sm' color='gray.600'>
          Date: {date}
        </Text>
        <Text fontSize='sm' color='gray.600'>
          Location: {location}
        </Text>
        <Text fontSize='sm' color='gray.600'>
          {participants}
        </Text>
      </Box>
    </Box>
    </Link>
  );
}
