'use client'
import styles from './styles.module.scss'

const Button = ({ children, onClick }: IButton) => {
  return (
    <button onClick={onClick} className={styles.btn}>
      {children}
    </button>
  )
}

interface IButton {
  onClick: (e?: any) => any
  children: React.ReactNode
}

export default Button