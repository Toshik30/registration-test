import { Meta,StoryObj } from '@storybook/react'
import {ButtonCustom} from '../components/ButtonCustom/ButtonCustom'


const meta: Meta<typeof ButtonCustom> = {
    title: 'App/Button',
    component: ButtonCustom,
    tags: ['autodocs'],

}
export default meta

export const ButtonDefault: StoryObj<typeof ButtonCustom> = {
    args: {
       type: 'link',
       disabled:false,
    }
}
export const ButtonPrimary:StoryObj<typeof ButtonCustom> = {
    args: {
        title:'Press!'
    }
}