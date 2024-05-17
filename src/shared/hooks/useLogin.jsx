import { useState } from "react";
import toast from 'react-hot-toast'
import { loginRequest } from "../../services/api.js";


export const useLogin = () => {
    const [isLoanding, setIsLoanding] = useState(false)

    const login = async(email, password)=>{
        const user = {email, password}
        setIsLoanding(true)
        const response = await loginRequest(user)
        setIsLoanding(false)
        if(response.error){
          console.log(response)
            return toast.error(
                response?.e?.response?.data ||
                'Error al initentar hacer login, intenta de nuevo'
            )
           
        }else{
          console.log(response)
          return toast.success('Login Correcto')
        }
       

    }
  return {
    login, 
    isLoanding
  }
}
