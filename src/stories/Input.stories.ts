import { Meta,StoryObj, } from '@storybook/react'
import {InputCustom} from '../components/Input/InputCustom'

const meta: Meta<typeof InputCustom> = {
    title: 'App/Input',
    component: InputCustom,
    tags: ['autodocs'],
}
export default meta

export const InputDefaulte: StoryObj<typeof InputCustom> = {
    args: {
       type: 'text',
       disabled:false,
       placeholder: 'defaulte'
    }
}

export const InputPassword: StoryObj<typeof InputCustom> = {
    args: {
        ...InputDefaulte.args,
        type: 'password',
        placeholder: 'Введите пароль'
    }
}
export const InputPhone: StoryObj<typeof InputCustom> = {
    args: {
        type:'tel',
        placeholder:"(XXX) XXX-XX-XX",
    }
}
export const InputEmail: StoryObj<typeof InputCustom> = {
    args: {
        type:'email',
        placeholder:"Введите вашу эл.почту",
    }
}