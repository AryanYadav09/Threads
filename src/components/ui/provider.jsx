'use client'

import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { ColorModeProvider } from './color-mode'

export function Provider({ children, value = defaultSystem, ...colorModeProps }) {
  return (
    <ChakraProvider value={value}>
      <ColorModeProvider {...colorModeProps}>{children}</ColorModeProvider>
    </ChakraProvider>
  )
}
