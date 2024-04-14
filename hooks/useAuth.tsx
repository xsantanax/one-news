"use client"
import React, { useContext, createContext, useState, useEffect } from "react"
import { initializeApp } from "firebase/app"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import axios from "axios"
import router from "next/router"
// import { UserData } from "@/types/api"

initializeApp({
  apiKey: "AIzaSyAjt1tAbxFKs78hoJ7V9iHfRrybGyo_uD8",
  authDomain: "one-news-f8df9.firebaseapp.com",
  projectId: "one-news-f8df9",
})

const AuthContext = createContext({})

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser]: any = useState({})
  const [loadingUser, setLoadingUser] = useState({})
  const [authenticated, setAuthenticated] = useState(false)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

  const verifyAuth = () => {
    !authenticated && setIsAuthModalOpen(true)
    return authenticated
  }

  // const uploadUserImage = async (file: File) => {
  //   if (!verifyAuth()) return
  //   const formData = new FormData()
  //   formData.append("image", file, file.name)
  //   await axios
  //     .post("/user/image", formData)
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err))
  // }

  const setAuthHeaders = (token: string) => {
    const firebaseIdToken = `Bearer ${token}`
    localStorage.setItem("firebaseIdToken", firebaseIdToken)
    axios.defaults.headers.common["Authorization"] = firebaseIdToken
  }

  const completeLogin = async (token: string, firestoreUser: any) => {
    setAuthenticated(true)
    await setUser(firestoreUser)
    setLoadingUser(false)
  }

  const handleLogin = async (firebaseUser: any) => {
    //needed when firebase configured to allow (only or more?) than one account per email
    const user = firebaseUser
    if (firebaseUser.email === null) {
      user.email = firebaseUser.providerData[0].email
    }
    setAuthHeaders(user.accessToken)

    completeLogin(user.accessToken, user)
    //check if email is already in firestore
    // await axios
    //   .get(`user/${user.email}/email`)
    //   .then((res) => {
    //     const isUserRegistered = res.data
    //     if (isUserRegistered) {
    //       // user already in firestore
    //       axios
    //         .get("/user")
    //         .then((res) => {
    //           const resUser = res.data
    //           completeLogin(user.accessToken, resUser)
    //         })
    //         .catch((err) => console.log(err))
    //     } else {
    //       //no user in firestore, need to register
    //       axios
    //         .post("/firebaseSignup", user)
    //         .then(async (res) => {
    //           //save provider user image in firebase storage
    //           // const urlData = await fetch(user.photoURL)
    //           // const blob = await urlData.blob()
    //           // const file = new File(
    //           //   [blob],
    //           //   user.uid + Math.round(Math.random() * 999999999999) + '.' + blob.type.split('/')[1],
    //           //   { type: blob.type }
    //           // )
    //           // await uploadUserImage(file)
    //           const newUser = { ...res.data, image: "" }
    //           completeLogin(user.accessToken, newUser)
    //         })
    //         .catch((err) => console.log(err))
    //     }
    //   })
    //   .catch((err) => console.log(err))
  }

  const handleLogout = () => {
    localStorage.removeItem("firebaseIdToken")
    delete axios.defaults.headers.common["Authorization"]
    setAuthenticated(false)
    setUser({})
    setLoadingUser(false)
  }

  const auth = getAuth() //need to come after initializeApp

  const logout = () => {
    auth
      .signOut()
      .then(() => router.push("/"))
      .catch((err) => console.log(err))
  }

  const setListener = () => {
    onAuthStateChanged(auth, (user) => {
      setLoadingUser(true)
      if (user) handleLogin(user)
      else handleLogout()
    })
  }

  useEffect(setListener, [])

  return (
    <AuthContext.Provider
      value={{
        auth,
        user,
        loadingUser,
        authenticated,
        logout,
        isAuthModalOpen,
        setIsAuthModalOpen,
        verifyAuth,
        // uploadUserImage,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }
