// EventDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from './firebaseConfig'; // Adjust the import path as necessary
import { doc, getDoc } from 'firebase/firestore';
import { Box, Heading, Text } from '@chakra-ui/react';

function EventDetails() {
    const { eventId } = useParams();
    const [event, setEvent] = useState(null);

    useEffect(() => {
        const fetchEvent = async () => {
            const docRef = doc(db, 'events', eventId);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const eventData = docSnap.data();
                eventData.date = eventData.date ? new Date(eventData.date.seconds * 1000).toLocaleString() : 'No Date';
                setEvent(eventData);
            } else {
                console.log('No such document!');
            }
        };

        fetchEvent();
    }, [eventId]);

    if (!event) return <Box>Loading...</Box>;

    return (
        <Box p='5'>
            <Heading as='h2'>{event.name}</Heading>
            <Text>Date: {event.date}</Text>
            <Text>Location: {event.location}</Text>
            <Text>Participants: {event.participants}</Text>
            {/* Add more details as needed */}
        </Box>
    );
}

export default EventDetails;
