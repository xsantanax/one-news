"use client"
import { useContext, createContext, useState } from "react"

type VerifiedNewsContextProps = {
  loadingVerifiedNews: boolean
  setLoadingVerifiedNews: (loadingVerifiedNews: boolean) => void
  verifiedNewsError: string
  setVerifiedNewsError: (verifiedNewsError: string) => void
  verifiedNews: any
  setVerifiedNews: (verifiedNews: any) => void
}

const VerifiedNewsContext = createContext<VerifiedNewsContextProps>({
  loadingVerifiedNews: false,
  setLoadingVerifiedNews: () => null,
  verifiedNewsError: "",
  setVerifiedNewsError: () => null,
  verifiedNews: {},
  setVerifiedNews: () => null,
})

const VerifiedNewsProvider = ({ children }: { children: React.ReactNode }) => {
  const [loadingVerifiedNews, setLoadingVerifiedNews] = useState(false)
  const [verifiedNewsError, setVerifiedNewsError] = useState("")
  const [verifiedNews, setVerifiedNews] = useState({
    image: "",
    title: "",
    softTitle: "",
  })

  return (
    <VerifiedNewsContext.Provider
      value={{
        loadingVerifiedNews,
        setLoadingVerifiedNews,
        verifiedNewsError,
        setVerifiedNewsError,
        verifiedNews,
        setVerifiedNews,
      }}
    >
      {children}
    </VerifiedNewsContext.Provider>
  )
}

const useVerifiedNews = () => useContext(VerifiedNewsContext)

export { VerifiedNewsProvider, useVerifiedNews }
