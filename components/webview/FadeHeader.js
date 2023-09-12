import React, {useEffect, useState} from 'react'
import Router from 'next/router'
import styles from '../../styles/layout/_app_header.module.scss'
import {osType, closeWebviewIos, closeWebviewAos} from '../../utils/call_native'

function FadeHeader({title}) {
  const [osName, setOsName] = useState('')
  const [fixed, setFixed] = useState('')
  let lastScrollTop = 0
  const toggleFixed = () => {
    const scrollTop = window.pageYOffset
    scrollTop < 1 || scrollTop > lastScrollTop
      ? setFixed('')
      : setFixed(styles.fixed)

    lastScrollTop = scrollTop
  }

  const handleClickBtnBack = () => {
    switch (osName) {
      case 'aos':
        closeWebviewAos()
        break
      case 'ios':
        closeWebviewIos()
        break
      default:
        Router.back()
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleFixed)
    setOsName(osType())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <header
      className={`${styles.header} ${fixed} ${styles.fade} ${styles.only_m}`}>
      <button onClick={handleClickBtnBack} type="button">
        뒤로가기
      </button>
      <h2>{title}</h2>
    </header>
  )
}

export default FadeHeader
