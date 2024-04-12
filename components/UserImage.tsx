// import Link from "next/link"
// import { useAuth } from "hooks/useAuth"
// const userDefault = "/img/usuario-default.png"
import styles from "@/styles/userImage.module.sass"

// const UserImage = () => {
//   const { user, authenticated, setIsAuthModalOpen, loadingUser }: any =
//     useAuth()
const UserImage = () => {
  return (
    <div className={styles.container}>
      {/* {loadingUser ? (
        <S.Circle>
          <img src="/img/dots.svg" width={80} height={20} />
        </S.Circle>
      ) : authenticated ? (
        <Link href="/user">
          <S.Image
            src={user.userData?.image || userDefault}
            alt=""
          />
        </Link>
      ) : ( */}
      <div
        className={styles.noUser}
        // onClick={() => setIsAuthModalOpen(true)}
      >
        Entrar
      </div>
    </div>
  )
}

export default UserImage
