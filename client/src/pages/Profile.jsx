import React from 'react';
import { Box, VStack, Image, Text, Link, Flex, Spacer, Icon } from '@chakra-ui/react';
import UserProfile from '../components/UserProfile';

function Profile() {
    return (
        <VStack spacing={4} align="stretch" marginTop={10} marginBottom={10}>
            <UserProfile />
        </VStack>
    );
    
}

export default Profile;  