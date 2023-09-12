import {useEffect} from 'react'
import Privacy_v1_4 from '../../../../components/privacy/Privacy_v1_4'
import styles from '../../../../styles/layout/_view_terms.module.scss'

export default function V1_4() {
  useEffect(() => {
    document.documentElement.classList.add('html')
  }, [])
  return <Privacy_v1_4 type="view" style={styles} />
}

V1_4.getLayout = function getLayout(page) {
  return <>{page}</>
}
