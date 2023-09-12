import {useEffect} from 'react'
import WebLayout from '../../../../components/web/Layout'
import PrivacyLatest from '../../../../components/privacy/PrivacyLatest'
import styles from '../../../../styles/layout/_web_terms.module.scss'

export default function Latest() {
  useEffect(() => {
    document.documentElement.classList.add('html')
  }, [])
  return <PrivacyLatest type="web" style={styles} />
}

Latest.getLayout = function getLayout(page) {
  return <WebLayout>{page}</WebLayout>
}
