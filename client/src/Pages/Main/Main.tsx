import React from 'react'
import styles from './style.module.scss'
import LoginPage from '../Login/LoginPage'
import RegistrationPage from '../Registration/RegistrationPage'
// import { useSelector } from 'react-redux'
import { Routes,Route } from 'react-router-dom'


const Main:React.FC = () => {
    // const login = useSelector((state:any) => state.autorize.isAuth)
    return (
        <div className={styles.main} >
            <Routes>
                <Route path='/' element={<LoginPage/>}/>
                <Route path='/registration' element={<RegistrationPage/>}/>
            </Routes>
        </div>
    )
}

export default Main