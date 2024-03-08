import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig'; // Adjust the path as necessary
import { collection, getDocs } from 'firebase/firestore';
import ClubsCard from './ClubsCard'; // Adjust the import path as necessary
import { VStack } from '@chakra-ui/react';

function ClubsList() {
    const [clubs, setClubs] = useState([]);

    useEffect(() => {
        const fetchClubs = async () => {
            const querySnapshot = await getDocs(collection(db, 'clubs'));
            const clubsData = querySnapshot.docs.map(doc => {
                // Extract data and map fields to your component's props
                const data = doc.data();
                console.log('Club data', data);
                return {
                    id: doc.id, // Use document ID as a key for React list
                    name: data.Name || 'No Name', // Default value if not present
                    email: data.Email || 'No Email', // Default value if not present
                    site: data.Site || 'No Site', // Default value if not present
                    description: data['Club Mandate'] || 'No Description', // Assuming 'mandate' maps to 'description'
                    logo: data.Image, // Default value if not present
                };
            });
            setClubs(clubsData);
        };

        fetchClubs();
    }, []);
    return (
        <VStack spacing={4} align="stretch" marginTop={10}>
            {clubs.map((club, index) => (
                <ClubsCard key={club.id} club={club} />
            ))}
        </VStack>
    );
}

export default ClubsList;
