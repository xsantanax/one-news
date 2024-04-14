import {
  signInWithPopup,
  // FacebookAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth"

import styles from "./authModal.module.sass"
import { useAuth } from "@/hooks/useAuth"
import Button from "@/components/Button"
import Image from "next/image"

type Props = {
  onClose: () => void
}

const AuthModal = ({ onClose }: Props) => {
  const { auth }: any = useAuth()
  // const facebookProvider = new FacebookAuthProvider()
  const googleProvider = new GoogleAuthProvider()

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then(() => {
        onClose()
      })
      .catch((error) => {
        console.log(error)
        onClose()
      })
  }
  // const handleFacebookLogin = () => {
  //   signInWithPopup(auth, facebookProvider)
  //     .then(() => {
  //       onClose()
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //       onClose()
  //     })
  // }
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.closeWrap} onClick={onClose}>
          <Image
            className={styles.closeIcon}
            src="/img/cancel.svg"
            width={32}
            height={32}
            alt="close"
          />
        </div>
        <div className={styles.title}>Entrar</div>
        {/* <Button
          label="Login com Facebook"
          width="200px"
          margin="10px"
          onClick={handleFacebookLogin}
        /> */}
        <Button
          label="Login com Google"
          // width="200px"
          // margin="10px"
          onClick={handleGoogleLogin}
        />
      </div>
    </div>
  )
}

export default AuthModal
