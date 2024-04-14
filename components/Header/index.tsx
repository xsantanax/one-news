import styles from "./header.module.sass"
import Link from "next/link"
import Searchbar from "../Searchbar"
import MenuButton from "../MenuButton"
import { GlobeAltIcon } from "@heroicons/react/24/outline"

function Header() {
  return (
    <div>
      <div className={styles.navbar}>
        <div className={styles.leftNavbar}>
          <Link href="/">
            <GlobeAltIcon className={styles.logo} width={32} height={32} />
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
