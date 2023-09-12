import {useEffect} from 'react'
import WebLayout from '../../../../components/web/Layout'
import Terms_v1_0 from '../../../../components/terms/Terms_v1_0'
import styles from '../../../../styles/layout/_web_terms.module.scss'

export default function V1_0() {
  useEffect(() => {
    document.documentElement.classList.add('html')
  }, [])
  return <Terms_v1_0 type="web" style={styles} />
}

V1_0.getLayout = function getLayout(page) {
  return <WebLayout>{page}</WebLayout>
}
