import Link from "next/link"
import styles from "./sidebarItem.module.sass"
import Image from "next/image"

type Props = {
  text: string
  icon: string
  linkTo?: string
  onClick?: () => null
}
const SidebarItem = ({ text, icon, linkTo, onClick }: Props) => {
  return linkTo ? (
    <Link href={linkTo}>
      <div className={styles.sidebarItem}>
        <Image src={icon} width={21} height={21} alt="" />
        <div className={styles.sidebarText}>{text}</div>
      </div>
    </Link>
  ) : (
    <div className={styles.sidebarItem} onClick={onClick}>
      <Image src={icon} width={21} height={21} alt="" />
      <div className={styles.sidebarText}>{text}</div>
    </div>
  )
}
export default SidebarItem
