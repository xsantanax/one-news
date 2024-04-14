"use client"
import { useState } from "react"
import styles from "./commentButton.module.sass"

// import Modal from "components/Modal"
// import CommentsForm from "components/CommentsForm"
// import CommentsList from "components/CommentsList"
import { NewsProps } from "@/types/api"
import Image from "next/image"
// import { useAuth } from "hooks/useAuth"

type Props = {
  news: NewsProps
}

const CommentButton = ({ news }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  // const { authenticated, setIsAuthModalOpen }: any = useAuth()
  // const modalContent = (
  //   <>
  //     <CommentsForm newsData={news.newsData} />
  //     {news.comments && <CommentsList comments={news.comments} />}
  //   </>
  // )

  return (
    <>
      <div className={styles.container}>
        <div
          className={styles.newsFooterRightItem}
          // onClick={() =>
          //   authenticated ? setIsModalOpen(true) : setIsAuthModalOpen(true)
          // }
        >
          <div className={styles.footerText}>{news?.comments?.length || 0}</div>
          <Image
            className={styles.footerIcon}
            src="/img/comment.svg"
            width={41}
            height={41}
            alt="comments"
          />
        </div>
      </div>
      {/* {isModalOpen && (
        <Modal
          content={modalContent}
          backgroundColor="#222"
          onClose={() => setIsModalOpen(false)}
        />
      )} */}
    </>
  )
}

export default CommentButton
