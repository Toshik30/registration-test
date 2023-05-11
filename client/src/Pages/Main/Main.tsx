import React from 'react'
import styles from './style.module.scss'

import LoginPage from '../Login/LoginPage'
import RegistrationPage from '../Registration/RegistrationPage'
import { useSelector } from 'react-redux'


const Main:React.FC = () => {
    const login = useSelector((state:any) => state.autorize.isAuth)
    return (
        <div className={styles.main} >
            {login ? <LoginPage/> : <RegistrationPage/>}
        </div>
    )
}

export default Main