import { Heading, Stack, Flex } from "@chakra-ui/react"
import AdminEventCard from "./AdminEventCard"

export default function AdminCurrentEvents() {
    return (
        <Stack spacing='3rem'>
            <AdminEventCard />
            <AdminEventCard />
        </Stack>
    )
}