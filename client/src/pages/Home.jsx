import {
  Box,
  Flex,
  IconButton,
  Stack,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Center,
  Grid,
  Heading,
  Text,
  Button,
  VStack,
} from '@chakra-ui/react';
import { SearchIcon, ChevronDownIcon } from '@chakra-ui/icons';
import EventCard from '../components/EventCard';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Stack paddingLeft={20} paddingRight={20}>
        <Center>
          <h2 style={{ fontSize: '1.5rem' }}>
            Find friends, make memories! Dive into school clubs and events for
            fun-filled adventures.
          </h2>
        </Center>

        <Flex width='100%' gap={8}>
          <Box w={200}>
            <Menu>
              <MenuButton
                px={4}
                py={2}
                transition='all 0.2s'
                borderRadius='md'
                borderWidth='1px'
                borderColor='#CC0633'
                _hover={{ bg: '#CC0633' }}
                _expanded={{ bg: 'gray.400' }}
                _focus={{ boxShadow: 'outline' }}
              >
                Choose event type <ChevronDownIcon />
              </MenuButton>
              <MenuList>
                <MenuItem>Event 1</MenuItem>
                <MenuItem>Event 2</MenuItem>
                <MenuItem>Event 3</MenuItem>
                <MenuItem>Event 4</MenuItem>
                <MenuItem>Event 5</MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Box w={1000}>
            <Input placeholder='Enter keyword' borderColor='#CC0633' />
          </Box>
          <Box w={30}>
            <IconButton
              bgColor='#CC0633'
              color='white'
              aria-label='Search database'
              icon={<SearchIcon />}
            />
          </Box>
        </Flex>

        <Heading>
          <Text color='#CC0633' display='inline'>
            Upcoming{' '}
          </Text>
          <Text color='black.500' display='inline'>
            Events
          </Text>
        </Heading>

        <Grid templateColumns='repeat(3, 1fr)' gap={6} paddingTop={4}>
          <EventCard eventId="1"
            eventName='Name of Event'
            date='Jan 23'
            location='SFU Burnaby'
            participants='34/50'
          />
          <EventCard 
            eventName='Name of Event'
            date='Jan 23'
            location='SFU Burnaby'
            participants='34/50'
          />
          <EventCard
            eventName='Name of Event'
            date='Jan 23'
            location='SFU Burnaby'
            participants='34/50'
          />
          <EventCard
            eventName='Name of Event'
            date='Jan 23'
            location='SFU Burnaby'
            participants='34/50'
          />
        </Grid>
        <VStack margin={5}>
          <Text style={{ fontSize: '1.2rem' }}>Showing 4 of 12 events</Text>
          <Button>Show more</Button>
        </VStack>
      </Stack>
    </>
  );
}
