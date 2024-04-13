"use client"
import { useState } from "react"
// import Modal from 'components/Modal'
// import Sidebar from 'components/Sidebar'
import Image from "next/image"
import styles from "@/styles/menuButton.module.sass"
import { ChevronDownIcon } from "@heroicons/react/24/solid"

// const MenuButton = ({ setIsContactModalOpen }: any) => {
const MenuButton = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <div
        className={styles.container}
        onClick={() => setIsMobileMenuOpen(true)}
      >
        <ChevronDownIcon width={23} height={23} />
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
