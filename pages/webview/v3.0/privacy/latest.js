import WebviewLayout from '../../../../components/webview/Layout'
import PrivacyLatest from '../../../../components/privacy/PrivacyLatest'
import {PRIVACY, FIXED} from '../../../../utils/constant'
import {useEffect} from 'react'
import styles from '../../../../styles/layout/_webview_terms.module.scss'

export default function Latest() {
  useEffect(() => {
    document.documentElement.classList.add('html')
  }, [])
  return <PrivacyLatest type="webview" style={styles} />
}

Latest.getLayout = function getLayout(page) {
  const props = {headers: {title: PRIVACY, headerType: FIXED}}
  return <WebviewLayout {...props}>{page}</WebviewLayout>
}
