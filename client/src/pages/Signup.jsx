import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig'; // Adjust the path as necessary

import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import {
  Box, Button, Input, InputGroup, InputRightElement, VStack, Text, useColorModeValue, Flex, Heading
} from '@chakra-ui/react';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [major, setMajor] = useState('');

// Include inputs for these in your form, similar to how you handle email and password

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const fullEmail = `${email}@sfu.ca`;
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, fullEmail, password);
        const user = userCredential.user;

        await sendEmailVerification(user);
        const userRef = doc(db, 'users', user.uid); // 'users' is the collection
        await setDoc(userRef, {
            name: name,
            major: major,
            role: 'student', // Fixed role
            email: fullEmail // Full email
        });

        // Redirect or handle next steps
        console.log('User created and details stored in Firestore');
        alert('Please check your SFU email to verify your account.');
        navigate('/login'); 
    } catch (error) {
        console.error('Error signing up:', error); // Display any errors encountered during sign up
    }
};

  return (
    <Flex align='center' justify='center' mt={20}>
      <Box bg={useColorModeValue('brand.100', 'brand.700')} p={8} w={['50%', '30%']} mx='auto'>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align='flex-start'>
            <Heading as='h1' size='xl' textAlign='center' mb={5}>
              Sign Up
            </Heading>
            <Heading size='md'>Name</Heading>
            <Input
              placeholder='Full Name'
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Heading size='md'>Major</Heading>
            <Input
              placeholder='Major'
              type='text'
              value={major}
              onChange={(e) => setMajor(e.target.value)}
            />
            <Heading size='md'>Email</Heading>
            <InputGroup>
                <Input
                    pr="4.5rem" // Padding to make room for the domain part
                    type="text"
                    placeholder="Enter your SFU username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <InputRightElement width="4.5rem">
                    <Box as="span" mr={2}>
                        @sfu.ca
                    </Box>
                </InputRightElement>
            </InputGroup>
            <Heading size='md'>Password</Heading>
            <Input
              placeholder='Password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <Text color='red.500'>{error}</Text>}
            <Button colorScheme='red' size='lg' width='full' type='submit' mt={4}>
              Sign Up
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
}

export default Signup;
