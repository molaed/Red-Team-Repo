import {
    Grid
} from '@chakra-ui/react';
import EventCard from '../../components/EventCard';
import AdminEventCard from "./AdminEventCard"

export default function AdminPastEvents() {
    return (
        <Grid templateColumns='repeat(3, 1fr)' gap={6} paddingTop={4}>
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
    )
}