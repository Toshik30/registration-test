import { Meta,StoryObj } from '@storybook/react'
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
       size: 'm' 
    }
}

export const InputEmail: StoryObj<typeof InputCustom> = {
    args: {
        ...InputDefaulte.args,
        type: 'email',
        size: 's'
    }
}