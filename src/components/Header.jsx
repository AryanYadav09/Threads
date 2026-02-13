import { Flex, IconButton, Image } from "@chakra-ui/react"
import { useTheme } from "next-themes"
import { LuMoon, LuSun } from "react-icons/lu"

const Header = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <Flex justify="center" align="center" gap={4} mt={6} mb={12}>
      <Image
        cursor="pointer"
        alt="Threads logo"
        w={6}
        src={isDark ? "/light-logo.svg" : "/dark-logo.svg"}
        onClick={toggleTheme}
      />

      <IconButton
        aria-label="Toggle color mode"
        variant="ghost"
        size="sm"
        onClick={toggleTheme}
      >
        {isDark ? <LuSun /> : <LuMoon />}
      </IconButton>
    </Flex>
  )
}

export default Header
