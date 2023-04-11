import React, { useState } from 'react'
import styles from './style.module.scss'
import Registration from '../Registration/Registration'
import LoginPage from '../Login/LoginPage'

const Main:React.FC = () => {
    const [isAuth, setAuth] = useState(false)
    return (
        <div className={styles.main} >
            <div className={styles.main__choose}>
                <span onClick={() => setAuth(false)}>Вход</span>  & 
                <span onClick={() => setAuth(true)}> Регистрация </span>
            </div>
            {!isAuth ? <LoginPage/> : <Registration/>}
        </div>
    )
}

export default Main