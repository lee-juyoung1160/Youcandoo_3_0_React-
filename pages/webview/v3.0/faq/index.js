import React, {useState, useRef, useEffect} from 'react'
import Image from 'next/image'
import WebviewLayout from '../../../../components/webview/Layout'
import {FAQ, FIXED, IMAGE_URL} from '../../../../utils/constant'
import styles from '../../../../styles/page/_app_faq.module.scss'
import NoResult from '../../../../components/webview/NoResult'

export default function Faq({typeData, contentData}) {
  const textInput = useRef(null)
  const [selectedType, setSelectedType] = useState('전체')
  const [items, setItems] = useState(contentData.data.list)
  const [activeTypeIdx, setActiveTypeIdx] = useState(0)
  const [openIdx, setOpenIdx] = useState(-1)

  useEffect(() => {
    document.querySelector('body').classList.add('body')
  })

  const TypeComponent = (props) => {
    return (
      <button
        type="button"
        className={props.index === activeTypeIdx ? styles.active : ''}
        onClick={() => handleClickType(props)}>
        {props.type}
      </button>
    )
  }

  const FaqItem = (props) => {
    return (
      <li
        className={props.index === openIdx ? styles.open : ''}
        onClick={() => handleClickItem(props)}>
        <div className={styles.question}>
          <p>
            <span>{props.item.faq_type}</span>
            {props.item.title}
          </p>
          <Image
            src={IMAGE_URL.faqBtnArrowDown}
            alt="열기"
            width={40}
            height={40}
          />
        </div>
        <div className={styles.answer}>{props.item.contents}</div>
      </li>
    )
  }

  const handleKeyupSearch = (e) => {
    if (e.keyCode === 13 || !textInput.current.value.trim()) {
      setOpenIdx(-1)
      executeSearch(selectedType)
    }
  }

  const handleClickResetSearch = () => {
    textInput.current.value = ''
    setOpenIdx(-1)
    executeSearch(selectedType)
  }

  const handleClickType = (props) => {
    setActiveTypeIdx(props.index)
    setSelectedType(props.type)
    textInput.current.value = ''
    setOpenIdx(-1)
    executeSearch(props.type)
  }

  const handleClickItem = (props) => {
    props.index === openIdx ? setOpenIdx(-1) : setOpenIdx(props.index)
  }

  const executeSearch = (_type) => {
    const inputValue = textInput.current.value.trim()
    switch (_type) {
      case '전체':
        setItems(
          contentData.data.list.filter(
            (item) => item.title.indexOf(inputValue.toUpperCase()) > -1
          )
        )
        break
      default:
        setItems(
          contentData.data.list.filter(
            (item) =>
              item.faq_type === _type &&
              item.title.indexOf(inputValue.toUpperCase()) > -1
          )
        )
        break
    }
  }

  return (
    <section className={styles.faq}>
      <article>
        <div className={styles.faq_search}>
          <input
            type="search"
            ref={textInput}
            onKeyUp={(e) => handleKeyupSearch(e)}
          />
          <button type="button" onClick={() => handleClickResetSearch()}>
            <Image
              src={IMAGE_URL.faqBtnInitSearch}
              alt="검색 초기화"
              width={96}
              height={75}
            />
          </button>
        </div>
        <div className={styles.faq_tab}>
          {typeData.data.list.map((type, index) => (
            <TypeComponent type={type} index={index} key={type} />
          ))}
        </div>
      </article>
      {items && items.length > 0 ? (
        <article>
          <ul className={styles.faq_list}>
            {items.map((item, index) => (
              <FaqItem item={item} index={index} key={index} />
            ))}
          </ul>
        </article>
      ) : (
        <NoResult desc="앗..검색 결과가 없어요" url={IMAGE_URL.emptyFaq} />
      )}
    </section>
  )
}

Faq.getLayout = function getLayout(page) {
  const props = {headers: {title: FAQ, headerType: FIXED}}
  return <WebviewLayout {...props}>{page}</WebviewLayout>
}

export async function getServerSideProps(context) {
  const options = {
    method: 'GET',
  }
  const typeRes = await fetch(process.env.FAQ_TYPE, options)
  const typeData = await typeRes.json()

  const res = await fetch(process.env.FAQS, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({keyword: '', faq_type: typeData.data.list[0]}),
  })
  const contentData = await res.json()

  return {
    props: {
      typeData,
      contentData,
    },
  }
}
