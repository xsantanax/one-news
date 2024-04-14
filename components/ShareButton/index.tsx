"use client"
import { useState } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { WhatsappIcon, WhatsappShareButton } from "react-share"
import Image from "next/image"
import { NewsProps } from "@/types/api"
import styles from "./shareButton.module.sass"
import Modal from "../Modal"

const ShareButton = ({ news }: { news: NewsProps }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const url = process.env.NEXT_PUBLIC_SITE_URL + "news/" + news.slug

  const modalContent = (
    <>
      <div className={styles.dialogContentWrap}>
        <div className={styles.shareItem}>
          <WhatsappShareButton url={url}>
            <WhatsappIcon size={40} round={true} />
          </WhatsappShareButton>
        </div>

        <CopyToClipboard text={url} onCopy={() => setIsCopied(true)}>
          <div className={styles.shareItem}>
            <div className={styles.linkWrap}>
              <Image src={"/img/link.png"} width={18} height={18} alt="" />
            </div>
          </div>
        </CopyToClipboard>
      </div>

      {isCopied && (
        <div className={styles.copySuccess}>Link copiado com sucesso.</div>
      )}
    </>
  )
  return (
    <>
      <div
        className={styles.newsFooterRightItem}
        onClick={() => setIsModalOpen(true)}
      >
        <div className={styles.footerText}>Compartilhar</div>
        <Image
          className={styles.footerIcon}
          src={"/img/share-2.svg"}
          width={41}
          height={41}
          alt="share"
        />
      </div>
      {isModalOpen && (
        <Modal
          onClose={() => {
            setIsModalOpen(false)
            setIsCopied(false)
          }}
          title="Compartilhar"
          content={modalContent}
        />
      )}
    </>
  )
}

export default ShareButton
