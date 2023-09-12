import {useEffect, useState} from 'react'
import Router from 'next/router'
import styles from '../../styles/layout/_app_header.module.scss'
import {
  osType,
  historyBackWebviewIos,
  historyBackWebviewAos,
} from '../../utils/call_native'

function FixedHeader({title}) {
  const [osName, setOsName] = useState('')

  useEffect(() => {
    setOsName(osType())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleClickBtnBack = () => {
    switch (osName) {
      case 'aos':
        historyBackWebviewAos()
        break
      case 'ios':
        historyBackWebviewIos()
        break
      default:
        Router.back()
    }
  }

  return (
    <header className={`${styles.header} ${styles.only_m}`}>
      <button onClick={handleClickBtnBack} type="button">
        뒤로가기
      </button>
      <h2>{title}</h2>
    </header>
  )
}

export default FixedHeader
