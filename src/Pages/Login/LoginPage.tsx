import React from 'react'
import styles from './style.module.scss'
import { loginPageTypes } from '../../types/types'
import LoginPageData from './LoginData.json'
import Login from './Login'
import { Col, Row } from 'antd'

const {heading, description, list}:loginPageTypes = LoginPageData

const LoginPage:React.FC = () => {
  return (
    <div className={styles.loginPage}>
        <div  className={styles.loginPage__description}>
            <h1>{heading}</h1>
            <p>{description}</p>
            <Row>
              {list.map(({img,item}, index) => (
                <Col span={12} key={index} className={styles.loginPage__description__item}>
                    <img src={img} alt="Ok" />
                    <span>{item}</span>
                </Col>
              ))}
            </Row>
        </div>
        <div className={styles.login}>
          <Login/>
        </div>
    </div>
  )
}

export default LoginPage