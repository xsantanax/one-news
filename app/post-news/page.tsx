"use client"
import { useState } from "react"
import styles from "./postNews.module.sass"
import Input from "@/components/Input"
import Button from "@/components/Button"
import PostNewsInvite from "@/components/PostNewsInvite"

export default function PostNews() {
  const [url, setUrl] = useState("")

  async function handleSubmit(e: any) {
    e.preventDefault()
    console.log("fake submit. url:", url)
  }

  return (
    <>
      <div className={styles.title}>Publicar Notícia</div>
      <form className={styles.container} onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.responsiveRow}>
          <Input
            label="Cole aqui o link de uma notícia"
            name="url"
            htmlType="text"
            value={url}
            onChange={(e: any) => setUrl(e.target.value)}
          />
          <div className={styles.verifyButton}>
            <Button
              label="Verificar"
              // loading={loadingVerifiedNews}
              // htmlType="submit"
            />
          </div>
        </div>
      </form>
      <PostNewsInvite />
    </>
  )
}
