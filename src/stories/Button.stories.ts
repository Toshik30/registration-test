import { Meta,StoryObj } from '@storybook/react'
import {ButtonCustom} from '../components/ButtonCustom/ButtonCustom'
import  '../components/ButtonCustom/style.module.scss'

const meta: Meta<typeof ButtonCustom> = {
    title: 'App/Button',
    component: ButtonCustom,
    tags: ['autodocs'],

}
export default meta

export const ButtonDefault: StoryObj<typeof ButtonCustom> = {
    args: {
        type:'default',
        className: 'default',
        title: 'Defaulte'
    }
}
export const ButtonPrimary:StoryObj<typeof ButtonCustom> = {
    args: {
        title:'Primary',
        className:'primary'
        
    }
}