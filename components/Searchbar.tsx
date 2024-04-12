"use client"
// import Link from 'next/link'
import { useState, useRef } from "react"

// import useClickOutside from 'hooks/useClickOutside'
// import { usePoliticians } from 'hooks/usePoliticians'
import styles from "@/styles/searchbar.module.sass"
import Image from "next/image"

// const politicianDefault = '/img/politician-default.png'

const Searchbar = () => {
  const [searchValue, setSearchValue] = useState("")
  const [display, setDisplay] = useState(false)
  //   const { politicians } = usePoliticians()

  //   const filteredPoliticians = politicians.filter(({ politicianData }) =>
  //     politicianData.name.toLowerCase().includes(searchValue.toLowerCase())
  //   )

  const containerRef = useRef(null)
  //   useClickOutside(containerRef, () => setDisplay(false))

  return (
    <div className={styles.container} ref={containerRef}>
      <Image
        className={styles.searchIcon}
        src="/img/search.png"
        alt=""
        width={16}
        height={16}
      />
      <input
        className={styles.input}
        onClick={() => setDisplay(!display)}
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
      />
      {display && (
        <div className={styles.options}>
          {/* {filteredPoliticians.length === 0 && searchValue.length > 2 ? (
            <div style={{ padding: 5 }}>
              Ainda não há nenhuma notícia envolvendo esse político.{" "}
              <Link
                href={{
                  pathname: "/create-politician",
                  query: { name: searchValue },
                }}
              >
                <a style={{ color: "#36f" }}> Criar novo político</a>
              </Link>
            </div>
          ) : (
            filteredPoliticians.slice(0, 5).map((politician, index) => (
              <Link
                href={`/politician/${politician.politicianData.slug}`}
                key={index}
              >
                <S.ResultAnchor onClick={() => setDisplay(false)}>
                  <S.RoundImage
                    src={
                      politician.politicianData.image
                        ? politician.politicianData.image
                        : politicianDefault
                    }
                    alt=""
                  />
                  <S.Text>{politician.politicianData.name}</S.Text>
                </S.ResultAnchor>
              </Link>
            ))
          )} */}
        </div>
      )}
    </div>
  )
}

export default Searchbar
