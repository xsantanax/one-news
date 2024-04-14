import Image from "next/image"
import styles from "./modal.module.sass"

type Props = {
  onClose: () => void
  content: any
  title?: string
  backgroundColor?: string
  color?: string
}

const Modal = ({ onClose, title, content, backgroundColor, color }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.closeWrap} onClick={onClose}>
          <Image
            className={styles.closeIcon}
            width={32}
            height={32}
            src="/img/cancel.svg"
            alt="close"
          />
        </div>
        {title && (
          <div className={styles.title} color={color}>
            {title}
          </div>
        )}
        {content}
      </div>
    </div>
  )
}

export default Modal
