import React, {useState, useEffect, useRef} from 'react'
import Image from 'next/image'
import WebLayout from '../../../components/web/Layout'
import Inner from '../../../components/web/Inner'
import styles from '../../../styles/layout/_web_main.module.scss'
import Router from 'next/router'
import CountUp from 'react-countup'
import {numberWithCommas} from '../../../utils/utils'

function Main() {
  let slideInterval
  let isActiveDataArticle = false
  const togetherArticle = useRef(null)
  const togetherArticleMobileVideo1 = useRef(null)
  const togetherArticleMobileVideo2 = useRef(null)
  const dataArticle = useRef(null)
  const dataArticleVideo1 = useRef(null)
  const dataArticleVideo2 = useRef(null)
  const leaderArticle = useRef(null)
  const leaderArticleVideo = useRef(null)

  const [activeDataArticleIndex, setActiveDataArticleIndex] = useState(0)
  const [activeBtnAppDown, setActiveBtnAppDown] = useState('')
  const [onBtnAppDown, setOnBtnAppDown] = useState('')
  const [isCountUp, setIsCountUp] = useState(false)
  const [
    togetherArticleMobileWrapperActive,
    setTogetherArticleMobileWrapperActive,
  ] = useState('')

  const handleScroll = () => {
    const pageYOffset = window.pageYOffset
    const marginTop = window.innerHeight / 1.8

    if (pageYOffset >= togetherArticle.current.offsetTop - marginTop) {
      togetherArticleMobileVideo1.current.play()
    } else {
      setTogetherArticleMobileWrapperActive('')
      togetherArticleMobileVideo1.current.pause()
      togetherArticleMobileVideo2.current.pause()
    }

    if (pageYOffset >= dataArticle.current.offsetTop - marginTop) {
      setIsCountUp(true)
      if (!isActiveDataArticle) {
        isActiveDataArticle = true
        dataArticleVideo1.current.play()
        dataArticleVideo2.current.play()
        let idx = 0
        slideInterval = setInterval(() => {
          setActiveDataArticleIndex(idx)
          idx < 2 ? idx++ : (idx = 0)
        }, 3000)
      }
    } else {
      setIsCountUp(false)
      isActiveDataArticle = false
      dataArticleVideo1.current.pause()
      dataArticleVideo2.current.pause()
      clearInterval(slideInterval)
    }

    if (pageYOffset >= leaderArticle.current.offsetTop - marginTop) {
      leaderArticleVideo.current.play()
    } else {
      leaderArticleVideo.current.pause()
    }

    pageYOffset >= 35
      ? setActiveBtnAppDown(styles.active)
      : setActiveBtnAppDown('')

    pageYOffset >= 2837 ? setOnBtnAppDown(styles.on) : setOnBtnAppDown('')
  }

  useEffect(() => {
    let isMounted = true
    document.documentElement.classList.add('html')
    window.addEventListener('scroll', () => {
      if (isMounted) handleScroll()
    })

    return () => {
      clearInterval(slideInterval)
      isMounted = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <React.Fragment>
      <article className={styles.main_article}>
        <div className={styles.p_main__animaions_wrapper}>
          <div className={styles.p_main__animations_wave}></div>
          <div className={styles.p_main__animations_wave}></div>
        </div>
        <Inner>
          <div className={styles.wrapper}>
            <div className={styles.p_main__text_wrapper}>
              <h5>
                오늘부터 꾸준한 하루 10분,
                <br /> 1년 후 어떤 변화가 일어날까요?
              </h5>
              <h2>
                함께 성장하는
                <br />{' '}
                <strong className={styles.mint_color}>
                  목표달성 커뮤니티
                </strong>{' '}
                유캔두
              </h2>
              <ul className={styles.p_main__store_wrapper}>
                <li>
                  <a
                    onClick={() =>
                      Router.push(
                        'https://play.google.com/store/apps/details?id=com.yanadoo.youcandoo'
                      )
                    }>
                    <Image
                      src="https://youcandoo.yanadoocdn.com/v3/web/assets/images/web_btn_down_google.png"
                      alt="구글 플레이 다운로드 이동"
                      width="181"
                      height="54"
                    />
                  </a>
                </li>
                <li>
                  <a
                    onClick={() =>
                      Router.push('https://apps.apple.com/kr/app/id1496745851')
                    }>
                    <Image
                      src="https://youcandoo.yanadoocdn.com/v3/web/assets/images/web_btn_down_apple.png"
                      alt="앱 스토어 다운로드 이동"
                      width="181"
                      height="54s"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.p_main__img_wrapper}>
              <Image
                src="https://youcandoo.yanadoocdn.com/v3/web/assets/images/web_main_phone.png"
                alt="메인 목업 폰 이미지"
                width={368}
                height={724}
              />
            </div>
          </div>
        </Inner>
      </article>
      <article className={styles.together_article} ref={togetherArticle}>
        <Inner>
          <h2 className={styles.p_main__title}>
            같은 목표를 가진
            <br />
            <strong>
              <span className={styles.common_line_text}>리더와 멤버</span>
            </strong>
            가 <span className={styles.bold_text}>함께</span>해요.
          </h2>
          <h5>서로 응원하고 독려하면 끝까지 해낼 수 있어요.</h5>

          <ul className={styles.p_video__wraaper}>
            <li>
              <video
                className={styles.p_video__01}
                poster="https://youcandoo.yanadoocdn.com/v3/web/assets/images/web_together01.png"
                src="https://youcandoo.yanadoocdn.com/v3/web/assets/images/web_together01.mp4"
                muted
                playsInline
                loop
                autoPlay></video>
            </li>
            <li>
              <video
                className={styles.p_video__02}
                poster="https://youcandoo.yanadoocdn.com/v3/web/assets/images/web_together02.png"
                src="https://youcandoo.yanadoocdn.com/v3/web/assets/images/web_together02.mp4"
                muted
                playsInline
                loop
                autoPlay></video>
            </li>
          </ul>

          <ul
            className={`${styles.p_video__wraaper} ${styles.m_video__wraaper} ${togetherArticleMobileWrapperActive}`}>
            <li>
              <video
                ref={togetherArticleMobileVideo1}
                onEnded={() => {
                  setTogetherArticleMobileWrapperActive(`${styles.active}`)
                  togetherArticleMobileVideo2.current.play()
                }}
                className={styles.p_video__01}
                poster="https://youcandoo.yanadoocdn.com/v3/web/assets/images/web_together01.png"
                src="https://youcandoo.yanadoocdn.com/v3/web/assets/images/web_together01.mp4"
                muted
                playsInline></video>
            </li>
            <li>
              <video
                ref={togetherArticleMobileVideo2}
                className={styles.p_video__02}
                poster="https://youcandoo.yanadoocdn.com/v3/web/assets/images/web_together02.png"
                src="https://youcandoo.yanadoocdn.com/v3/web/assets/images/web_together02.mp4"
                muted
                playsInline></video>
            </li>
          </ul>
        </Inner>
      </article>
      <article className={styles.data_article} ref={dataArticle}>
        <Inner>
          <time dateTime="2021-06">*21년 06월 기준</time>
          <h2 className={styles.p_main__title}>
            지금도{' '}
            <strong>
              <span className={styles.common_line_text}>
                {isCountUp ? (
                  <CountUp start={0} end={4157603} duration={3} separator="," />
                ) : (
                  numberWithCommas(4157603)
                )}
                번
              </span>
            </strong>
            의
            <br />
            실천이 이어지고 있어요!
          </h2>
          <ul className={styles.tab_btn__wrapper}>
            <li className={activeDataArticleIndex === 0 ? styles.active : ''}>
              <div className={styles.wrap}>
                <Image
                  src="https://youcandoo.yanadoocdn.com/v3/web/assets/images/web_data_icon_1.svg"
                  alt="아이콘"
                  width={40}
                  height={40}
                />
                <span className={styles.btn_title}>일단 시작해요</span>
              </div>
            </li>
            <li className={activeDataArticleIndex === 1 ? styles.active : ''}>
              <div className={styles.wrap}>
                <Image
                  src="https://youcandoo.yanadoocdn.com/v3/web/assets/images/web_data_icon_2.svg"
                  alt="아이콘"
                  width={40}
                  height={40}
                />
                <span className={styles.btn_title}>매일 도전해요</span>
              </div>
            </li>
            <li className={activeDataArticleIndex === 2 ? styles.active : ''}>
              <div className={styles.wrap}>
                <Image
                  src="https://youcandoo.yanadoocdn.com/v3/web/assets/images/web_data_icon_3.svg"
                  alt="아이콘"
                  width={40}
                  height={40}
                />
                <span className="btn-title">꾸준히 달성해요</span>
              </div>
            </li>
          </ul>

          <div className={styles.tab_slide__wrapper}>
            <ul>
              <li className={activeDataArticleIndex === 0 ? styles.active : ''}>
                <Image
                  src="https://youcandoo.yanadoocdn.com/v3/web/assets/images/web_data_slide01.png"
                  alt="슬라이드 이미지1"
                  width={804}
                  height={1580}
                />
              </li>
              <li className={activeDataArticleIndex === 1 ? styles.active : ''}>
                <video
                  ref={dataArticleVideo1}
                  className={styles.video_01}
                  poster="https://youcandoo.yanadoocdn.com/v3/web/assets/images/web_data_slide02.png"
                  src="https://youcandoo.yanadoocdn.com/v3/web/assets/images/web_data_slide02.mp4"
                  muted
                  loop
                  playsInline></video>
              </li>
              <li className={activeDataArticleIndex === 2 ? styles.active : ''}>
                <video
                  ref={dataArticleVideo2}
                  className={styles.video_02}
                  poster="https://youcandoo.yanadoocdn.com/v3/web/assets/images/web_data_slide03.png"
                  src="https://youcandoo.yanadoocdn.com/v3/web/assets/images/web_data_slide03.mp4"
                  muted
                  loop
                  playsInline></video>
              </li>
            </ul>
          </div>
        </Inner>
      </article>
      <article className={styles.leader_article} ref={leaderArticle}>
        <Inner>
          <h2>
            더 나은 변화를 위해{' '}
            <strong>
              <span className={styles.common_line_text}>리더들이</span>
            </strong>
            <br />
            당신을{' '}
            <strong>
              <span className={styles.common_line_text}>기다리고</span>
            </strong>
            있어요.
          </h2>
          <video
            ref={leaderArticleVideo}
            poster="https://youcandoo.yanadoocdn.com/v3/web/assets/images/web_leader_img.jpg"
            src="https://youcandoo.yanadoocdn.com/v3/web/assets/images/web_leader_img.mp4"
            muted
            playsInline
            loop></video>
        </Inner>
      </article>
      <article className={styles.join_article}>
        <Inner>
          <Image
            src="https://youcandoo.yanadoocdn.com/v3/web/assets/images/web_join.gif"
            alt="이미지"
            width={700}
            height={540}
          />

          <h2 className={styles.p_main__title}>
            유캔두와 함께하는{' '}
            <strong>
              <span className={styles.common_line_text}>하루 10분</span>
            </strong>{' '}
            성장 습관
            <br /> 오늘부터
            <strong>
              <span className={styles.common_line_text}>같이 시작</span>
            </strong>
            해볼까요?
          </h2>

          <h2 className={styles.m_main__title}>
            유캔두와 함께하는 <br />
            <strong>
              <span className={styles.common_line_text}>하루 10분</span>
            </strong>{' '}
            성장 습관 오늘부터 <br />
            <strong>
              <span className={styles.common_line_text}>같이 시작</span>
            </strong>
            해볼까요?
          </h2>

          <ul className={styles.p_store__wrapper}>
            <li>
              <a
                onClick={() =>
                  Router.push(
                    'https://play.google.com/store/apps/details?id=com.yanadoo.youcandoo'
                  )
                }>
                <Image
                  src="https://youcandoo.yanadoocdn.com/v3/web/assets/images/web_join_google.png?resource_version=<?=$resource_version?>"
                  alt="구글 플레이 다운로드 이동"
                  width={234}
                  height={57}
                />
              </a>
            </li>
            <li>
              <a
                onClick={() =>
                  Router.push('https://apps.apple.com/kr/app/id1496745851')
                }>
                <Image
                  src="https://youcandoo.yanadoocdn.com/v3/web/assets/images/web_join_apple.png?resource_version=<?=$resource_version?>"
                  alt="앱스토 다운로드 이동"
                  width={234}
                  height={57}
                />
              </a>
            </li>
          </ul>
        </Inner>
      </article>
      <aside
        className={`${styles.m_app_download} ${activeBtnAppDown} ${onBtnAppDown}`}>
        <a
          onClick={() =>
            Router.push('https://youcandoo.onelink.me/pWyT/ad12b5f4')
          }>
          앱 다운로드
        </a>
        <div className={styles.animations_wave}></div>
      </aside>
    </React.Fragment>
  )
}

export default Main

Main.getLayout = function getLayout(page) {
  const props = {headerType: 'transparent'}
  return <WebLayout {...props}>{page}</WebLayout>
}
