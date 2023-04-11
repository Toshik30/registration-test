import React from 'react'
import { Button, Form, Input } from 'antd'
import styles from './style.module.scss'

const onFinish = (values: any) => {
  console.log('Success:', values);
}
const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
}
const Login:React.FC = () => {
  return (
    <Form
        name="basic"
        style={{ maxWidth: 336, width:'100%' }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        // autoComplete="off"
        className={styles.form}
        layout='vertical'
    >
        <Form.Item
            label="E-mail"
            name="E-mail"
            rules={[{ 
                required: true,
                message: 'Введите адрес эл.почты',
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
            }]}
            className={styles.form__wrapper}
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
            className={styles.form__wrapper}
        >
            <Input.Password 
                placeholder='Укажите ваш пароль'
            />
        </Form.Item>
        <Form.Item
            name="confirm"
            label="Повторите пароль"
            dependencies={['password']}
            className={styles.form__wrapper}
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
            className={styles.form__wrapper}
        >
            <Button type="primary" htmlType="submit" style={{width:'100%'}} >
                Submit
            </Button>
        </Form.Item>
    </Form>
)
}

export default Login