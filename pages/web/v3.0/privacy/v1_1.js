import {useEffect} from 'react'
import WebLayout from '../../../../components/web/Layout'
import Privacy_v1_1 from '../../../../components/privacy/Privacy_v1_1'
import styles from '../../../../styles/layout/_web_terms.module.scss'

export default function V1_1() {
  useEffect(() => {
    document.documentElement.classList.add('html')
  }, [])
  return <Privacy_v1_1 type="web" style={styles} />
}

V1_1.getLayout = function getLayout(page) {
  return <WebLayout>{page}</WebLayout>
}
