import styles from "./button.module.sass"

type Props = {
  label?: string
  outline?: boolean
  loading?: boolean
  disabled?: boolean
  backgroundColor?: string
  htmlType?: "button" | "submit" | "reset"
  onClick?: () => void
}

const Button = ({ label, loading, disabled, htmlType, onClick }: Props) => (
  <button
    className={styles.button}
    type={htmlType}
    disabled={disabled || loading}
    onClick={onClick}
  >
    {/* {loading ? (
      <img
        className={styles.loadingImg}
        src={"/img/dots-white.svg"}
        alt="Loading..."
      />
    ) : ( */}
    {label}
    {/* )} */}
  </button>
)

export default Button
