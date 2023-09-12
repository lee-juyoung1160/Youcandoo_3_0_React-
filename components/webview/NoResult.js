import React from 'react'
import Image from 'next/image'
import styles from '../../styles/components/_app_no_result.module.scss'

function NoResult(props) {
  return (
    <article className={styles.result_list}>
      <Image src={props.url} alt="검색 결과 없음" width={120} height={120} />
      <p>{props.children}</p>
      <span>{props.desc}</span>
    </article>
  )
}

export default NoResult
