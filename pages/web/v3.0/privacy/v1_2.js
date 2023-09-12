import {useEffect} from 'react'
import WebLayout from '../../../../components/web/Layout'
import Privacy_v1_2 from '../../../../components/privacy/Privacy_v1_2'
import styles from '../../../../styles/layout/_web_terms.module.scss'

export default function V1_2() {
  useEffect(() => {
    document.documentElement.classList.add('html')
  }, [])
  return <Privacy_v1_2 type="web" style={styles} />
}

V1_2.getLayout = function getLayout(page) {
  return <WebLayout>{page}</WebLayout>
}
