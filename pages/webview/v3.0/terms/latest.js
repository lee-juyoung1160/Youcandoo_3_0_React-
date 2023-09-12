import WebviewLayout from '../../../../components/webview/Layout'
import TermsLatest from '../../../../components/terms/TermsLatest'
import {TERMS, FIXED} from '../../../../utils/constant'
import styles from '../../../../styles/layout/_webview_terms.module.scss'
import {useEffect} from 'react'

export default function Latest() {
  useEffect(() => {
    document.documentElement.classList.add('html')
  }, [])
  return <TermsLatest type="webview" style={styles} />
}

Latest.getLayout = function getLayout(page) {
  const props = {headers: {title: TERMS, headerType: FIXED}}
  return <WebviewLayout {...props}>{page}</WebviewLayout>
}
