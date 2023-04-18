import React from 'react'
import Registration from './Registration'
import styles from './style.module.scss'
import { registrationPageTypes } from '../../types/types'
import RegistrationData from './RegistrationData.json'

const {heading, description }:registrationPageTypes = RegistrationData

const RegistrationPage:React.FC = () => {
  return (
    <div className={styles.registrationPage}>
        <div className={styles.registrationPage__description}>
            <h2>{heading}</h2>
            <p>{description}</p>
        </div>
        <div className={styles.registration}>
            <Registration/>
        </div>
    </div>
  )
}

export default RegistrationPage