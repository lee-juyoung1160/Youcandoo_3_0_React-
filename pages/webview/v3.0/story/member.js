import WebviewLayout from '../../../../components/webview/Layout'
import {STORY_MEMBER, FADE, IMAGE_URL} from '../../../../utils/constant'
import Image from 'next/image'
import styles from '../../../../styles/page/_app_story.module.scss'
import StoryHead from '../../../../components/webview/StoryHead'
import StoryLink from '../../../../components/webview/StoryLink'
import StoryCopy from '../../../../components/webview/StoryCopy'

export default function Member() {
  return (
    <section className={styles.story}>
      <StoryHead number="02" background="story02_bg">
        함께하면 달성할 수 있는 이유!
        <br />
        두잇으로 시작하세요.
      </StoryHead>

      <article className={styles.contents_wrap}>
        <div className={styles.paragraph}>
          <h4>
            작심삼일이 되는 가장 큰 이유가
            <br />
            ‘재미없어서’라는 것 알고 계신가요?
          </h4>
          <p>
            목표설정이론의 연구 결과에 따르면 경쟁을 통해 목표의 수용도와 성과가
            높아진다고 해요. 혼자하는 것보다 사람들과 같이 어울린다면 경쟁과
            동행으로 훨씬 재미를 느낄 수 있어요. 마치 혼자 하는 헬스보다
            여럿이서 함께 춤을 추는 댄스동호회가 더 재밌는 것처럼요. 유캔두
            두잇에는 댄스 동호회 같이 함께 하는 ‘재미’가 곳곳에 숨어있답니다!
          </p>
        </div>

        <div className={styles.paragraph}>
          <h4>따로 또 같이! 동행하는 즐거움</h4>
          <div className={styles.img_right__wrap}>
            <Image
              src={IMAGE_URL.storyMemberContent1}
              alt="story member image"
              layout="responsive"
              width="328"
              height="248"
            />
          </div>
          <p>
            두잇은 단순히 같은 목표를 가진 사람들의 모임을 넘어, 같은 미션을
            함께 수행(do it)하는 커뮤니티에요. 두잇을 만든 리더가 나름의
            노하우를 담아 만든 미션을 멤버들과 함께 실천해봐요.
            <br />
            똑같은 미션을 수행하면서도 저마다 다른 인증을 남기는 걸 보는 재미,
            우리가 같이 하니까 더 끈끈해지는 동지애를 느낄 수 있을 거예요.
          </p>
        </div>
        <div className={styles.paragraph}>
          <h4>
            우리 사이 묘한 긴장감..
            <br />
            선의의 경쟁!
          </h4>
          <div className={styles.img_right__wrap}>
            <Image
              src={IMAGE_URL.storyMemberContent2}
              alt="story member image"
              layout="responsive"
              width="328"
              height="248"
            />
          </div>
          <p>
            눈치 채셨나요? 내가 가입한 두잇 속 랭킹 탭에서 지금 멤버들이 얼마나
            성장을 이어가고 있는지 한눈에 확인할 수 있답니다! 단 하루라도 인증을
            빠지면 훅 떨어지는 랭킹에 순위가 언제 어떻게 뒤바뀔지는 아무도
            모른답니다. 제일 오랫동안 인증을 이어온 최고 1인에게는 대시보드에
            오르는 명예가 따라와요.
            <strong>
              이 구역 1인은 누가 될 것인가! 유쾌한 경쟁에 도전해보세요.
            </strong>
          </p>
        </div>

        <div className={styles.paragraph}>
          <h4>
            우리가 만든 더 큰 성공!
            <br />
            TOP 랭킹 도전
          </h4>
          <div className={styles.img_right__wrap}>
            <Image
              src={IMAGE_URL.storyMemberContent3}
              alt="story member image"
              layout="responsive"
              width="328"
              height="248"
            />
          </div>
          <p>
            유캔두에는 매주 가장 많이 성장한 두잇 랭킹이 발표돼요. TOP 랭킹에
            오른 두잇은 UCD 마일리지 보상을 받는답니다. 이걸 알아버린 이상
            욕심내지 않을 수 없죠? 함께하는 멤버들과 힘을 합쳐 TOP 랭킹에
            도전해보세요. 꾸준히 연속 인증한 멤버가 많을수록 두잇의 열정지수가
            올라가고, 열정지수가 높을수록 랭킹에 오를 확률도 커져요.
          </p>
        </div>
        <div className={styles.paragraph}>
          <p>
            같은 관심사로 만난 우리 멤버들과 함께하는 커뮤니티. 이제 즐겁게 즐길
            준비 되었나요? 소통하기 전에 멤버에게 상처되는 말이 아닌지
            생각해주고 조심해주세요. 우리 함께 서로 존중하는 따뜻한 커뮤니티를
            만들어가요.
          </p>
        </div>
      </article>

      <StoryCopy />

      <div className={styles.foot_wrap}>
        <h3>다른 스토리 보러가기</h3>
        <StoryLink
          number="03"
          link="/webview/v3.0/story/leader"
          background="story03_bg">
          함께하는 에너지를 성장으로
          <br />
          바꾸는 힘! 리더가 되어보세요.
        </StoryLink>
        <StoryLink
          number="01"
          link="/webview/v3.0/story/philosophy"
          background="story01_bg">
          왜 마음먹은 대로 잘 안될까요?
          <br />
          목표 달성의 비밀
        </StoryLink>
      </div>
    </section>
  )
}

Member.getLayout = function getLayout(page) {
  const props = {headers: {title: STORY_MEMBER, headerType: FADE}}
  return <WebviewLayout {...props}>{page}</WebviewLayout>
}
