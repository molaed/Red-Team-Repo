import React from 'react';
import { Box, VStack, Image, Text, Link, Flex, Spacer, Icon } from '@chakra-ui/react';
import ClubCard from '../components/ClubsCard';

const clubsData = [
    {
      name: "Surge",
      description: "I just want to say...I just want to say...",
      email: "temared.surge@gmail.com",
      logo: "https://placekitten.com/300/200",
    },
  ];

export default function Clubs () {
  return (
    <VStack spacing={4} align="stretch" marginTop={10}>
        {clubsData.map((club, index) => (
            <ClubCard key={index} club={club} />
        ))}
    </VStack>
  );
};

