import React, { useState } from 'react'
import { Form, Row, Select, Col } from 'antd'
import { registrationPageTypes } from '../../types/types'
import RegistrationData from './RegistrationData.json'
import styles from './style.module.scss'
import { ImportOutlined } from '@ant-design/icons'
import { InputCustom } from '../../components/Input/InputCustom'
import { ButtonCustom } from '../../components/ButtonCustom/ButtonCustom'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../store/hook';
import { registration } from '../../store/slices/authSlice'

const { Option } = Select
const { headingCard }:registrationPageTypes = RegistrationData


const onFinish = (fieldsValue: any) => {
    const values = {
      ...fieldsValue,
      'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD')
    }
    console.log('Received values of form: ', values);
}

const Registration:React.FC = () => {
    const dispatch = useAppDispatch();
    const [firstName, setFirstName] = useState<string>('')
    const [secondName, setSecondName] = useState<string>('')
    const [thirtyName, setThirtyName] = useState<string>('')
    const [birthday, setBirthday] = useState<string>('')
    const [sex, setSex] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleRegistration = async () => await dispatch(registration({email, password, firstName,secondName,thirtyName,birthday,sex, phone}))
    return (
        <>
            <Form
                onFinish={onFinish}
                style={{ maxWidth: 600 }}
                layout='vertical'
            >
                <h3>{headingCard}</h3>
                <Row gutter={24}>
                    <Col span={8}>
                        <Form.Item
                            name="Фамилия"
                            label="Фамилия"
                            rules={[{ required: true, message: 'Пожлуйста введите вашу Фамилию!'}]}
                        >
                            <InputCustom 
                                type='text'  
                                placeholder='Фамилия'
                                value={secondName}
                                onChange={(e) => setSecondName(e.target.value)}
                            />
                        </Form.Item>
                        </Col>
                    <Col span={8}>
                        <Form.Item
                            name="Имя"
                            label="Имя"
                            rules={[{ required: true, message: 'Пожлуйста введите ваше Имя!'}]}
                        >
                            <InputCustom 
                                type='text' 
                                placeholder='Имя'
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            name="Отчество"
                            label="Отчество"
                            rules={[{ required: true, message: 'Пожалуйста введите ваше Отчество!'}]}
                        >
                            <InputCustom 
                                type='text' 
                                placeholder='Отчество'
                                value={thirtyName}
                                onChange={(e) => setThirtyName(e.target.value)}
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item 
                    label="Дата рождения"
                    rules={[{ required: true, message: 'Пожлуйста введите дату рождения!'}]}
                >
                    <InputCustom 
                        type='date' 
                        placeholder='Дата Рождения'
                        value={birthday}
                        onChange={(e) => setBirthday(e.target.value)}
                    />
                </Form.Item>
                <Form.Item
                    name="Пол"
                    label="Пол"
                    rules={[{ required: true, message: 'Пожалуйста выберите Пол!' }]}
                >
                    <Select placeholder="Выберите ваш пол"
                        value={sex}
                        onChange={(e) => setSex(e)}
                    >
                        <Option value="Мужчина">Мужчина</Option>
                        <Option value="Женщина">Женщина</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="Телефон"
                    label="Телефон"
                    rules={[{ 
                        required: true,
                        message: 'Введите пожалуйста свой номер телефона!', 
                    }]}
                >
                    <InputCustom
                        type='tel'
                        placeholder="(XXX) XXX-XX-XX"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </Form.Item>
                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[{ 
                        pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i,
                        required: true,
                        message: 'Пожлуйста введите дату рождения!'
                    }]}
                >
                    <InputCustom
                        placeholder="Введите вашу эл.почту"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                    
                    <InputCustom 
                        type='password' 
                        placeholder='Укажите ваш пароль'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
                    <InputCustom type='password' placeholder='Повторите ваш пароль'/>
                </Form.Item>
            </Form>
            <Row 
                className={styles.nav}
                align={'middle'}
                justify={'space-between'}
                style={{width:'100%'}}
            >
                <Col className={styles.nav__prevBtn}>
                    <ImportOutlined style={{fontSize: 24, marginRight:12, fontWeight:700}}/>
                    <Link to='/'>Выход</Link>
                </Col>
                
            <Form.Item>
                <ButtonCustom title='Далее'  htmlType='submit' onClick={handleRegistration}/>
            </Form.Item>
                
           </Row>
        </>
    )   
}

export default Registration