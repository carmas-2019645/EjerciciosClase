import { Register } from "../../components/Register.jsx"
import './AuthPage.css'
import {Login} from '../../components/Login.jsx'
import { useState } from "react"

export const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(false)
  const handleAuthPage = () =>{
    setIsLogin((prev) => !prev)
  }
  return (
    <div className="auth-container">
      {
        isLogin ? (
          <Login SwitchAuthAndler={handleAuthPage}/>
        ) : (
          <Register SwitchAuthAndler={handleAuthPage}/>
        )
      }
    </div>
  )
}

