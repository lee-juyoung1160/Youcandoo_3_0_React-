import {useEffect} from 'react'
import PrivacyLatest from '../../../../components/privacy/PrivacyLatest'
import styles from '../../../../styles/layout/_view_terms.module.scss'

export default function Latest() {
  useEffect(() => {
    document.documentElement.classList.add('html')
  }, [])
  return <PrivacyLatest type="view" style={styles} />
}

Latest.getLayout = function getLayout(page) {
  return <>{page}</>
}
