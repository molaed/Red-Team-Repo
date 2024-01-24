import { Box, Flex, IconButton, Stack, Input, Menu, MenuButton, MenuList, MenuItem, Center,} from '@chakra-ui/react'
import { SearchIcon, ChevronDownIcon } from '@chakra-ui/icons'
export default function Home() {
  return (
    <>
      <Stack>
        <Center>
          <h2 style={{fontSize: '1.5rem'}}>Find friends, make memories! Dive into school clubs and events for fun-filled adventures.</h2>
        </Center>
        <Flex width="100%" justify={'space-between'} padding={3}>
          <Box w={200}>
          <Menu>
            <MenuButton
              px={4}
              py={2}
              transition='all 0.2s'
              borderRadius='md'
              borderWidth='1px'
              borderColor='#CC0633'
              _hover={{ bg: '#CC0633' } }
              _expanded={{  bg: 'gray.400'}}
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

          <Box w={1200}>
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
        <h1>placeholder</h1>
      </Stack>
      
    </>
  )
}