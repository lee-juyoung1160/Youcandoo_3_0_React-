import React, {useEffect} from 'react'
import Image from 'next/image'
import WebviewLayout from '../../../../components/webview/Layout'
import {MISSION_GUIDE, FIXED, IMAGE_URL} from '../../../../utils/constant'
import styles from '../../../../styles/page/_app_mission_guide.module.scss'

const ImageWrap = (props) => {
  return (
    <div className={styles.image}>
      <div>{props.children}</div>
    </div>
  )
}

const Inner = (props) => {
  return <div className={styles.inner}>{props.children}</div>
}

const Tip = (props) => {
  return (
    <div style={{padding: '2.78vw 3.89vw 4.44vw'}}>
      <h5>
        <div
          style={{
            width: '6.67vw',
            height: '6.67vw',
            marginRight: '0.56vw',
          }}>
          <Image src={IMAGE_URL.missionTipIcon} alt="" width={27} height={27} />
        </div>
        활용팁
      </h5>
      <p
        style={{
          marginTop: '2.22vw',
          padding: '0 7.22vw',
          color: '#4C5264',
          fontSize: '4.17vw',
        }}>
        {props.children}
      </p>
    </div>
  )
}

export default function MissionGuide() {
  useEffect(() => {
    document.querySelector('body').classList.add('body')
  })
  return (
    <div className={styles.root}>
      <div style={{padding: '8.89vw 0 6.94vw'}}>
        <Inner>
          <div
            style={{
              display: 'flex',
              marginBottom: '7.22vw',
              alignItems: 'center',
            }}>
            <div
              style={{
                width: '13.33vw',
                height: '13.89vw',
                marginRight: '3.89vw',
              }}>
              <Image
                src={IMAGE_URL.missionTitle}
                alt="mission content image"
                width={55}
                height={57}
              />
            </div>
            <h3>
              미션으로 목표를
              <br />더 재밌게 달성해보세요
            </h3>
          </div>
          <div className={styles.paragraph}>
            아침 이불개기, 영양제 챙겨먹기, 주 3회 영어 공부,
            <br />
            1일 운동. 작고 사소한 것부터 늘 마음만 먹었던 다양한 목표들을
            멤버들과 재밌게 달성해보고 싶다면,
            <br />‘<strong>미션</strong>’ 기능을 활용해보세요.
            <br />
            <br />
            일상 속의 소소한 <strong>습관 만들기</strong>부터,
            <br />
            꾸준함이 필요한 <strong>자기계발</strong>까지!
            <br />
            ‘미션’ 기능으로 목표달성부터 멤버 관리까지
            <br />
            쉽고 편리하게 할 수 있어요.
            <br />
            <br />
            <em>그럼 ‘미션’ 기능에 대해 자세하게 알려드릴게요!</em>
          </div>
        </Inner>
      </div>

      <div>
        <article className={styles.paragraph} style={{paddingTop: '21.39vw'}}>
          <Inner>
            <h4>
              01.
              <br />
              미션 등록하기
            </h4>
            <p>
              <strong>[두잇 &gt; 커뮤니티 &gt; 미션등록]</strong> 에서 멤버들과
              함께 실천하고 싶은 목표를 미션으로 등록해주세요.
            </p>
            멤버들이 이해하기 쉽게 미션명을 정하고, 인증 방법과 기간을
            설정해주세요. 인증방법을 자세하게 쓸수록 멤버들이 쉽게 따라할 수
            있어요.
            <ImageWrap>
              <Image
                src={IMAGE_URL.missionCreateContent}
                alt="mission content image"
                width={308}
                height={508}
              />
            </ImageWrap>
          </Inner>
        </article>
        <Tip>
          공약을 활용하면 멤버들에게 더 많은 동기부여가 되고 참여율을 높일 수
          있어요.
        </Tip>

        <article className={styles.paragraph} style={{paddingTop: '29.72vw'}}>
          <Inner>
            <h4>
              02.
              <br />
              미션 관리하기
            </h4>
            <span>멤버들의 인증 현황</span>
            <p>
              <strong style={{color: '#000'}}>[두잇 &gt; 랭킹]</strong>에서
              멤버별 랭킹과 인증 현황을 확인할 수 있어요.
            </p>
            랭킹은 연속 인증 횟수와 누적 인증 횟수에 따라 표시돼요.
            <ImageWrap>
              <Image
                src={IMAGE_URL.missionMemberManageContent}
                alt="mission content image"
                width={308}
                height={508}
              />
            </ImageWrap>
          </Inner>
        </article>

        <article className={styles.paragraph} style={{paddingTop: '18.61vw'}}>
          <Inner>
            <span>알림 발송</span>
            <p>
              <strong>[두잇 &gt; 커뮤니티]</strong> 하단 글쓰기 아이콘을
              클릭하여 공지 게시글을 작성할 수 있어요.
            </p>
            공지글을 작성하면{' '}
            <strong style={{color: '#000'}}>전체 멤버에게 자동으로 알림</strong>
            이 발송돼요. 공지를 통해 두잇 내 소식을 전달하거나 인증 독려를 할 수
            있어요.
            <ImageWrap>
              <Image
                src={IMAGE_URL.missionNotificationContent}
                alt="mission content image"
                width={308}
                height={508}
              />
            </ImageWrap>
          </Inner>
        </article>

        <article className={styles.paragraph} style={{paddingTop: '11.11vw'}}>
          <Inner>
            <span>옐로카드 발송</span>
            <p>
              <strong>
                [두잇 &gt; 두잇설정 &gt; 인증관리 &gt; 옐로카드 관리]
              </strong>
              에서 신고 받은 인증과 옐로카드를 발송한 인증을 한 눈에 볼 수
              있어요..
            </p>
            미션 인증방법과 다르게 인증한 경우 옐로카드를 발송하여 멤버들이
            정확하게 인증할 수 있도록 안내해주세요.{' '}
            <strong style={{color: '#000'}}>
              옐로카드는 인증 게시물 상단 삼선버튼을 클릭하여 발송
            </strong>
            할 수도 있어요.
            <ImageWrap>
              <Image
                src={IMAGE_URL.missionYellowCardContent}
                alt="mission content image"
                width={308}
                height={508}
              />
            </ImageWrap>
          </Inner>
        </article>
        <Tip>
          멤버들의 인증에 ‘댓글’이나 ‘좋아요’로 소통해보세요. 격려와 응원은
          미션을 참여하는 멤버들에게 큰 힘이 돼요.
          <br />
          <br />
          미션으로 더 재밌는 두잇 커뮤니티를 만들어 보세요. 그럼 지금 바로
          미션을 만들어 멤버들과 함께 도전해볼까요?
        </Tip>
      </div>
    </div>
  )
}

MissionGuide.getLayout = function getLayout(page) {
  const props = {headers: {title: MISSION_GUIDE, headerType: FIXED}}
  return <WebviewLayout {...props}>{page}</WebviewLayout>
}
