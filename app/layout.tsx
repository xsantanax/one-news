import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"
import styles from "./layout.module.sass"
// import { VerifiedNewsProvider } from "@/hooks/useVerifiedNews"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "One News",
  description:
    "News platform that gets news from multiple sources, classifies them into events and identify consistencies and inconsistencies across these news.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      {/* <VerifiedNewsProvider> */}
      <body className={inter.className} suppressHydrationWarning={true}>
        <Header />
        <div className={styles.desktopBody}>
          <div className={styles.desktopSidebar}>
            {/* <Sidebar setIsContactModalOpen={setIsContactModalOpen} /> */}
            <Sidebar />
          </div>
          <main className={styles.content}>{children}</main>
        </div>
      </body>
      {/* </VerifiedNewsProvider> */}
    </html>
  )
}
