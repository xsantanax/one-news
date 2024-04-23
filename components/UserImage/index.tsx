'use client'
import { useAuth } from '@/hooks/useAuth'
import styles from './userImage.module.sass'
import Image from 'next/image'
import AuthModal from '../AuthModal'
// import router from 'next/router'

const UserImage = () => {
  const {
    user,
    authenticated,
    setIsAuthModalOpen,
    loadingUser,
    isAuthModalOpen,
  }: any = useAuth()

  console.log('user', user)

  return (
    <div className={styles.container}>
      <div className={styles.circle}>
        {loadingUser ? (
          <Image
            src='/img/dots-white.svg'
            width={60}
            height={15}
            alt='loading'
          />
        ) : authenticated ? (
          <Image
            width={88}
            height={88}
            className={styles.image}
            // src={user.userData?.image || "/img/user-default.png"}
            src={user.photoURL || '/img/user-default.png'}
            alt=''
            // onClick={() => router.push("/user")}
          />
        ) : (
          <div
            className={styles.noUser}
            onClick={() => setIsAuthModalOpen(true)}
          >
            Entrar
          </div>
        )}
      </div>

      {isAuthModalOpen && (
        <AuthModal onClose={() => setIsAuthModalOpen(false)} />
      )}
    </div>
  )
}

export default UserImage
