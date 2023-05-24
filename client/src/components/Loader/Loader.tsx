import React from 'react'
import styles from './style.module.scss'
const Loader:React.FC = () => {
  return (
    <div className={styles.wrapperLoader}>
        <div className={styles.wrapperLoader__item}></div>
        <div className={styles.wrapperLoader__item}></div>
        <div className={styles.wrapperLoader__item}></div>
        <div className={styles.wrapperLoader__item}></div>
        <div className={styles.wrapperLoader__item}></div>
        <div className={styles.wrapperLoader__item}></div>
    </div>
  )
}

export default Loader