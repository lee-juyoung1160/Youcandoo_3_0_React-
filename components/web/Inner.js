import React from 'react'
import styles from '../../styles/components/_web_inner.module.scss'

function Inner(props) {
  return <div className={styles.inner}>{props.children}</div>
}

export default Inner
