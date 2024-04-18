import React, { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
  VStack
} from '@chakra-ui/react';
import { db } from '../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

function HostEvent() {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    dateTime: '', // Combined date and time
    price: '',
    coverImage: '',
    description: '',
    participants: ''
  });
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'date' || name === 'time') {
      // Combine date and time into dateTime
      const date = name === 'date' ? value : formData.dateTime.split('T')[0];
      const time = name === 'time' ? value : formData.dateTime.split('T')[1] || '00:00';
      setFormData({ ...formData, dateTime: `${date}T${time}` });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, 'events'), {
        ...formData,
        dateTime: new Date(formData.dateTime).toISOString() // Convert dateTime to ISO string
      });
      toast({
        title: "Event Created",
        description: "Your event has been successfully created.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setFormData({
        name: '',
        location: '',
        dateTime: '',
        price: '',
        coverImage: '',
        description: '',
        participants: ''
      }); // Reset form after submission
    } catch (error) {
      toast({
        title: "Error Creating Event",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Event Name</FormLabel>
            <Input name="name" value={formData.name} onChange={handleChange} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Location</FormLabel>
            <Input name="location" value={formData.location} onChange={handleChange} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Date and Time</FormLabel>
            <Input type="datetime-local" name="dateTime" value={formData.dateTime} onChange={handleChange} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Price</FormLabel>
            <Input type="text" name="price" value={formData.price} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Cover Image URL</FormLabel>
            <Input name="coverImage" value={formData.coverImage} onChange={handleChange} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Event Description</FormLabel>
            <Textarea name="description" value={formData.description} onChange={handleChange} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Number of Participants</FormLabel>
            <Textarea type='number'name="participants" value={formData.participants} onChange={handleChange} />
          </FormControl>
          <Button type="submit" colorScheme="blue">Create Event</Button>
        </VStack>
      </form>
    </Box>
  );
}

export default HostEvent;
