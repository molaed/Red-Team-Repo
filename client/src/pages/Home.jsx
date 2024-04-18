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
  Spacer,
} from '@chakra-ui/react';
import { SearchIcon, ChevronDownIcon } from '@chakra-ui/icons';
import EventList from '../components/EventList';
import React, { useState } from 'react';

export default function Home() {
  const [query, setQuery] = useState('');
  const [numEventsToShow, setNumEventsToShow] = useState(6); // Initial number of events to show
  const [searchResults, setSearchResults] = useState('');

  const handleSearch = async () => {
    try {
      setSearchResults(query);
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  const handleLoadMore = () => {
    const totalEvents = events.length; // Get the total number of events in the list
    const eventsPerPage = 3; // Number of events to load per page
  
    let newNumEventsToShow;
    if (totalEvents <= 6) {
      newNumEventsToShow = totalEvents; // Show all events if total events are less than or equal to 6
    } else {
      newNumEventsToShow = Math.min(numEventsToShow + eventsPerPage, totalEvents);
    }

    setNumEventsToShow(newNumEventsToShow); // Load 3 more events or less if reaching the end
  };

  return (
    <>
      <Stack paddingLeft={20} paddingRight={20} paddingTop={10} paddingBottom={10}>
        <Center marginBottom={3}>
          <h2 style={{ fontSize: '1.5rem' }}>
            Find friends, make memories! Dive into school clubs and events for
            fun-filled adventures.
          </h2>
        </Center>
        <Flex width='100%' align="center" marginBottom={5} gap={8}>
          <Box flex="1.5" width="100%">
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
                whiteSpace="nowrap"
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
         
          <Box flex="6">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder='Enter Keyword'
              borderColor='#CC0633'
            />
          </Box>
          
          <Box flex="0.5" align="right">
            <IconButton
              onClick={handleSearch}
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

        <EventList searchResults={searchResults} numEventsToShow={numEventsToShow} />

        <VStack margin={5}>
          <Text style={{ fontSize: '1.2rem' }}>Showing {numEventsToShow} of 12 events</Text>
          <Button onClick={handleLoadMore} >Show more</Button>
        </VStack>
      </Stack>
    </>
  );
}
 