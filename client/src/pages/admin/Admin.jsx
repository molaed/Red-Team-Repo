import {
    Button,
    ButtonGroup,
    Heading,
    Flex,
    Spacer,
    Box
} from '@chakra-ui/react'
import React,  {useState} from 'react';
import AdminCurrentEvents from './AdminCurrentEvents';
import AdminPastEvents from './AdminPastEvents';

export default function Admin() {
    return (
        <Flex
            mt={20}
            marginLeft='3rem'
            marginTop='1rem'
        >
            <Box
                p={8}
                w='100%'
                mx='auto'
            >
                <Button colorScheme='red' size='lg' mb={10}>Host Event</Button>

                <Heading as="h3" size="xl" mb={5}>
                    Current Events
                </Heading>
                <AdminCurrentEvents />

                <Heading as="h3" size="xl" mb={5}>
                    Past Events
                </Heading>
                <AdminPastEvents />
            </Box>
        </Flex>
    )
}