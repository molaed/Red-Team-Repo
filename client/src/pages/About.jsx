import { VStack, Heading, Text, Container, Image, Box, Center } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import logo from './images/logo.jpeg';

export default function About() {
    /* TO-DO: Read text from a file */
    return (
        <Container maxW="500px" mt={8} mb={8}>
            <VStack spacing='24px' align="center">
                <Box boxSize='sm'>
                    <Image src={logo} alt='SFU Kinectus Logo' />
                </Box>
            </VStack>
            <VStack spacing='24px' align="start" mt={8}>
            
                <Heading as='h1' size='lg'>
                    Mission
                </Heading>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac est ornare neque malesuada dictum a at turpis. Vivamus diam risus, hendrerit sed posuere vitae, vestibulum non libero. Nam ornare ornare molestie. Donec egestas sit amet dolor a mattis. Aenean vestibulum mattis ligula non maximus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque in accumsan risus. Aenean accumsan ultricies euismod. In hac habitasse platea dictumst. Suspendisse faucibus egestas consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin leo ex, efficitur vitae urna vitae, tincidunt placerat erat.
                </Text>

                <Heading as='h1' size='lg'>
                    Inspiration
                </Heading>
                <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac est ornare neque malesuada dictum a at turpis. Vivamus diam risus, hendrerit sed posuere vitae, vestibulum non libero. Nam ornare ornare molestie. Donec egestas sit amet dolor a mattis. Aenean vestibulum mattis ligula non maximus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque in accumsan risus. Aenean accumsan ultricies euismod. In hac habitasse platea dictumst. Suspendisse faucibus egestas consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin leo ex, efficitur vitae urna vitae, tincidunt placerat erat.
                </Text>

                <Heading as='h1' size='lg'>
                    Who Are We?
                </Heading>
                <Heading as='h3' size='md' color='#CC0633'>
                    Darian
                </Heading>
                <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac est ornare neque malesuada dictum a at turpis. Vivamus diam risus, hendrerit sed posuere vitae, vestibulum non libero. Nam ornare ornare molestie. Donec egestas sit amet dolor a mattis. Aenean vestibulum mattis ligula non maximus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque in accumsan risus. Aenean accumsan ultricies euismod. In hac habitasse platea dictumst. Suspendisse faucibus egestas consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin leo ex, efficitur vitae urna vitae, tincidunt placerat erat.
                </Text>
                <Heading as='h3' size='md' color='#CC0633'>
                    Josie
                </Heading>
                <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac est ornare neque malesuada dictum a at turpis. Vivamus diam risus, hendrerit sed posuere vitae, vestibulum non libero. Nam ornare ornare molestie. Donec egestas sit amet dolor a mattis. Aenean vestibulum mattis ligula non maximus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque in accumsan risus. Aenean accumsan ultricies euismod. In hac habitasse platea dictumst. Suspendisse faucibus egestas consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin leo ex, efficitur vitae urna vitae, tincidunt placerat erat.
                </Text>

                <Heading as='h3' size='md' color='#CC0633'>
                    Kevin
                </Heading>
                <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac est ornare neque malesuada dictum a at turpis. Vivamus diam risus, hendrerit sed posuere vitae, vestibulum non libero. Nam ornare ornare molestie. Donec egestas sit amet dolor a mattis. Aenean vestibulum mattis ligula non maximus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque in accumsan risus. Aenean accumsan ultricies euismod. In hac habitasse platea dictumst. Suspendisse faucibus egestas consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin leo ex, efficitur vitae urna vitae, tincidunt placerat erat.
                </Text>

                <Heading as='h3' size='md' color='#CC0633'>
                    Nathan
                </Heading>
                <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac est ornare neque malesuada dictum a at turpis. Vivamus diam risus, hendrerit sed posuere vitae, vestibulum non libero. Nam ornare ornare molestie. Donec egestas sit amet dolor a mattis. Aenean vestibulum mattis ligula non maximus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque in accumsan risus. Aenean accumsan ultricies euismod. In hac habitasse platea dictumst. Suspendisse faucibus egestas consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin leo ex, efficitur vitae urna vitae, tincidunt placerat erat.
                </Text>

            </VStack>
        </Container>
    )
}
