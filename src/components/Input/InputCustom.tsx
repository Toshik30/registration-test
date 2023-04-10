import styles from './style.module.scss';

export interface InputProps {
    size?: 's'|'m',
    disabled?: boolean,
    type: 'text'|'number'|'email'|'password',
    placeholder?: string,
}
export const InputCustom =({
    size = 'm',
    disabled = false,
    type = 'text',
    ...props

}:InputProps) => (
    <input
        {...props}
        className={`${styles.input} ${styles[size]}`}
        disabled={disabled}
        type={type}
        children={null}
    />
)


