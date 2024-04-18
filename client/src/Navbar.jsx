import React from 'react';
import {
  Flex,
  Button,
  Text,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
  Link,
  IconButton,
  useBreakpointValue,
  Menu, MenuButton, MenuList, MenuItem 
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useAuth } from './provider/AuthContext';

export default function Navbar() {
  const {currentUser, userRole, setSecureUserRole, loading, logout} = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const showMenuButton = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      as="nav"
      className="nav"
      width="100%"
      bg="#CC0633"
      color="white"
      justifyContent="space-between"
      alignItems="center"
      padding="0 2rem"
      position="sticky"
      top="0"
      zIndex="999"
    >
      <Text
        as="a"
        href="/"
        className="title"
        fontSize="3.125rem"
        fontWeight="450"
        textDecoration="none"
      >
        SFU KINECTUS
      </Text>
      {showMenuButton ? (
        <IconButton
          icon={<HamburgerIcon />}
          onClick={onOpen}
          colorScheme="#CC0633"
          className="navbtn"
          fontWeight="600"
          _hover={{
            bg: 'red.500',
            transform: 'scale(1.05)',
            transition: 'all 0.3s ease-in-out',
          }}
        />
      ) : (
        <Stack
          as="ul"
          display={{ base: 'none', md: 'flex' }}
          padding="2.5rem"
          margin="0"
          gap="1rem"
          direction="row"
        >
          <li>
            <Button
              colorScheme="#CC0633"
              as="a"
              href="/about-us"
              className="navbtn"
              fontWeight="600"
              _hover={{
                bg: 'red.500',
                transform: 'scale(1.05)',
                transition: 'all 0.3s ease-in-out',
              }}
            >
              About Us
            </Button>
          </li>
          <li>
            <Button
              colorScheme="#CC0633"
              as="a"
              href="/clubs"
              className="navbtn"
              fontWeight="600"
              _hover={{
                bg: 'red.500',
                transform: 'scale(1.05)',
                transition: 'all 0.3s ease-in-out',
              }}
            >
              Clubs List
            </Button>
          </li>
          {currentUser ? (
            <Menu>
              <MenuButton
                as={Button}
                colorScheme="#800000"
                className="navbtn"
                fontWeight="600"
                _hover={{
                  bg: 'red.500',
                  transform: 'scale(1.05)',
                  transition: 'all 0.3s ease-in-out',
                }}
              >
                {currentUser.email || 'Profile'}
              </MenuButton>
              <MenuList color={'black'}>
              <MenuItem as="a" href={userRole === 'admin' ? "/admin" : "/profile"}>
                {userRole === 'admin' ? "Admin Dashboard" : "Profile"}
              </MenuItem>
              <MenuItem onClick={logout}>Log Out</MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <Button
              colorScheme="#800000"
              as="a"
              href="/login"
              className="navbtn"
              fontWeight="600"
              _hover={{
                bg: 'red.500',
                transform: 'scale(1.05)',
                transition: 'all 0.3s ease-in-out',
              }}
            >
              Log In
            </Button>
          )}

        </Stack>
      )}
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Stack spacing="24px">
              <Link as="a" href="/about-us">
                About Us
              </Link>
              <Link as="a" href="/clubs">
                Clubs List
              </Link>
              {currentUser ? (
                <>
                <Link as="a" href={userRole === 'admin' ? "/admin" : "/profile"}>
                  Profile
                </Link>
                <Button onClick={logout}>Log Out</Button>
              </>
              ) : (
                <Link as="a" href="/login">
                  Log In
                </Link>
              )}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
