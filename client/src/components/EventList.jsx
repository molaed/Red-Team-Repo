import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig'; // Adjust the path as necessary
import { collection, getDocs } from 'firebase/firestore';
import EventCard from './EventCard'; 

function EventList() {
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
      setEvents(eventList);
    };

    fetchEvents();
  }, []);

  return (
    <div>
      {events.map((event) => (
        <EventCard
          key={event.id}
          eventId={event.id}
          eventName={event.name}
          date={event.date}
          location={event.location}
          participants={event.participants} 
        />
      ))}
    </div>
  );
}

export default EventList;
