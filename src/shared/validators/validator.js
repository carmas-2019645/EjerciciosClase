/**********************EMAIL VALIDATION**************************************/
export const validateEmail = (email) =>{
    const regex = /\S+@\S+\.\S+/
    return regex.test(email)

}

export const emailValidationMessage = 'Por favor ingresa un correo válido'

/**********************EMAIL VALIDATION**************************************/

/**********************USERNAME VALIDATION**************************************/
export const validateUsername = (username) =>{
    const regex = /^\S{3,8}$/
    return regex.test(username)

}

export const usernameValidationMessage = 'El username debe tener entre 3 y 8 caracteres, sin espcios'

/**********************USERNAME VALIDATION**************************************/
/**********************PASSWORD VALIDATION************************************ */

export const validatePassword = (password) =>{
        const regex = /^\S{6,12}$/
        return regex.test(password)
    
}

export const passwordValidateMessage = 'La contrseña debe tener entre 6 y 12 caracteres, sin espcios'
/**********************PASSWORD VALIDATION************************************ */
/**********************PASSWORDCONFIRM VALIDATION************************************ */
export const validatePasswordConfirm = (password, passwordConfirm) =>{
    return password === passwordConfirm
}
export const passwordConfirmValidateMessage = 'Las constraseñas deben ser identicas '

/**********************PASSWORDCONFIRM VALIDATION************************************ */