// import UserImage from "components/UserImage"
// import LogoutButton from "components/LogoutButton"
// import SidebarMail from "components/SidebarMail"
const postsOutline = "/img/posts-outline.png"

import styles from "@/styles/sidebar.module.sass"
import SidebarItem from "./SidebarItem"

// const Sidebar = ({ onClose, setIsContactModalOpen }: any) => {
const Sidebar = ({ onClose }: any) => {
  return (
    <div className={styles.container} onClick={onClose}>
      {/* <UserImage /> */}
      <div className={styles.sidebarItems}>
        <SidebarItem
          icon={postsOutline}
          text={"Todas as notícias"}
          linkTo={"/"}
        />
        <SidebarItem icon={postsOutline} text={"Política"} linkTo={"/"} />
        <SidebarItem icon={postsOutline} text={"Esportes"} linkTo={"/"} />
        <SidebarItem icon={postsOutline} text={"Economia"} linkTo={"/"} />
        <SidebarItem icon={postsOutline} text={"Meio Ambiente"} linkTo={"/"} />

        {/* <SidebarMail setIsContactModalOpen={setIsContactModalOpen} /> */}
        {/* <LogoutButton /> */}
      </div>
      <div style={{ paddingTop: 25 }} />
      {/* <Link
        href={
          "https://play.google.com/store/apps/details?id=com.politik.politiknews"
        }
      >
        <a target="_blank" rel="noopener noreferrer">
          <img src="/img/playstore.svg" width={132} />
        </a>
      </Link>
      <div style={{ paddingTop: 10 }} />
      <Link href={"https://apps.apple.com/us/app/politik-news/id1614006299"}>
        <a target="_blank" rel="noopener noreferrer">
          <img src="/img/appstore.svg" width={132} />
        </a>
      </Link> */}
    </div>
  )
}

export default Sidebar
