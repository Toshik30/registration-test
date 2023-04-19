import React from 'react'
import { Button, Form, Input, Row, Select, DatePicker, Col } from 'antd'
import { registrationPageTypes } from '../../types/types'
import RegistrationData from './RegistrationData.json'
import styles from './style.module.scss'
import { ImportOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import { login } from '../../store/slices/authSlice'
import { InputCustom } from '../../components/Input/InputCustom'
import { InputPhone } from '../../stories/Input.stories'

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
    const dispatch = useDispatch()
    const handleExit = () =>  dispatch(login())
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
                            <InputCustom type='text'  placeholder='Фамилия' />
                        </Form.Item>
                        </Col>
                    <Col span={8}>
                        <Form.Item
                            name="Имя"
                            label="Имя"
                            rules={[{ required: true, message: 'Пожлуйста введите ваше Имя!'}]}
                        >
                            <InputCustom type='text' placeholder='Имя'/>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            name="Отчество"
                            label="Отчество"
                            rules={[{ required: true, message: 'Пожалуйста введите ваше Отчество!'}]}
                        >
                            <InputCustom type='text' placeholder='Отчество'/>
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item 
                    label="Дата рождения"
                    rules={[{ required: true, message: 'Пожлуйста введите дату рождения!'}]}
                >
                    <InputCustom type='date' placeholder='Дата Рождения'/>
                </Form.Item>
                <Form.Item
                    name="Пол"
                    label="Пол"
                    rules={[{ required: true, message: 'Пожалуйста выберите Пол!' }]}
                >
                    <Select placeholder="Выберите ваш пол">
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
                    />
                </Form.Item>
                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[{ pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i, message: 'Пожлуйста введите дату рождения!'}]}
                >
                    <InputCustom
                        placeholder="Введите вашу эл.почту"
                        type="email"
                    />
                </Form.Item>
            </Form>
            <Row 
                className={styles.nav}
                align={'middle'}
                justify={'space-between'}
                style={{width:'100%'}}
            >
                <Col className={styles.nav__prevBtn} onClick={handleExit} >
                    <ImportOutlined style={{fontSize: 24, marginRight:12, fontWeight:700}}/>
                    Выход
                </Col>
                <Col className={styles.nav__nextBtn}>Далее</Col>
           </Row>
        </>
    )   
}

export default Registration