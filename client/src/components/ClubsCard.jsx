import React from 'react';
import { Flex, Box, Image, Text, Link } from '@chakra-ui/react';

export default function ClubCard ({ club }) {
    return (
        <Flex
          w="70%"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          align="center"
          justify="center"
          m="0 auto"
          boxShadow='lg'
            _hover={{
                bg: "gray.100", 
                transform: "scale(1.05)", 
                transition: "all 0.3s ease-in-out"
            }}
        >
          {/* Image */}
          <Image
            src={club.logo || 'https://placekitten.com/300/200'}
            alt="Logo"
            flex="0 0 30%" // Assigns 30% of the space to the image
            objectFit="cover"
          />
          {/* Text Content */}
          <Box flex="1" p={4} marginLeft={20}> {/* flex="1" takes the remaining space */}
            <Text fontSize="xl" fontWeight="bold">{club.name}</Text>
            <Text>{club.description}</Text>
            <Text>Email: <Link href={`mailto:${club.email}`} color="blue.500">{club.email}</Link></Text>
            {/* Social media links */}
            {/* ... */}
          </Box>
        </Flex>
      );
};

