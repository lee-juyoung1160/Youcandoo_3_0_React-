import WebviewLayout from '../../../../components/webview/Layout'
import {STORY_LEADER, FADE, IMAGE_URL} from '../../../../utils/constant'
import styles from '../../../../styles/page/_app_story.module.scss'
import StoryHead from '../../../../components/webview/StoryHead'
import StoryLink from '../../../../components/webview/StoryLink'
import Image from 'next/image'
import StoryCopy from '../../../../components/webview/StoryCopy'

export default function Leader() {
  return (
    <section className={styles.story}>
      <StoryHead number="04" background="story04_bg">
        함께하는 에너지를
        <br />
        성장으로 바꾸는 힘!
        <br />
        리더가 되어보세요.
      </StoryHead>

      <article className={styles.contents_wrap}>
        <div className={styles.paragraph}>
          <h4>
            결심은 누구나 할 수 있지만,
            <br />
            결실은 아무나 맺을 수 없기에
          </h4>
          <div className={styles.img_right__wrap}>
            <Image
              src={IMAGE_URL.storyLeaderContent1}
              alt="story leader image"
              layout="responsive"
              width="328"
              height="248"
            />
          </div>
          <p>
            우리의 ‘리더’는 멤버들의 성장을 이끄는 페이스메이커로, ‘같이’의 힘을
            아는 사람들이에요. 달성 경험을 한 사람들인 만큼, 해냈다는 짜릿함을
            알고 새로운 도전을 탐구하는 사람들이죠. 그렇기 때문에 ‘리더’는 같은
            목표를 향해 달리는 멤버들의 성장과 목표 달성을 도울 수 있는 잠재력을
            갖추고 있어요.
            <br />
            <br />
            <strong>
              당신은, 이미
              <br />
              충분한 잠재력을 갖고 있는 ‘리더’랍니다!
            </strong>
          </p>
        </div>
        <div className={styles.paragraph}>
          <h4>
            나의 에너지가
            <br />
            누군가에겐 성장하는 힘으로
          </h4>
          <div className={styles.img_right__wrap}>
            <Image
              src={IMAGE_URL.storyLeaderContent2}
              alt="story leader image"
              layout="responsive"
              width="328"
              height="248"
            />
          </div>
          <p>
            당신이 해내고자 하는 일이 함께하는 멤버들의 목표가 된다면 어떤 일이
            일어날까요? ‘함께’ 도전하는 사람들의 에너지가 모이면 결국, ‘꾸준히
            해내는 성장 습관’으로 이어져요.
            <br />
            <br />
            ‘두잇’으로 목표를 만들고, ‘미션’으로 목표를 달성하는 방법을
            제안해보세요.
            <br />
            당신이 만든 ‘두잇’을 사람들이 즐겁게 참여하고, 당신이 설정한
            ‘미션’이 새로운 동기를 부여해요. 이렇게 당신이 좋아서 하는 일이
            결국, 함께하는 멤버에겐 새로운 도전이자 희망이 되죠.
            <br />
            <br />
            <strong>
              우리는 ‘에너지 레벨’이 남다른 당신과 함께 성장하고 세상에 선한
              영향력을 펼치고 싶어요.
            </strong>
          </p>
        </div>
        <div className={styles.paragraph}>
          <h4>
            내 인생의 새로운 변화,
            <br />
            그리고 레벨이 다른 성장의 시작
          </h4>
          <div className={styles.img_right__wrap}>
            <Image
              src={IMAGE_URL.storyLeaderContent3}
              alt="story leader image"
              layout="responsive"
              width="328"
              height="248"
            />
          </div>
          <p>
            어떤 ‘리더’가 되고 싶나요?
            <br /> 어떤 새로운 기회를 꿈꾸나요.
            <br />
            당신은 멤버들과 함께 성장하고, 더 나은 변화를 만드는 데에만
            집중하세요.
            <br />
            ‘리더’로서 당신의 위대함이 충분히 발휘될 수 있는 더 쉽고 더 나은
            방법은 무엇인지 고민은 우리가 할게요.
            <br />
            <br />
            당신의 위대함은 누군가의 잠재력을 깨울 수 있는 다른 에너지에서
            시작되며, 그 에너지를 활용하는 건 전적으로 당신에게 달려있어요.
            <br />
            <br />
            <strong>
              당신의 남다른 에너지로 우리와 함께
              <br />
              멤버들의 성장과 변화를 가져올 준비, 되셨나요?
            </strong>
          </p>
        </div>
      </article>

      <StoryCopy />

      <div className={styles.foot_wrap}>
        <h3>다른 스토리 보러가기</h3>
        <StoryLink
          number="01"
          link="/webview/v3.0/story/philosophy"
          background="story01_bg">
          왜 마음먹은 대로 잘 안될까요?
          <br />
          목표 달성의 비밀
        </StoryLink>
        <StoryLink
          number="02"
          link="/webview/v3.0/story/member"
          background="story02_bg">
          함께하면 달성할 수 있는 이유!
          <br />
          두잇으로 시작하세요.
        </StoryLink>
      </div>
    </section>
  )
}

Leader.getLayout = function getLayout(page) {
  const props = {headers: {title: STORY_LEADER, headerType: FADE}}
  return <WebviewLayout {...props}>{page}</WebviewLayout>
}
