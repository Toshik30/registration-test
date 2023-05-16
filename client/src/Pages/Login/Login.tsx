import React, {useState, useContext} from 'react'
import { Col, Form, Row } from 'antd'
import styles from './style.module.scss'
import { InputCustom } from '../../components/Input/InputCustom';
import { ButtonCustom } from '../../components/ButtonCustom/ButtonCustom';
import { Link } from 'react-router-dom'
import { Context } from '../../index';

const Login:React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {store} = useContext(Context)
  
    return (
        <>  
            <Form
                name="basic"
                style={{ width:'100%', maxWidth:336}}
                initialValues={{ remember: true }}
                className={styles.form}
                layout='vertical'
            >
                <Row 
                   
                    style={{textAlign: 'center'}}
                    className={styles.form__nav}
                >
                    <Col span={12}>
                        <Link to='/'>Вход</Link>
                    </Col>
                    <Col span={12} className={styles.active}>
                        <Link to='/registration'>Регистрация</Link>
                    </Col>
                </Row>
                <Form.Item
                    label="E-mail"
                    name="E-mail"
                    rules={[{ 
                        required: true,
                        message: 'Введите адрес эл.почты',
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                    }]}
                >
                    <InputCustom 
                        type='text' 
                        placeholder='Адрес эл. почты' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Item>
                <Form.Item
                    label="Введите пароль"
                    name="password"
                    rules={[{ 
                        required: true,
                        pattern:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,14}$/, 
                        message: 'Длина пароля должна быть не менее 8 и не более 14 символов'
                    }]}
                >
                    
                    <InputCustom 
                        type='password'
                        placeholder='Укажите ваш пароль' 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Item>
                <Form.Item 
                    style={{width:'100%'}}
                >
                    <ButtonCustom title='Войти'  htmlType='submit' onClick={() => store.login(email,password)}/>
                </Form.Item>
            </Form>
        </>
    )
}

export default Login