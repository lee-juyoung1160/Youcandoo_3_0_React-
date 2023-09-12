import styles from '../../styles/components/_app_story_layout.module.scss'

const StoryHead = (props) => {
  return (
    <div className={`${styles.head_wrap} ${styles[props.background]}`}>
      <h3>
        <span>STORY.{props.number}</span>
        <strong>{props.children}</strong>
      </h3>
    </div>
  )
}

export default StoryHead
