import WebviewLayout from '../../../../components/webview/Layout'
import {STORY_PHILOSOPHY, FADE, IMAGE_URL} from '../../../../utils/constant'
import Image from 'next/image'
import StoryHead from '../../../../components/webview/StoryHead'
import StoryLink from '../../../../components/webview/StoryLink'
import styles from '../../../../styles/page/_app_story.module.scss'
import StoryCopy from '../../../../components/webview/StoryCopy'

export default function Philosophy() {
  return (
    <section className={styles.story}>
      <StoryHead number="01" background="story01_bg">
        왜 마음먹은데로
        <br />잘 안될까요?
        <br />
        목표달성의 비밀
      </StoryHead>

      <article className={styles.contents_wrap}>
        <div className={styles.paragraph}>
          <h4>
            새해 결심, 혹시 이번에도
            <br />
            작심삼일 이었나요?
          </h4>
          <div className={styles.img_center__wrap}>
            <Image
              src={IMAGE_URL.storyPhilosophyContent1}
              alt="story philosophy image"
              layout="responsive"
              width="592"
              height="592"
            />
          </div>
          <p>
            어떻게 하면 처음 결심한 것을 포기하지 않고 끝까지 이룰 수 있을까요?
            의지가 엄청 높지 않은 사람도 누구나 마음 먹은대로 달성할 수 있는
            방법은 없을까요?
            <br />
            <br />
            야나두 동기부여연구소는 오랜 기간 고민하며 목표 달성과 중도 포기의
            차이는 ‘습관’에서 나온다고 생각했어요. 그리고 전 국민이 영어 목표를
            달성할 수 있도록 영어 공부를 습관화하는 방법을 연구한 끝에 야나두의
            ‘10분 강의’, 완강률을 2배 높인 ‘장학금 제도’, 출석률을 3배 높인
            ‘보이스케어’를 탄생시켰죠.
            <br />
            <br />이 3가지 시스템으로 나날이 성장하는 야나두 수강생들을 보면서
            우리는 확신했어요. 사람들이 매년 같은 다짐을 하고 금방 실패하는 건
            결코 개개인이 나약해서가 아니라는 것을요.
          </p>
        </div>

        <div className={styles.paragraph}>
          <h4>
            내 의지 무죄! 사실 내가
            <br />
            성장 중인 걸 몰라서 포기했을 뿐
          </h4>
          <p>
            그럼 우리는 왜 쉽게 포기하게 될까요? 게임에서 퀘스트를 깰 때마다
            경험치가 올라가듯 한 걸음 내딛을 때마다 한 뼘씩 자란 걸 눈으로 볼 수
            있다면 좋을텐데요. 현실은 나름 열심히 한다고 하는데도 계속 제자리인
            것 같아 보람도 없고, 재미도 못 느끼죠.
          </p>
          <div className={styles.img_center__wrap}>
            <Image
              src={IMAGE_URL.storyPhilosophyContent2}
              alt="story philosophy image"
              layout="responsive"
              width="298"
              height="125"
            />
          </div>
          <p>
            바로 성장은 계단 모양이기 때문이에요. ‘슬럼프’라고도 하는 이 평탄한
            구간(A)을 견뎌야만 폭발적인 성장을 경험할 수 있는데요. 야나두 150만
            회원의 학습 데이터를 분석해보니 수많은 사람들이 이 지루한 ‘제자리’
            구간에서 포기할 때, 그저 꾸준히 학습하면서 이 시기를 무던하게
            흘려보낸 사람들이 결국 목표를 달성한다는 점을 발견했어요.
            <br />
            <br />
            <strong>
              이들의 달성 패턴을 찾아 끊임없이 실험하고 검증하면서 평범한
              사람들도 누구나, 영어뿐 아니라 그 어떤 목표라도 달성할 수 있는
              시스템, 마침내 유캔두가 탄생했답니다!
            </strong>{' '}
            (2019년부터 중간 중간 함께 해주신 베타 테스터 여러분, 보고 계신가요?
            우리가 같이 만들어낸 결실이에요!)
          </p>
        </div>

        <div className={styles.paragraph}>
          <h4>
            유캔두가 찾은 비결,
            <br />
            혼자보다 ‘함께’ 해요!
          </h4>
          <p>
            수년 간의 연구 끝에 찾아낸, 이 ‘제자리’ 구간을 견디는 가장 쉬운
            방법은 우리가 함께 하는 거예요! 저마다 다른 성장 그래프를 가졌지만
            같은 목표를 가진 사람들이 한데 모여 서로 이끌어주고 밀어주니
            포기하지 않고 성공할 확률이 확 높아져요.
          </p>
          <div className={styles.img_center__wrap}>
            <Image
              src={IMAGE_URL.storyPhilosophyContent3}
              alt="story philosophy image"
              layout="responsive"
              width="264"
              height="264"
            />
          </div>
          <p>
            혼자서만 제자리를 지지부진 할 때면 “나 제대로 하고 있는 것 맞나”
            조급해지고, 또다른 방법을 찾다가 그동안의 성장을 원점으로 돌려놓고
            또다시 그래프의 시작점에 서길 반복하기 쉽죠. 유캔두에서는 나보다
            앞서 목표를 달성한 리더가 만든 두잇을 고르고, 두잇 안에서 같은
            미션을 반복하는 멤버들이 성장하는 모습을 직접 눈으로 확인할 수
            있으니 믿음을 가지고 내 성장에 더욱 집중할 수 있어요. 실제로 같은
            미션을 두고도 혼자할 때보다 함께 도전할 때 목표 달성에 성공한 사람이
            9.67%P 증가했답니다.
            <br />
            <br />
            <strong>
              혹시 올해 목표도 작심삼일에 그쳐버린 후 ‘내가 그렇지 뭐..’ 하고
              단념하진 않으셨나요? 아직 우리에겐 달성할 수 있는 시간이 남아
              있어요! 두잇에서 함께 성장 그래프를 이어가요 :-)
            </strong>
          </p>
        </div>
      </article>

      <StoryCopy />

      <div className={styles.foot_wrap}>
        <h3>다른 스토리 보러가기</h3>
        <StoryLink
          number="02"
          link="/webview/v3.0/story/member"
          background="story02_bg">
          함께하면 달성할 수 있는 이유!
          <br />
          두잇으로 시작하세요.
        </StoryLink>
        <StoryLink
          number="03"
          link="/webview/v3.0/story/leader"
          background="story03_bg">
          함께하는 에너지를 성장으로
          <br />
          바꾸는 힘! 리더가 되어보세요.
        </StoryLink>
      </div>
    </section>
  )
}

Philosophy.getLayout = function getLayout(page) {
  const props = {headers: {title: STORY_PHILOSOPHY, headerType: FADE}}
  return <WebviewLayout {...props}>{page}</WebviewLayout>
}
