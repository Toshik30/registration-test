import { createSlice } from '@reduxjs/toolkit'

interface AuthState {
    isAuth: boolean,
}
const initialState: AuthState = {isAuth: true}

const authSlice = createSlice({
    name: 'autorize',
    initialState,
    reducers: {
        login: state => {
            state.isAuth = true
        },
        registration: state => {
            state.isAuth = false
        }
    }
})

export const {login, registration} = authSlice.actions
export default authSlice.reducer