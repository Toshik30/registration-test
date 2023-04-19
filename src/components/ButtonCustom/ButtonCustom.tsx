import React from 'react'
import { Button,ButtonProps } from 'antd'
import styles from './style.module.scss'

export const ButtonCustom = ({
    disabled = false,
    type='primary',
    title='',
    ...props
}:ButtonProps) => (
    <Button
        disabled={disabled}
        type={type}
        className={`${styles.btn} ${styles[type]}`}
        {...props}
    > {title}
    </Button>
)