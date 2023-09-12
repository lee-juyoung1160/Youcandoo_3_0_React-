import {useEffect} from 'react'
import Privacy_v1_0 from '../../../../components/privacy/Privacy_v1_0'
import styles from '../../../../styles/layout/_view_terms.module.scss'

export default function V1_0() {
  useEffect(() => {
    document.documentElement.classList.add('html')
  }, [])
  return <Privacy_v1_0 type="view" style={styles} />
}

V1_0.getLayout = function getLayout(page) {
  return <>{page}</>
}
