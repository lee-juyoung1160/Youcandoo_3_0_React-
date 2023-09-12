import styles from '../../styles/components/_app_button.module.scss'

const Button = (props) => {
  return (
    <button
      onClick={props.clickHandler}
      type={props.type}
      className={`${styles[props.color]} 
      ${styles[props.radius]} ${styles[props.size]}`}>
      {props.children}
    </button>
  )
}

export default Button
