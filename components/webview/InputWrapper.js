import React from 'react'
import styles from '../../styles/components/_app_input.module.scss'

const InputWrapper = (props) => {
  return (
    <div
      className={`${styles.item} ${props.error ? styles.error : ''} ${
        props.password ? styles.password : ''
      }`}>
      <p>{props.title}</p>
      {props.children}
      <span className={styles.message}>{props.message}</span>
    </div>
  )
}
export default InputWrapper

/*
 비밀번호에만 .item & .password 가능할까요? 가능
 유효성 에러메세지 .item & .error
*/
