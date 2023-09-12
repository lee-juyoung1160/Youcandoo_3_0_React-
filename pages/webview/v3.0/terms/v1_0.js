import WebviewLayout from '../../../../components/webview/Layout'
import Terms_v1_0 from '../../../../components/terms/Terms_v1_0'
import {TERMS, FIXED} from '../../../../utils/constant'
import styles from '../../../../styles/layout/_webview_terms.module.scss'
import {useEffect} from 'react'

export default function V1_0() {
  useEffect(() => {
    document.documentElement.classList.add('html')
  }, [])
  return <Terms_v1_0 type="webview" style={styles} />
}

V1_0.getLayout = function getLayout(page) {
  const props = {headers: {title: TERMS, headerType: FIXED}}
  return <WebviewLayout {...props}>{page}</WebviewLayout>
}
