// EventDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebaseConfig'; // Adjust the import path as necessary

import { doc, getDoc } from 'firebase/firestore';
import {
  Image,
  Box,
  Stack,
  Flex,
  Grid,
  Text,
  Heading,
  Button,
} from '@chakra-ui/react';
import EventCard from '../components/EventCard';
import EventList from './EventList';

function EventDetails() {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      const docRef = doc(db, 'events', eventId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const eventData = docSnap.data();
        eventData.date = eventData.date
          ? new Date(eventData.date.seconds * 1000).toLocaleString()
          : 'No Date';
        setEvent(eventData);
      } else {
        console.log('No such document!');
      }
    };

    fetchEvent();
  }, [eventId]);

  if (!event) return <Box>Loading...</Box>;

  return (
    // <Box p='5'>
    //   <Heading as='h2'>{event.name}</Heading>
    //   <Text>Date: {event.date}</Text>
    //   <Text>Location: {event.location}</Text>
    //   <Text>Participants: {event.participants}</Text>
    //   {/* Add more details as needed */}
    // </Box>
    <>
      <Stack>
        <Box paddingLeft={10} paddingTop={5} paddingBottom={5}>
          <Button>Go back</Button>
        </Box>
        <Flex paddingLeft={10} paddingRight={10} gap={10}>
          <Box flex='1'>
            <Image
              src={event.coverImage}
              alt='Card Image'
              w='full'
              borderRadius='xl'
            />
            <Heading as='h2'>{event.name}</Heading>
          </Box>
          <Box flex='1'>
            <Text>Date: {event.dateTime}</Text>
            <Text>Location: {event.location}</Text>
            <Text>Participants: {event.participants}</Text>
          </Box>
        </Flex>

        <Stack
          paddingLeft={20}
          paddingRight={20}
          paddingTop={10}
          paddingBottom={10}
        >
          <Box>
            <Flex gap={10}>
              <Box flex='1'>
                <Heading size='md'>Description</Heading>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                </Text>
              </Box>

              <Box flex='1'>
                <Heading size='md'>Club Contact Info</Heading>
                <Text></Text>
              </Box>
            </Flex>
          </Box>
        </Stack>

        <Stack
          paddingLeft={20}
          paddingRight={20}
          paddingTop={10}
          paddingBottom={10}
          bg='gray.200'
        >
          <Heading size='md'>Other events you may like</Heading>
          <Grid
            templateColumns='repeat(3, 1fr)'
            gap={6}
            paddingTop={4}
            height='100%'
          >
            <Box bg='white' borderRadius='lg'>
              <EventCard
                eventId={eventId}
                eventName={event.name}
                date={event.dateTime}
                location={event.location}
                participants={event.participants}
              />
            </Box>
            <Box bg='white' borderRadius='lg'>
              <EventCard
                eventId={eventId}
                eventName={event.name}
                date={event.dateTime}
                location={event.location}
                participants={event.participants}
              />
            </Box>
            <Box bg='white' borderRadius='lg'>
              <EventCard
                eventId={eventId}
                eventName={event.name}
                date={event.dateTime}
                location={event.location}
                participants={event.participants}
              />
            </Box>
          </Grid>
        </Stack>
      </Stack>
    </>
  );
}

export default EventDetails;
