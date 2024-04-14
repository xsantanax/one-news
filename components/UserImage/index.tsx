"use client"
import Link from "next/link"
import { useAuth } from "@/hooks/useAuth"
import styles from "./userImage.module.sass"
import Image from "next/image"

const UserImage = () => {
  const { user, authenticated, setIsAuthModalOpen, loadingUser }: any =
    useAuth()

  return (
    <div className={styles.container}>
      {loadingUser ? (
        <div className={styles.circle}>
          <img src="/img/dots.svg" width={80} height={20} />
        </div>
      ) : authenticated ? (
        <Link href="/user">
          <Image
            className={styles.image}
            src={user.userData?.image || "/img/user-default.png"}
            alt=""
          />
        </Link>
      ) : (
        <div className={styles.noUser} onClick={() => setIsAuthModalOpen(true)}>
          Entrar
        </div>
      )}
    </div>
  )
}

export default UserImage
