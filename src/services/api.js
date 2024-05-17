import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://localhost:2656/twitch/v1',
    timeout: 1000
})

export const registerRequest = async(user) => {
    try {
        return await apiClient.post('/auth/register', user)
        
    } catch (error) {
        return {
            error: true, 
            error
        }
        
    }
}

export const loginRequest = async(user) =>{
    try {
        return await apiClient.post('/auth/login', user)
        
    } catch (error) {
        return {
            error: true, 
            error
        }
        
    }
}