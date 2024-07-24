import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db } from '../firebaseConfig'; // Adjust the import path as necessary

import { doc, getDoc, getDocs, collection } from 'firebase/firestore';
import {
  Image,
  Box,
  Stack,
  HStack,
  Flex,
  Grid,
  Text,
  Heading,
  Button,
  VStack,
} from '@chakra-ui/react';
import EventCard from '../components/EventCard';
import { RiArrowGoBackLine, RiDiscordFill, RiFacebookFill, RiInstagramFill, RiLinkedinFill, RiTwitterFill } from "react-icons/ri";

const mockEvent = {
  contactEmail: 'contact@example.com',
  contactPhone: '123-456-7890',
  contactWebsite: 'https://example.com',
  socialMedia: {
    discord: 'https://discord.com/yourprofile',
    facebook: 'https://facebook.com/yourprofile',
    twitter: 'https://twitter.com/yourprofile',
    instagram: 'https://instagram.com/yourprofile',
    linkedin: 'https://linkedin.com/in/yourprofile',
  },
};

function EventDetails() {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [otherEvents, setOtherEvents] = useState([]);
  const [isRegistered, setIsRegistered] = useState(false);
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

    const handleRegisterClick = () => {
      setIsRegistered(true); 
    };

  return (
    <>
      <Stack>
        <Box paddingLeft={10} paddingTop={5} paddingBottom={5}>
          <Button bg="none"
          leftIcon={<RiArrowGoBackLine />}
          _hover={{ bg: 'none', textDecoration: 'underline' }}
          color="#CC0633"
          fontSize='14px'
          onClick={() => navigate(-1)}>Go Back</Button>
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

            <VStack align='center' mb={8} spacing={4}>
              <Text color='black' as='b' fontSize='xl'>
                Registration Deadline: {formattedDate}
              </Text>
              <Button 
                bg={isRegistered ? 'black' : '#CC0633'}
                color="white"
                width='100%' 
                size='lg' 
                borderRadius='md'
                onClick={handleRegisterClick}
                _hover={{
                  bg: isRegistered ? 'black' : '#a5052b', 
                  transform: 'scale(1.05)', 
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
                  transition: 'all 0.3s ease' 
                }}
                _active={{
                  bg: '#900d1d', 
                  transform: 'scale(0.98)', 
                }}
                _disabled={{ bg: 'green', color: 'white', cursor: 'not-allowed' }}
                isDisabled={isRegistered}
              >
                {isRegistered ? 'Completed' : 'Register Now'}
              </Button>
              {isRegistered && (
                <Text color='green' mt={2}>
                  Thank you for registering, please go to your cart to see the event!
                </Text>
              )}
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
                <VStack align='start' spacing={4}>
                  <Text>Email: <a href={`mailto:${mockEvent.contactEmail}`}>{mockEvent.contactEmail}</a></Text>
                  {mockEvent.contactPhone && (
                    <Text>Phone: <a href={`tel:${mockEvent.contactPhone}`}>{mockEvent.contactPhone}</a></Text>
                  )}
                  {mockEvent.contactWebsite && (
                    <Text>Website: <a href={mockEvent.contactWebsite} target='_blank' rel='noopener noreferrer'>{mockEvent.contactWebsite}</a></Text>
                  )}
                  {mockEvent.socialMedia && (
                    <HStack spacing={7}>
                      {mockEvent.socialMedia.facebook && (
                        <a href={mockEvent.socialMedia.facebook} target='_blank' rel='noopener noreferrer'>
                          <RiFacebookFill size={27} color='#CC0633'/>
                        </a>
                      )}
                      {mockEvent.socialMedia.twitter && (
                        <a href={mockEvent.socialMedia.twitter} target='_blank' rel='noopener noreferrer'>
                          <RiTwitterFill size={27} color='#CC0633'/>
                        </a>
                      )}
                      {mockEvent.socialMedia.discord && (
                        <a href={mockEvent.socialMedia.discord} target='_blank' rel='noopener noreferrer'>
                          <RiDiscordFill size={27} color='#CC0633'/>
                        </a>
                      )}
                      {mockEvent.socialMedia.instagram && (
                        <a href={mockEvent.socialMedia.instagram} target='_blank' rel='noopener noreferrer'>
                          <RiInstagramFill size={27} color='#CC0633'/>
                        </a>
                      )}
                      {mockEvent.socialMedia.linkedin && (
                        <a href={mockEvent.socialMedia.linkedin} target='_blank' rel='noopener noreferrer'>
                          <RiLinkedinFill size={27} color='#CC0633' />
                        </a>
                      )}
                    </HStack>
                  )}
                </VStack>
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
                    eventId={event.id}
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
