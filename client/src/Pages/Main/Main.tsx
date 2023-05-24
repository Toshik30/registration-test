import React, {useEffect} from 'react'
import styles from './style.module.scss'
import { useAppSelector, useAppDispatch } from '../../store/hook'
import { checkAuth } from '../../store/slices/authSlice'
import { Link } from 'react-router-dom'
import Home from '../Home/Home'

const Main:React.FC = () => {
    const dispatch = useAppDispatch()
    const isAuth = useAppSelector(state => state.auth.isAuth)
    useEffect(() => {
        dispatch(checkAuth());
    },[dispatch])
    return (
        <div className={styles.main} >
            <div className={styles.navigation}>
                {!isAuth ?
                <>
                    <Link to={'/registration'} className={styles.navigation__link}>registration</Link>
                    <Link to={'/login'} className={styles.navigation__link}> log in</Link> 
                </>
                :
                <Home/>    
                }
            </div>
        </div>
    )
}

export default Main