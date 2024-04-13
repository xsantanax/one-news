"use client"
import { useVerifiedNews } from "@/hooks/useVerifiedNews"
import { useState } from "react"
import axios from "axios"
import styles from "@/styles/postNews.module.sass"
import Input from "@/components/Input"

export default function PostNews() {
  const {
    // loadingVerifiedNews,
    setLoadingVerifiedNews,
    // verifiedNewsError,
    setVerifiedNewsError,
    // verifiedNews,
    // setVerifiedNews,
  } = useVerifiedNews()

  const [url, setUrl] = useState("")

  async function handleSubmit({ url }: any) {
    setLoadingVerifiedNews(true)
    axios
      .post(process.env.NEXT_PUBLIC_SITE_URL + "api/verify-news", {
        // url: treatUrl(url),
        url,
      })
      .then((verifiedNewsResponse: any) => {
        console.log(verifiedNewsResponse)

        if (verifiedNewsResponse.data.error) {
          setVerifiedNewsError(verifiedNewsResponse.data.error)
          setLoadingVerifiedNews(false)
          return
        }

        if (
          !verifiedNewsResponse.data.image ||
          !verifiedNewsResponse.data.title
        ) {
          console.log("sem imagem/titulo")
          setVerifiedNewsError("Erro ao verificar link")
          setLoadingVerifiedNews(false)
          return
        }
        if (verifiedNewsResponse.data.error) {
          setVerifiedNewsError(verifiedNewsResponse.data.error)
        } else {
          setVerifiedNewsError("")
          // setVerifiedNews({ ...verifiedNewsResponse.data, url: treatUrl(url) })
        }
        setLoadingVerifiedNews(false)
      })
      .catch((err: any) => {
        console.log(err)
        setLoadingVerifiedNews(false)
        setVerifiedNewsError("Erro ao verificar link")
      })
  }

  return (
    <form className={styles.container} onSubmit={() => handleSubmit(url)}>
      <div className={styles.title}>Publicar Notícia</div>

      <div className={styles.responsiveRow}>
        <Input
          label="Cole aqui o link de uma notícia"
          name="url"
          htmlType="text"
          value={url}
          onChange={(e: any) => setUrl(e.target.value)}
        />
        <div className={styles.verifyButton}>
          {/* <Button */}
          <button
            // label="Verificar"
            // loading={loadingVerifiedNews}
            // height={"56px"}
            // htmlType="submit"
            type="submit"
          />
        </div>
      </div>
    </form>
  )
}
