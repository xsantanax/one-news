"use client"
import { useState } from "react"
// import Modal from 'components/Modal'
// import Sidebar from 'components/Sidebar'
import Image from "next/image"
import styles from "@/styles/menuButton.module.sass"

// const MenuButton = ({ setIsContactModalOpen }: any) => {
const MenuButton = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <div
        className={styles.container}
        onClick={() => setIsMobileMenuOpen(true)}
      >
        <Image src="/img/chevron-down.svg" alt="" width={22} height={22} />
      </div>

      {/* {isMobileMenuOpen && (
        <Modal
          onClose={() => setIsMobileMenuOpen(false)}
          backgroundColor="#222"
          content={
            <Sidebar
              onClose={() => setIsMobileMenuOpen(false)}
              setIsContactModalOpen={setIsContactModalOpen}
            />
          }
        />
      )} */}
    </>
  )
}

export default MenuButton
