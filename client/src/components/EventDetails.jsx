// EventDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db } from '../firebaseConfig'; // Adjust the import path as necessary

import { doc, getDoc, getDocs, collection } from 'firebase/firestore';
import {
  Image,
  Box,
  Stack,
  Flex,
  Grid,
  Text,
  Heading,
  Button,
  VStack,
} from '@chakra-ui/react';
import EventCard from '../components/EventCard';
import EventList from './EventList';

function EventDetails() {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [otherEvents, setOtherEvents] = useState([]);
  const navigate = useNavigate();

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

    const fetchOtherEvents = async () => {
      const otherEventList = [];
      const querySnapshot = await getDocs(collection(db, 'events'));
      querySnapshot.forEach((doc) => {
        if (doc.id !== eventId) {
          const eventData = doc.data();
          otherEventList.push({
            id: doc.id,
            name: eventData.name || 'No Name', // Default name if none provided
            date: eventData.date || 'No Date', // Default date if none provided
            coverImage:
              eventData.coverImage ||
              'https://source.unsplash.com/300x200/?kitten', // Default image if none provided
            location: eventData.location || 'No Location', // Default location if none provided
            participants: eventData.participants || [], // Default to an empty array if none provided
          });
        }
      });
      const filteredOtherEvents = otherEventList.slice(0, 3);
      setOtherEvents(filteredOtherEvents);
    };

    fetchEvent();
    fetchOtherEvents();
  }, [eventId]);

  if (!event) return <Box>Loading...</Box>;

  const eventDateTime = new Date(event.dateTime);

  const formattedDate = `${eventDateTime.getFullYear()}-${eventDateTime.toLocaleString(
    'default',
    { month: 'long' }
  )}-${eventDateTime.getDate()}`;
  let hours = eventDateTime.getHours();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  const minutes = eventDateTime.getMinutes();
  const formattedTime = `${hours}:${minutes
    .toString()
    .padStart(2, '0')}${ampm}`;

  return (
    <>
      <Stack>
        <Box paddingLeft={10} paddingTop={5} paddingBottom={5}>
          <Button onClick={() => navigate(-1)}>Go back</Button>
        </Box>
        <Flex paddingLeft={10} paddingRight={10} gap={10}>
          <Box flex='1'>
            <Image
              mb={8}
              src={event.coverImage}
              alt='Card Image'
              w='full'
              borderRadius='xl'
              maxHeight='500px'
              maxWidth='600px'
              objectFit='scale-down'
            />
            <Heading as='h2'>{event.name}</Heading>
          </Box>
          <Box flex='1'>
            <VStack align='start' mb={8}>
              <Heading as='h3' size='md'>
                Date
              </Heading>
              <Text color='#CC0633' as='b'>
                {formattedDate} {formattedTime}
              </Text>
            </VStack>

            <VStack align='start' mb={8}>
              <Heading as='h3' size='md'>
                Location
              </Heading>
              <Text color='#CC0633' as='b'>
                {event.location}
              </Text>
            </VStack>

            <VStack align='start' mb={8}>
              <Heading as='h3' size='md'>
                Pricing
              </Heading>
              <Text color='#CC0633' as='b'>
                ${((event.price / 100) * 100).toFixed(2)}
              </Text>
            </VStack>

            <VStack align='start' mb={8}>
              <Heading as='h3' size='md'>
                Participants
              </Heading>
              <Text color='#CC0633' as='b'>
                {event.participants}
              </Text>
            </VStack>
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
                <Text>{event.description}</Text>
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
            {otherEvents.map((event, eventId) => {
              return (
                <Box key={eventId} bg='white' borderRadius='lg'>
                  <EventCard
                    eventId={eventId}
                    eventName={event.name}
                    date={event.dateTime}
                    location={event.location}
                    participants={event.participants}
                    coverImage={event.coverImage}
                  />
                </Box>
              );
            })}
          </Grid>
        </Stack>
      </Stack>
    </>
  );
}

export default EventDetails;
