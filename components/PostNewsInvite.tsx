import styles from "@/styles/postNewsInvite.module.sass"
import Link from "next/link"
import { PaperAirplaneIcon } from "@heroicons/react/24/solid"

const PostNewsInvite = () => {
  return (
    <Link href="/post-news" className={styles.container}>
      <div className={styles.fakeInput}>Cole aqui o link de uma notícia</div>
      <PaperAirplaneIcon className={styles.icon} />
    </Link>
  )
}

export default PostNewsInvite
