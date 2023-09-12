import WebviewLayout from '../../../../components/webview/Layout'
import Privacy_v1_0 from '../../../../components/privacy/Privacy_v1_0'
import {PRIVACY, FIXED} from '../../../../utils/constant'
import {useEffect} from 'react'
import styles from '../../../../styles/layout/_webview_terms.module.scss'

export default function V1_0() {
  useEffect(() => {
    document.documentElement.classList.add('html')
  }, [])
  return <Privacy_v1_0 type="webview" style={styles} />
}

V1_0.getLayout = function getLayout(page) {
  const props = {headers: {title: PRIVACY, headerType: FIXED}}
  return <WebviewLayout {...props}>{page}</WebviewLayout>
}
