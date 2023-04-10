import React, {useState} from 'react'
import { Button, Form, Input } from 'antd'
import styles from './style.module.scss'

const onFinish = (values: any) => {
  console.log('Success:', values);
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
}
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

function validateEmail(email:string):boolean {
  return emailRegex.test(email);
}

const Registration:React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [, setIsValid] = useState<boolean>(true);

    function handleChange(event:React.ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);
        setIsValid(validateEmail(event.target.value));
    }
    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className={styles.form}
        >
            <Form.Item
                label="E-mail"
                name="E-mail"
                rules={[{ required: true, message: 'Please input your username!' }]}
                className={styles.form__wrapper}
            >
                <Input 
                    type='email'
                    value={email}
                    onChange={handleChange}
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
                wrapperCol={{ offset: 8, span: 16 }}
                className={styles.form__wrapper}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

export default Registration