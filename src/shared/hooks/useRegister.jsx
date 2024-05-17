import { useState } from "react";
import toast from 'react-hot-toast'
import { registerRequest } from "../../services/api.js"

export const useRegister = () =>{
    const [isLoanding, setIsLoanding] = useState(false)

    const register = async (email, username, password) =>{
        const user = {email, username, password}
        setIsLoanding(true)
        const response = await registerRequest(user)
        setIsLoanding(false)

        if(response.error){
            return toast.error(
                response?.e?.response?.data ||
                'Error al registrar el usuario, intenta de nuevo'
            )
        }
        console.log(response)
    }

    return {
        register, 
        isLoanding
    }
}