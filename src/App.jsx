import { Container } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import { AppToaster } from "./components/ui/toaster"
import PostPage from "./pages/PostPage"
import UserPage from "./pages/UserPage"

function App() {
  return (
    <Container maxW="620px">
      <Header />
      <AppToaster />
      <Routes>
        <Route path="/:username" element={<UserPage />} />
        <Route path="/:username/post/:pid" element={<PostPage />} />
      </Routes>
    </Container>
  )
}

export default App
