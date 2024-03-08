import React from 'react';
import { Box, VStack, Image, Text, Link, Flex, Spacer, Icon } from '@chakra-ui/react';
import ClubsList from '../components/ClubsList';


export default function Clubs () {
  return (
    <VStack spacing={4} align="stretch" marginTop={10} marginBottom={10}>
        <ClubsList />
    </VStack>
  );
};

