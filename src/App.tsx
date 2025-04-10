import Router from "./Routes"
import "@fontsource/ubuntu"
import { Stack } from "@mui/joy"
import { ToastContainer } from "react-toastify"


const App = () => {
  return (
    <Stack>
      <ToastContainer />
      <Router />
    </Stack >
  )
}

export default App