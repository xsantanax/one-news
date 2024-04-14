"use client"
import { useState } from "react"
import { ChevronDownIcon } from "@heroicons/react/24/solid"
import Sidebar from "../Sidebar"
import Modal from "../Modal"
import styles from "./menuButton.module.sass"

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

      {isMobileMenuOpen && (
        <Modal
          onClose={() => setIsMobileMenuOpen(false)}
          content={
            <Sidebar
              onClose={() => setIsMobileMenuOpen(false)}
              // setIsContactModalOpen={setIsContactModalOpen}
            />
          }
        />
      )}
    </>
  )
}

export default MenuButton
