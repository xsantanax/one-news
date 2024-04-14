import styles from "./likeButton.module.sass"
// import { useAuth } from "hooks/useAuth"
// import { useNews } from "hooks/useNews"
import Image from "next/image"
import { NewsProps } from "@/types/api"
const likeSolid = "/img/heart-solid.svg"
const likeOutline = "/img/heart-outline.svg"

type Props = {
  news: NewsProps
}

function LikeButton({ news }: Props) {
  const { newsData, likes } = news
  // const { user }: any = useAuth()
  // const { likeNews, unlikeNews } = useNews()

  const likedNews = () =>
    // likes && likes.find((like: any) => like?.slug === user?.userData?.slug)
    //   ? true
    //   : false
    false

  // const handleLikeNews = () => {
  //   likeNews(user.userData, newsData)
  // }

  // const handleUnlikeNews = () => {
  //   unlikeNews(user.userData, newsData)
  // }

  const likeButton = (
    <div
      className={styles.newsFooterLeftItem}
      // onClick={likedNews() ? handleUnlikeNews : handleLikeNews}
    >
      <Image
        className={styles.footerIcon}
        src={likedNews() ? likeSolid : likeOutline}
        width={36}
        height={36}
        alt=""
      />
      <div className={styles.footerText}>{likes?.length || 0}</div>
    </div>
  )
  return likeButton
}

export default LikeButton
