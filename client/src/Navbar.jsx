import React from 'react';
import { Box, Flex, Button, Text, Link, Menu, MenuButton, MenuList, MenuItem, MenuDivider } from '@chakra-ui/react';
import { useAuth } from './provider/AuthContext';

export default function Navbar() {
  const { currentUser, logout } = useAuth();
  return (
    <Flex
        as="nav"
        className="nav"
        width="100%"
        height="20%"
        bg="#CC0633"
        color="white"
        justifyContent="space-between"
        alignItems="center"
        padding="0 2rem"
        position="sticky"
        top="0"
        zIndex="999"
    >
        <Text as="a" href="/" className="title" fontSize="3.125rem" fontWeight="450" textDecoration="none">
            SFU KINECTUS
        </Text>
      <Flex as="ul" padding="2.5rem" margin="0" gap="1rem">
        <li>
          <Button colorScheme='#CC0633' as="a" href="/about-us" className="navbtn" fontWeight="600"
          _hover={{
            bg: "red.500", 
            transform: "scale(1.05)", 
            transition: "all 0.3s ease-in-out"
          }}>
            About Us
          </Button>
        </li>
        <li>
          <Button colorScheme='#CC0633' as="a" href="/clubs" className="navbtn" fontWeight="600" _hover={{
            bg: "red.500", 
            transform: "scale(1.05)", 
            transition: "all 0.3s ease-in-out"
          }}>
            Clubs List
          </Button>
        </li>
        <li>
          <nav>
              {currentUser ? (
                <li>
                  <Menu>
                    <MenuButton as={Button} colorScheme='#800000' className="navbtn" fontWeight="600" _hover={{
                      bg: "red.500", 
                      transform: "scale(1.05)", 
                      transition: "all 0.3s ease-in-out"
                    }}>
                      {currentUser.name || 'User'} {/* Display user's name or a default string */}
                    </MenuButton>
                    <MenuList color="black" >
                      <MenuItem as="a" href="/profile">Profile</MenuItem>
                      <MenuDivider />
                      <MenuItem onClick={logout}>Log Out</MenuItem>
                    </MenuList>
                  </Menu>
                </li>
              ) : (
                <li>
                  <Button colorScheme='#800000' as="a" href="/login" className="navbtn" fontWeight="600" _hover={{
                    bg: "red.500", 
                    transform: "scale(1.05)", 
                    transition: "all 0.3s ease-in-out"
                  }}>
                    Log In
                  </Button>
                </li>
              )}
          </nav>
        </li>
      </Flex>
    </Flex>
  );
}
