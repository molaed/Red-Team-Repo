import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig'; // Adjust the path as necessary
import { Center, Box, Image, Text, VStack } from '@chakra-ui/react';


function UserProfile() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                // Fetch the user data from Firestore
                const userRef = doc(db, 'users', currentUser.uid);
                getDoc(userRef).then(docSnap => {
                    if (docSnap.exists()) {
                        setUser({ id: docSnap.id, ...docSnap.data() });
                    } else {
                        console.log('No such user found!');
                    }
                });
            } else {
                console.log('No user is signed in.');
                setUser(null);
            }
        });
    }, []);

    if (!user) {
        return (
            <Center height="100vh" width="100vw">
                <Text>Loading...</Text>
            </Center>
        );
    }

    return (
        <Center width="100vw">
            <VStack spacing={4} p={5}>
                <Image
                    src={user.photoURL || 'https://source.unsplash.com/300x200/?person'}
                    alt="User Photo"
                    boxSize="150px"
                    objectFit="cover"
                />
                <Box textAlign="center">
                    <Text fontSize="2xl" fontWeight="bold">{user.name}</Text>
                    <Text fontSize="lg">Role: {user.role}</Text>
                    <Text fontSize="lg">Email: {user.email}</Text>
                    <Text fontSize="lg">Major: {user.major}</Text>
                </Box>
            </VStack>
        </Center>
    );
}

export default UserProfile;

