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
} from '@chakra-ui/react';
import { SearchIcon, ChevronDownIcon } from '@chakra-ui/icons';
import EventCard from '../components/EventCard';

export default function Home() {
  return (
    <>
      <Stack paddingLeft={20} paddingRight={20} paddingTop={10} paddingBottom={10}>
        <Center marginBottom={3}>
          <h2 style={{ fontSize: '1.5rem' }}>
            Find friends, make memories! Dive into school clubs and events for
            fun-filled adventures.
          </h2>
        </Center>
        <Flex width='100%' gap={8} align="center" justify="center" marginBottom={5}>
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
                _expanded={{ bg: 'gray.100' }}
                _focus={{ boxShadow: 'outline' }}
              >
                Choose Event Type <ChevronDownIcon />
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
            <Input placeholder='Enter Keyword' borderColor='#CC0633' />
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
          <EventCard
            eventName='Name of Event'
            date='Jan 23'
            location='SFU Burnaby'
            participants='34/50'
            className="event-card" 
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
          <EventCard
            eventName='Name of Event'
            date='Jan 23'
            location='SFU Burnaby'
            participants='34/50'
          />
        </Grid>
      </Stack>
    </>
  );
}
