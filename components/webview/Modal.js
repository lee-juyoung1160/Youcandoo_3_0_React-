import styles from '../../styles/components/_app_modal.module.scss'

const Modal = (props) => {
  return (
    <div className={styles.modal_wrap}>
      <div
        className={`${styles.modal_content} ${styles[props.size]} ${
          styles[props.position]
        } ${styles[props.radius]}`}>
        <div className={styles.modal_body}>
          <h5>{props.title}</h5>
          <p>{props.desc}</p>
          <article>{props.children}</article>
        </div>
      </div>
      <div className={styles.modal_bg}></div>
    </div>
  )
}

export default Modal
