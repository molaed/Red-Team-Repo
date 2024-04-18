import {
    Button,
    ButtonGroup,
    Heading,
    Flex,
    Spacer,
    Stack,
    Box
} from '@chakra-ui/react'
import React,  {useState} from 'react';
import AdminCurrentEvents from './AdminCurrentEvents';
import AdminPastEvents from './AdminPastEvents';
import AdminEventCard from './AdminEventCard';

export default function Admin() {
    return (
        <Flex
            mt={20}
            marginLeft='15rem'
            marginTop='1rem'
            marginRight='15rem'
        >
            <Box
                p={8}
                w='100%'
                mx='auto'
            >
                <Button as="a" href="/admin/hostevent"colorScheme='red' size='lg' mb={10}>Host Event</Button>
                <Stack spacing={150}>
                    <Box>
                        <Heading as="h3" size="xl" mb={5}>Current Events</Heading>
                        <AdminCurrentEvents />
                    </Box>

                    <Box>
                        <Heading as="h3" size="xl" mb={5}>Past Events</Heading>
                        <AdminPastEvents />
                    </Box>
                </Stack>
            </Box>
        </Flex>
    )
}