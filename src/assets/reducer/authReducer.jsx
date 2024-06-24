export const initialState = {
    user: null
}

export const authReducer = (state, action) => {
    const { type, payload } = action
    switch(type) {
        case "LOGIN" :
            console.log("Login")
            return {...state, user: payload.user}
        case "SIGNIN" :
            console.log("Signin")
            return {...state, user: payload.user}
        case "LOGOUT" :
            console.log("logout")
            return {...state, user: null}
        default:
            throw new Error(`No case of type ${type} registered`)
    }

}