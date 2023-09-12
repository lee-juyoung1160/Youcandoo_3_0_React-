import React, {useEffect} from 'react'
import WebviewLayout from '../../../../components/webview/Layout'
import {DOIT_GUIDE, FIXED} from '../../../../utils/constant'
import styles from '../../../../styles/page/_app_doit_guide.module.scss'

export default function Doit() {
  useEffect(() => {
    document.querySelector('body').classList.add('body')
  })
  return (
    <div className={styles.root}>
      <article>
        <div>
          <h3>
            목표를 도전하는 즐거움이 배가 될 수<br />
            있도록 두잇에 대해 알아볼까요?
          </h3>

          <div>
            <h4>
              01.
              <br />
              두잇으로 무엇을 할 수 있나요?
            </h4>
            <p>
              같은 목표를 가진 멤버들과 함께 미션을 인증하며 목표를 달성해 나갈
              수 있어요.
            </p>
            <p>
              열정지수는 멤버들의 인증과 커뮤니티 활동에 따라 높아져요. 멤버들과
              힘을 합쳐 우리 두잇의 열정을 뽐내보아요! 열정지수가 높아지면 두잇
              랭킹에 올라 UCD 마일리지 보상을 받을 수 있어요.
            </p>
          </div>

          <div>
            <h4>
              02.
              <br />
              어떻게 하면 두잇을 즐길 수 있나요?
            </h4>
            <p>
              <strong>“멤버들과 두잇의 열정지수를 채워보세요”</strong>
              <span>
                열정지수는 멤버들의 인증과 커뮤니티 활동에 따라 높아져요.
                <br />
                멤버들과 힘을 합쳐 우리 두잇의 열정을 뽐내보아요! 열정지수가
                높아지면 두잇 랭킹에 올라 UCD 마일리지 보상을 받을 수 있어요.
              </span>
              <strong>“멤버들의 인증 현황과 랭킹을 확인해보세요”</strong>
              <span>
                <em>[두잇 &gt; 랭킹]</em>에서 우리 두잇에서 가장 성실하게
                인증하는 멤버는 누구인지, 나는 두잇에 얼마나 기여하고 있는지
                확인해보세요.
                <br />
                목표 달성을 위한 확실한 동기부여가 될 거예요!
              </span>
              <strong>“우리들만의 커뮤니티를 활용해보세요”</strong>
              <span>
                <em>[두잇 &gt; 커뮤니티]</em>에서 멤버들의 인증을 응원하거나
                다양한 정보를 주고 받으면 더욱 재밌게 목표에 도전할 수 있어요.
              </span>
            </p>
            <p>
              열정지수는 멤버들의 인증과 커뮤니티 활동에 따라 높아져요. 멤버들과
              힘을 합쳐 우리 두잇의 열정을 뽐내보아요! 열정지수가 높아지면 두잇
              랭킹에 올라 UCD 마일리지 보상을 받을 수 있어요.
            </p>
          </div>

          <div>
            <h4>
              03.
              <br />
              두잇할 때 이것만은 꼭 지켜주세요!
            </h4>
            <p>
              - 미션 인증 시, 인증방법에 맞춰 인증해주세요. 리더가 설정한
              인증방법과 다를 경우 옐로카드가 발송될 수 있어요.
            </p>
            <p>
              - 리더의 운영 방식에 맞지 않는 활동을 할 경우 강퇴될 수 있어요.
            </p>
            <p>
              - 다른 멤버에게 불편을 초래하는 글/인증은 지양해주세요. 커뮤니티
              가이드라인을 준수하지 않을 경우 서비스 운영 정책에 의해 제재 될 수
              있어요.
            </p>
          </div>
        </div>
      </article>
    </div>
  )
}

Doit.getLayout = function getLayout(page) {
  const props = {headers: {title: DOIT_GUIDE, headerType: FIXED}}
  return <WebviewLayout {...props}>{page}</WebviewLayout>
}
