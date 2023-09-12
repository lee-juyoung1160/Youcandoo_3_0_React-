import {useEffect} from 'react'
import Privacy_v1_3 from '../../../../components/privacy/Privacy_v1_3'
import styles from '../../../../styles/layout/_view_terms.module.scss'

export default function V1_3() {
  useEffect(() => {
    document.documentElement.classList.add('html')
  }, [])
  return <Privacy_v1_3 type="view" style={styles} />
}

V1_3.getLayout = function getLayout(page) {
  return <>{page}</>
}
