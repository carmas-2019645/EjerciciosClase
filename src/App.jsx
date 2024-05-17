import { AuthPage } from "./pages/Auth/AuthPage.jsx"
import { Toaster } from "react-hot-toast"

function App() {
  

  return (
    <>
      <AuthPage/>
      <Toaster position="bottom-rigth" reverseOrder={false}/>
    </>
  )
}

export default App
