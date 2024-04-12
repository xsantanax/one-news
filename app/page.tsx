import styles from "@/styles/app.module.sass"

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        One News is a news platform that gets news from multiple sources,
        classifies them into events and identify consistencies and
        inconsistencies across these news.
      </div>
    </main>
  )
}
