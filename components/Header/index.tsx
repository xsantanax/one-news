import styles from "./header.module.sass"
import Link from "next/link"
import Searchbar from "../Searchbar"
import MenuButton from "../MenuButton"
import { GlobeAltIcon } from "@heroicons/react/24/outline"

function Header() {
  return (
    <div>
      <div className={styles.navbar}>
        <Link href="/">
          <div className={styles.leftNavbar}>
            <GlobeAltIcon className={styles.logo} width={32} height={32} />
            <div className={styles.logoText}>One News</div>
          </div>
        </Link>
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
