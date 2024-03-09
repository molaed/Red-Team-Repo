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
          <Image
            src={club.logo || 'https://placekitten.com/300/200'}
            alt="Club Logo"
            width="150px" // Fixed width
            height="150px" // Fixed height
            objectFit="cover"
            flexShrink={0} // Prevent the image from shrinking
          />

          <Box flex="1" p={4} marginLeft={20}> 
            <Text fontSize="xl" fontWeight="bold">{club.name}</Text>
            <Text>{club.description}</Text>
            <Text>Email: <Link href={`mailto:${club.email}`} color="blue.500">{club.email}</Link></Text>

          </Box>
        </Flex>
      );
};

