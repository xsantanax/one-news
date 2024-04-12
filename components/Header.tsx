import styles from "@/styles/header.module.sass"
import Image from "next/image"
import Link from "next/link"
import Searchbar from "./Searchbar"
import MenuButton from "./MenuButton"

function Header() {
  return (
    <div>
      <div className={styles.navbar}>
        <div className={styles.leftNavbar}>
          <Link href="/">
            <Image
              className={styles.logo}
              src="/img/one-news.jpg"
              alt="logo"
              width={60}
              height={60}
            />
          </Link>
        </div>
        <div className={styles.middleNavbar}>
          <Searchbar />
          {/* <MenuButton setIsContactModalOpen={setIsContactModalOpen} /> */}
          <MenuButton />
        </div>
      </div>
    </div>
  )
}

export default Header
