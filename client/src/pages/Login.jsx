import React from 'react';
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

export default function LoginPage() {
  return (
    <Flex
      align="center"
      justify="center"
      mt={20}
    >
        <Box bg={useColorModeValue('brand.100', 'brand.700')}
        p={8}
        w={['50%', '30%']} // Responsive width
        mx="auto">
        <VStack spacing={4} align="flex-start">
            <Heading as="h1" size="xl" textAlign="center" mb={5}>
                Log In To SFU Events
            </Heading>

            <Heading as="h2" size="md" >
                Email
            </Heading>
            <Input placeholder="Email" type="email" />
            <Heading as="h2" size="md" >
                Password
            </Heading>
            <Input placeholder="Password" type="password" />

            <Heading as="h2" size="md" mt={10}>
                Authorization
            </Heading>
            <Select placeholder="Log in As">
            <option value="admin">Admin</option>
            <option value="student">Student</option>
            </Select>

            <Button colorScheme='red' size="lg" width="full">
                Log In
            </Button>
        </VStack>
        </Box>
    </Flex>
  );
}

