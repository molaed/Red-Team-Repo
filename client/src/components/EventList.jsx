import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig'; // Adjust the path as necessary
import { collection, getDocs } from 'firebase/firestore';
import EventCard from './EventCard'; 
import { Grid } from '@chakra-ui/react';

function EventList({ searchResults, numEventsToShow }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const eventList = [];
      const querySnapshot = await getDocs(collection(db, 'events'));
      querySnapshot.forEach((doc) => {
        const eventData = doc.data();
        eventList.push({
          id: doc.id,
          name: eventData.name || 'No Name', // Default name if none provided
          date: eventData.date || 'No Date', // Default date if none provided
          location: eventData.location || 'No Location', // Default location if none provided
          participants: eventData.participants || [] // Default to an empty array if none provided
        });
      });
      // Implement search filtering if necessary
      setEvents(eventList);
    };

    fetchEvents();
  }, [searchResults]);

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}> 
      {events.slice(0, numEventsToShow).map((event) => (
        <EventCard
          key={event.id}
          eventId={event.id}
          eventName={event.name}
          date={event.date}
          location={event.location}
          participants={event.participants} 
        />
      ))}
    </Grid>
  );
}

export default EventList;