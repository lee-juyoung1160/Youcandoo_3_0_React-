import {useEffect} from 'react'
import WebLayout from '../../../../components/web/Layout'
import TermsLatest from '../../../../components/terms/TermsLatest'
import styles from '../../../../styles/layout/_web_terms.module.scss'

export default function Latest() {
  useEffect(() => {
    document.documentElement.classList.add('html')
  }, [])
  return <TermsLatest type="web" style={styles} />
}

Latest.getLayout = function getLayout(page) {
  return <WebLayout>{page}</WebLayout>
}
