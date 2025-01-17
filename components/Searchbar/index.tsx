"use client"
import Image from "next/image"
import { useState, useRef } from "react"
import useClickOutside from "@/hooks/useClickOutside"
import styles from "./searchbar.module.sass"
import Link from "next/link"

let mockNews = {
  slug: "news1",
  image:
    "https://s2-g1.glbimg.com/TnPc-VDEQ3ildNS8mkiWDQ78D2s=/0x0:1200x1039/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2024/a/w/vMafBrQ6GQqQyIhXisUw/evolucao-do-pib-ano-a-ano.png",
  title:
    "Da saída da Ford ao recorde de investimentos: o que reacendeu o ânimo das montadoras no Brasil",
  softTitle:
    "Especialistas ouvidos pelo g1 apontam que o sentimento positivo do setor vem na esteira da melhora no cenário de crédito e da cadeia de fornecimento, além de incentivos mais claros à indústria e perspectivas mais positivas para a economia.",
  url: "https://g1.globo.com/carros/noticia/2024/04/13/da-saida-da-ford-ao-recorde-de-investimentos-o-que-reacendeu-o-animo-das-montadoras-no-brasil.ghtml",
}

let mockNews2 = {
  slug: "news2",
  image:
    "https://s2-g1.glbimg.com/YsJnvJc_tInYv8PBgB86RmUSUB0=/0x0:1029x599/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2024/L/W/RrFRaLS5y5uVVuQ0tqbA/1712664572250071.jpg",
  title:
    "Lavagem de dinheiro, Marcola e ausência do Estado: entenda como o PCC se infiltrou nos serviços públicos de São Paulo",
  softTitle:
    "Ministério Público paulista realizou a Operação Fim da Linha na terça-feira (9) e afirma ter evidências de que a facção criminosa estava infiltrada no transporte coletivo da capital.",
  url: "https://g1.globo.com/sp/sao-paulo/noticia/2024/04/13/lavagem-de-dinheiro-marcola-e-ausencia-do-estado-entenda-como-o-pcc-se-infiltrou-nos-servicos-publicos-de-sao-paulo.ghtml",
}

let mockNews3 = {
  slug: "news3",
  image:
    "https://s2-g1.glbimg.com/JF_j2lR0Wm2g6NX2MGA2GnUbA_g=/0x0:792x483/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/7/b/52pzA1T0y8cIBi2GU9KQ/predio-mp-sp.jpg",
  title:
    "Em votação acirrada, promotores e procuradores definem lista tríplice para chefia do MP-SP; nome será escolhido por Tarcísio de Freitas",
  softTitle:
    "Concorreram os procuradores José Carlos Cosenzo, Antônio Carlos da Ponte, Paulo Sérgio de Oliveira e Costa, Tereza Exner e José Carlos Bonilha; 2 mil membros do Ministério Público estadual participaram da votação para procurador-geral de Justiça.",
  url: "https://g1.globo.com/sp/sao-paulo/noticia/2024/04/13/ministerio-publico-de-sp-lista-triplice-procurador-geral-de-justica.ghtml",
}

let mockData = [mockNews, mockNews2, mockNews3]
// let mockData = []

const Searchbar = () => {
  const [searchValue, setSearchValue] = useState("")
  const [display, setDisplay] = useState(false)

  const containerRef = useRef(null)
  useClickOutside(containerRef, () => setDisplay(false))

  return (
    <div className={styles.container} ref={containerRef}>
      <Image
        className={styles.searchIcon}
        src="/img/search.png"
        alt="search"
        width={16}
        height={16}
      />
      <input
        className={styles.input}
        onClick={() => setDisplay(!display)}
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
      />
      {display && searchValue.length > 2 && (
        <div className={styles.options}>
          {mockData.length === 0 && searchValue.length > 2 ? (
            <div style={{ padding: 5 }}>Nenhuma notícia encontrada.</div>
          ) : (
            mockData.slice(0, 5).map((news, index) => (
              <Link href={`/news/${news.slug}`} key={index}>
                <div
                  className={styles.resultAnchor}
                  onClick={() => setDisplay(false)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className={styles.roundImage}
                    width={40}
                    height={40}
                    src={
                      news.image
                      // ? news.image
                      // : newsDefault
                    }
                    alt=""
                  />
                  <div className={styles.text}>{news.title}</div>
                </div>
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  )
}

export default Searchbar
