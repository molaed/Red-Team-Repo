import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useAuth } from '../provider/AuthContext';
import { Link } from 'react-router-dom';

import {
  Box,
  Heading,
  Input,
  Button,
  Select,
  VStack,
  useColorModeValue,
  Flex,
  Center,
  AbsoluteCenter,
} from '@chakra-ui/react';


function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {currentUser, userRole, setSecureUserRole, loading, logout} = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!loading && currentUser && userRole) {
      const redirectPath = userRole === 'admin' ? '/admin' : '/';
      navigate(redirectPath);
    }
  }, [currentUser, userRole, loading, navigate]);
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log('Login successful', userCredential.user);

        if (!userCredential.user.emailVerified) {
          await logout(); // Make sure this function properly signs out the user
          throw new Error('Please verify your email before logging in.');
      }

        const idToken = await userCredential.user.getIdToken();
        const response = await fetch('http://localhost:8080/api/verifyToken', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ idToken }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        if (data.success) {
            setSecureUserRole(data.user.role); // Update role in context
            const redirectPath = data.user.role === 'admin' ? '/admin' : '/';
            navigate(redirectPath);
        } else {
            console.error(data.message);
        }
    } catch (error) {
        console.error('Login request failed:', error);
    }
};

console.log('currentUser:', currentUser);

  return (
    <Flex align='center' justify='center' mt={20}>
      <Box
        bg={useColorModeValue('brand.100', 'brand.700')}
        p={8}
        w={['50%', '30%']}
        mx='auto'
      >
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align='flex-start'>
            <Heading as='h1' size='xl' textAlign='center' mb={5}>
              Log In To SFU Events
            </Heading>
            <Heading as='h2' size='md'>
              Email
            </Heading>
            <Input
              placeholder='Email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Heading as='h2' size='md'>
              Password
            </Heading>
            <Input
              placeholder='Password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Heading as='h3' size='sm' mt={4}>
              Don't have an account? <Link to="/signup" style={{ color: 'blue' }}>Sign Up Here</Link>
            </Heading>

            <Button colorScheme='red' size='lg' width='full' type='submit' mt={4}>
              Log In
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
}

export default LoginPage;
