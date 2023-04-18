import React from 'react'
import { Button, Col, Form, Input, Row } from 'antd'
import styles from './style.module.scss'
import { useDispatch } from 'react-redux';
import { registration } from '../../store/slices/authSlice';

const onFinish = (values: any) => {
  console.log('Success:', values);
}
const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
}

const Login:React.FC = () => {
    const dispatch = useDispatch()
    return (
        <>  
            <Form
                name="basic"
                style={{ width:'100%', maxWidth:336}}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                // autoComplete="off"
                className={styles.form}
                layout='vertical'
            >
                <Row 
                   
                    style={{textAlign: 'center'}}
                    className={styles.form__nav}
                >
                    <Col span={12} >Вход</Col>
                    <Col 
                        span={12} 
                        className={styles.active}
                        onClick={() => dispatch(registration())}
                    >Регистрация
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
                    <Input 
                        type='email'
                        placeholder='Адрес эл. почты'
                    />
                </Form.Item>
                <Form.Item
                    label="Придумайте пароль"
                    name="password"
                    rules={[{ 
                        required: true,
                        pattern:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,14}$/, 
                        message: 'Длина пароля должна быть не менее 8 и не более 14 символов'
                    }]}
                >
                    <Input.Password 
                        placeholder='Укажите ваш пароль'
                    />
                </Form.Item>
                <Form.Item
                    name="confirm"
                    label="Повторите пароль"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                    {
                        required: true,
                        message: 'Пожалуйста повторите пароль',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                        }
                        return Promise.reject(new Error('The two passwords that you entered do not match!'));
                        },
                    }),
                    ]}
                >
                    <Input.Password 
                        placeholder='Повторите ваш пароль'
                    />
                </Form.Item>
                <Form.Item 
                    style={{width:'100%'}}
                >
                    <Button type="primary" htmlType="submit" style={{width:'100%'}} >
                        Войти
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default Login