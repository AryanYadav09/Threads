import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import {
  createSystem,
  defaultConfig,
  defineConfig,
} from "@chakra-ui/react"
import { Provider } from "@/components/ui/provider"
import App from "./App"

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        gray: {
          light: { value: "#616161" },
          dark: { value: "#1e1e1e" },
        },
      },
    },
    semanticTokens: {
      colors: {
        bodyText: {
          value: { base: "gray.800", _dark: "whiteAlpha.900" },
        },
        bodyBg: {
          value: { base: "gray.100", _dark: "#101010" },
        },
      },
    },
  },
  globalCss: {
    body: {
      color: "bodyText",
      bg: "bodyBg",
    },
  },
})

const system = createSystem(defaultConfig, customConfig)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider value={system}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
