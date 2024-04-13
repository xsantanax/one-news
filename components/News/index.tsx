import Link from "next/link"
// import LinesEllipsis from 'react-lines-ellipsis'
// import AuthorHeader from 'components/AuthorHeader'
// import LikeButton from 'components/LikeButton'
// import CommentButton from 'components/CommentButton'
// import ShareButton from 'components/ShareButton'
// import { NewsProps } from 'types/api'
import styles from "./news.module.sass"
import Image from "next/image"

// type Props = {
//   news: NewsProps
// }

// const News = ({ news }: Props) => {
const News = ({ news }: any) => {
  // const { image, title, softTitle, url } = news.newsData
  const { image, title, softTitle, url } = news
  return (
    <div className={styles.container}>
      {/* <AuthorHeader news={news} /> */}
      <Link href={news.url}>
        {/* <a target="_blank" rel="noopener noreferrer"> */}
        <Image
          className={styles.image}
          src={image}
          alt=""
          width={500}
          height={400}
        />
        <div className={styles.url}>
          {url}
          {/* <LinesEllipsis
              text={url}
              maxLine="2"
              ellipsis="..."
              trimRight
              basedOn="letters"
            /> */}
        </div>
        <div className={styles.textBox}>
          <div className={styles.title}>{title}</div>
          {softTitle && <div className={styles.softTitle}>{softTitle}</div>}
        </div>
        {/* </a> */}
      </Link>

      <div className={styles.footer}>
        {/* <LikeButton news={news} />
        <CommentButton news={news} />
        <ShareButton news={news} /> */}
        footer
      </div>
    </div>
  )
}
export default News
