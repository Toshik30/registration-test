import React from 'react'
import { Button,ButtonProps } from 'antd'


export const ButtonCustom = ({
    disabled = false,
    type='primary',
    title='Click me'
}:ButtonProps) => (
    <Button
        disabled={disabled}
        type={type}
        title='Title'
    > {title}
    </Button>
)