import styles from '../../styles/components/_app_story_layout.module.scss'

const StoryLink = (props) => {
  return (
    <div className={`${styles.banner_wrap} ${styles[props.background]}`}>
      <a href={props.link}>페이지 이동</a>
      <div>
        <span>STORY.{props.number}</span>
        <p>{props.children}</p>
      </div>
    </div>
  )
}

export default StoryLink
