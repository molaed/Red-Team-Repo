import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import EventCard from './EventCard'; 
import { Grid } from '@chakra-ui/react';

function EventList() {
  const [events, setEvents] = useState([]);

  // Fetch all events once when the component mounts
  useEffect(() => {
    const fetchEvents = async () => {
      const eventList = [];
      const querySnapshot = await getDocs(collection(db, 'events'));
      querySnapshot.forEach((doc) => {
        const eventData = doc.data();
        eventList.push({
          id: doc.id,
          name: eventData.name || 'No Name',
          date: eventData.date || 'No Date',
          coverImage: eventData.coverImage || 'https://source.unsplash.com/300x200/?kitten',
          location: eventData.location || 'No Location',
          participants: eventData.participants || []
        });
      });

      setEvents(eventList);
    };

    fetchEvents();
  }, []); 

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}> 
      {events.map((event) => (
        <EventCard
          key={event.id}
          eventId={event.id}
          eventName={event.name}
          coverImage={event.coverImage}
          date={event.date}
          location={event.location}
          participants={event.participants}
        />
      ))}
    </Grid>
  );
}

export default EventList;
