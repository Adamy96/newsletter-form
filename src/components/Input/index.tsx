import styles from './styles.module.scss'

const Input = ({ label, value, setValue, placeholder, errorMsg }: IInput) => {
  const getClasses = () => {
    let classes = styles.input
    errorMsg && (classes += ` ${styles.error}`)
    return classes
  }

  return (
    <>
      <div className={styles.container}>
        <label className={styles.label}>{label}</label>
        {errorMsg && <span className={styles.errorMsg}>{errorMsg}</span>}
      </div>
      <input
        className={getClasses()}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder ? placeholder : ''}
      />
    </>
    
  )
}

interface IInput {
  label: string
  value: any
  setValue: (e: any) => void
  placeholder?: string
  errorMsg?: string
}

export default Input