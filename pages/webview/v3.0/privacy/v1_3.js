import WebviewLayout from '../../../../components/webview/Layout'
import Privacy_v1_3 from '../../../../components/privacy/Privacy_v1_3'
import {PRIVACY, FIXED} from '../../../../utils/constant'
import {useEffect} from 'react'
import styles from '../../../../styles/layout/_webview_terms.module.scss'

export default function V1_3() {
  useEffect(() => {
    document.documentElement.classList.add('html')
  }, [])
  return <Privacy_v1_3 type="webview" style={styles} />
}

V1_3.getLayout = function getLayout(page) {
  const props = {headers: {title: PRIVACY, headerType: FIXED}}
  return <WebviewLayout {...props}>{page}</WebviewLayout>
}
