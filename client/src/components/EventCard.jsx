import React from 'react';
import { Box, Image, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const EventCard = ({ eventId, eventName, date, location, participants, coverImage }) => {
  const formattedDate = date ? new Date(date.seconds * 1000).toLocaleDateString("en-US") : 'No Date';
  return (
    <Link to={`/EventDetails/${eventId}`}>
      <Box
        maxW='100%'
        borderWidth='1px'
        borderRadius='lg'
        overflow='hidden'
        boxShadow='lg'
        _hover={{
          bg: "gray.100", 
          transform: "scale(1.05)", 
          transition: "all 0.3s ease-in-out"
        }}
        h="400px" // Fixed height for the event card
      >
        <Box
          h='60%' // Set the height of the image within the box
          position='relative' // Position relative for absolute positioning of Image
        >
          <Image
            src={coverImage}
            alt='Card Image'
            objectFit="contain" // Fit the entire image within the box
            w='100%'
            h='100%' // Take up the entire height of the box
            position='absolute' // Position absolutely within its container
            top='0'
            left='0'
          />
        </Box>

        <Box p='4' h='40%' d='flex' flexDirection='column' justifyContent='space-between'>
          <Heading as='h2' size='md' mb='2'>
            {eventName}
          </Heading>
          <Text fontSize='sm' color='gray.600'>
            Date: {formattedDate}
          </Text>
          <Text fontSize='sm' color='gray.600'>
            Location: {location}
          </Text>
          <Text fontSize='sm' color='gray.600'>
            Participants: {participants || 'Not available'}
          </Text>
        </Box>
      </Box>
    </Link>
  );
};

export default EventCard;
