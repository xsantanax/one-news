import styles from "@/styles/about.module.sass"

export default function About() {
  return (
    <div className={styles.description}>
      One News is a news platform that gets news from multiple sources,
      classifies them into events and identify consistencies and inconsistencies
      across these news.
    </div>
  )
}
