import { ChangeEvent } from "react"
import styles from "./input.module.sass"

export type Props = {
  label?: string
  value?: string
  error?: string | boolean
  htmlType?: string
  name?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ label, value, htmlType = "text", name, onChange }: Props) => {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        value={value}
        type={htmlType}
        name={name}
        onChange={onChange}
        placeholder=" "
      />
      <div className={styles.label}>{label}</div>
      <div className={styles.errorContainer}></div>
    </div>
  )
}

export default Input
