import TermsLatest from '../../../../components/terms/TermsLatest'
import {useEffect} from 'react'
import styles from '../../../../styles/layout/_view_terms.module.scss'

export default function Latest() {
  useEffect(() => {
    document.documentElement.classList.add('html')
  }, [])
  return <TermsLatest type="view" style={styles} />
}

Latest.getLayout = function getLayout(page) {
  return <>{page}</>
}
