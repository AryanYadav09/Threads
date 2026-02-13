import { Box, Toast, Toaster } from "@chakra-ui/react"
import { toaster } from "./toaster-instance"

export const AppToaster = () => {
  return (
    <Toaster toaster={toaster}>
      {(toast) => (
        <Toast.Root key={toast.id} toast={toast} w="fit-content" maxW="fit-content" minW="unset">
          <Toast.Indicator />
          <Box>
            <Toast.Title>{toast.title}</Toast.Title>
            <Toast.Description>{toast.description}</Toast.Description>
          </Box>
          <Toast.CloseTrigger />
        </Toast.Root>
      )}
    </Toaster>
  )
}
