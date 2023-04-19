import { Input,InputProps } from 'antd';
import styles from './style.module.scss';
import { ForwardRefExoticComponent } from 'react';

const { Password, Search, TextArea } = Input

// export interface InputProps {
//     size?: 'full'|'default',
//     disabled?: boolean,
//     type: 'textarea'|'search'|'text'|'password'|'number',
//     placeholder?: string,
    
// }
const inputComponents:Record<string, ForwardRefExoticComponent<any>> = {
    text: Input,
    password: Password,
    search: Search,
    textarea: TextArea
}
export const InputCustom =({
    disabled = false,
    type = 'text',
    placeholder='',
    addonBefore,
    pattern,
    ...props

}:InputProps) => {
    const InputComponent = inputComponents[type] || Input
    return (
        <InputComponent
            {...props}
            className={styles.input}
            type={type}
            placeholder={placeholder}
            addonBefore={addonBefore}
            pattern
        />
    )
}

