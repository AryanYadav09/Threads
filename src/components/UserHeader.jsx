import {
  Avatar,
  Box,
  Flex,
  Link,
  Menu,
  Portal,
  Text,
  VStack,
} from "@chakra-ui/react"
import { BsInstagram } from "react-icons/bs"
import { CgMoreO } from "react-icons/cg"
import { toaster } from "./ui/toaster-instance"

const UserHeader = () => {
  const copyURL = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      toaster.success({
        title: "Link copied",
        description: "Profile URL copied to clipboard.",
        duration: 3000,
        closable: true,
      })
    } catch {
      toaster.error({
        title: "Copy failed",
        description: "Could not copy the link.",
        duration: 3000,
        closable: true,
      })
    }
  }

  return (
    <VStack align="start" gap={4}>
      <Flex justify="space-between" w="full">
        <Box>
          <Text fontSize="2xl" fontWeight="bold">
            Aryan Yadav
          </Text>

          <Flex gap={2} align="center">
            <Text fontSize="sm">markzuckerberg</Text>
            <Text fontSize="xs" bg="gray.dark" color="gray.light" px={2} py={1} borderRadius="full">
              threads.net
            </Text>
          </Flex>
        </Box>

        <Avatar.Root size="xl">
          <Avatar.Fallback name="Aryan Yadav" />
          <Avatar.Image src="/zuck-avatar.png" />
        </Avatar.Root>
      </Flex>

      <Text>Co-founder, executive chairman and CEO of Meta Platforms.</Text>

      <Flex w="full" justify="space-between">
        <Flex gap={2} align="center">
          <Text color="gray.light">3.2K followers</Text>
          <Box w={1} h={1} bg="gray.light" borderRadius="full" />
          <Link color="gray.light">instagram.com</Link>
        </Flex>

        <Flex gap={2}>
          <Box className="icon-container">
            <BsInstagram size={24} cursor="pointer" />
          </Box>

          <Box className="icon-container">
            <Menu.Root>
              <Menu.Trigger asChild>
                <Box>
                  <CgMoreO size={24} cursor="pointer" />
                </Box>
              </Menu.Trigger>
              <Portal>
                <Menu.Positioner>
                  <Menu.Content bg="gray.dark">
                    <Menu.Item value="copy-link" onClick={copyURL}>
                      Copy link
                    </Menu.Item>
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </Menu.Root>
          </Box>
        </Flex>
      </Flex>

    </VStack>
  )
}

export default UserHeader
