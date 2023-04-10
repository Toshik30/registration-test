import React from 'react'
import { Button,ButtonProps } from 'antd'
import styles from './style.module.scss'

export const ButtonCustom = ({
    disabled = false,
    type='primary',
    title='Click me',
}:ButtonProps) => (
    <Button
        disabled={disabled}
        type={type}
        title='Title'
        className={`${styles.btn} ${styles[type]}`}
    > {title}
    </Button>
)