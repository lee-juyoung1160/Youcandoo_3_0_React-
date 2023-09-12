import {useEffect, useState, useRef} from 'react'
import WebviewLayout from '../../../../components/webview/Layout'
import {YOUCANDOO_GUIDE, FIXED, IMAGE_URL} from '../../../../utils/constant'
import Image from 'next/image'
import Router from 'next/router'
import {
  osType,
  closeWebviewIos,
  closeWebviewAos,
} from '../../../../utils/call_native'
import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'

import SwiperCore, {Autoplay} from 'swiper/core'
import styles from '../../../../styles/page/_app_ycd_guide.module.scss'
import {Swiper, SwiperSlide} from 'swiper/react'
import {EffectFade} from 'swiper'
import 'swiper/components/effect-fade/effect-fade.min.css'

// install Swiper modules
SwiperCore.use([Autoplay, EffectFade])

const swiperContainerStyle = {
  position: 'relative',
  width: '60.56vw',
  height: '81.94vw',
  transform: 'translateY(-5.56vw)',
  margin: '0 auto',
}

const swiperAutoPlayOptions = {
  delay: 1500,
  disableOnInteraction: false,
}

const Pagination = (props) => {
  return (
    <div className="swiper-pagination" ref={props.pagination}>
      <span className="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
      <span className="swiper-pagination-bullet"></span>
      <span className="swiper-pagination-bullet"></span>
    </div>
  )
}

let tabSwiper
let contentSwiper

export default function YouCanDooGuide() {
  const pagination1 = useRef(null)
  const pagination2 = useRef(null)
  const pagination4 = useRef(null)
  const pagination5 = useRef(null)
  const pagination6 = useRef(null)
  const pagination7 = useRef(null)
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  const [isStart, setIsStart] = useState(true)
  const [isMain, setIsMain] = useState(false)
  const [isEnd, setIsEnd] = useState(false)
  const [osName, setOsName] = useState('')

  useEffect(() => {
    document.querySelector('body').classList.add('body')
    setOsName(osType())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className={styles.ycd_guide}>
      {isStart ? (
        <article className={styles.page_start}>
          <div className={styles.flex_container}>
            <div className={styles.top_img}>
              <Image
                src={IMAGE_URL.guideStart}
                layout="fill"
                alt="가이드 스타트 이미지"
              />
            </div>
            <h5>
              <strong className={styles.point_text}>꾸준한 성장 습관!</strong>
              <br />그 시작을 축하합니다
            </h5>
            <p>
              <em>원하는 목표나 계획이 있나요?</em>
              유캔두와 하루 10분으로
              <br />
              목표에 한 걸음 가까워지는 방법!
              <br />
              지금부터 알려드릴게요.
            </p>
            <button
              type="button"
              className={styles.btn_start}
              onClick={() => {
                setIsStart(false)
                setIsMain(true)
                setIsEnd(false)
              }}>
              <Image
                src={IMAGE_URL.guideStartButton}
                width={330}
                height={46}
                layout="responsive"
                alt="성장습관시작하기"
              />
            </button>
          </div>
        </article>
      ) : (
        ''
      )}

      {isMain ? (
        <article
          className={`${styles.page_guide} ${isMain ? styles.active : ''}`}>
          <nav className={`${styles.guide_nav} guide_nav`}>
            <Swiper
              className={styles.page_guide_tab}
              style={{
                position: 'fixed',
                top: '13.89vw',
                left: '0',
                right: '0',
                padding: '0 4.44vw',
                borderBottom: '0.28vw solid #E2E8ED',
                backgroundColor: '#fff',
                zIndex: '100',
              }}
              onClick={(swiper, event) => {
                setActiveTabIndex(swiper.clickedIndex)
                swiper.slideTo(swiper.clickedIndex - 0.5, 300, false)
                contentSwiper.slideTo(swiper.clickedIndex, 300, false)
              }}
              onAfterInit={(swiper) => {
                tabSwiper = swiper
              }}
              slidesPerView={3.5}
              freeMode={true}
              watchSlidesProgress={true}
              observer={true}
              observeParents={true}>
              <SwiperSlide>
                <a className={activeTabIndex === 0 ? styles.active : ''}>
                  두잇찾기
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a className={activeTabIndex === 1 ? styles.active : ''}>
                  인증
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a className={activeTabIndex === 2 ? styles.active : ''}>
                  커뮤니티
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a className={activeTabIndex === 3 ? styles.active : ''}>
                  랭킹
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a className={activeTabIndex === 4 ? styles.active : ''}>
                  뱃지
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a className={activeTabIndex === 5 ? styles.active : ''}>UCD</a>
              </SwiperSlide>
              <SwiperSlide>
                <a className={activeTabIndex === 6 ? styles.active : ''}>
                  리더
                </a>
              </SwiperSlide>
            </Swiper>
          </nav>
          <div className={styles.page_guide_slide}>
            <Swiper
              style={{
                marginTop: '50px',
                paddingBottom: '10.00vw',
              }}
              onAfterInit={(swiper) => {
                contentSwiper = swiper
              }}
              onRealIndexChange={(swiper) => {
                setActiveTabIndex(swiper.realIndex)
                tabSwiper.slideTo(swiper.realIndex - 0.5, 500, false)
                document.documentElement.scrollTop = 0
              }}
              onTouchEnd={(swiper) => {
                const moveRange = 50
                if (
                  swiper.isEnd &&
                  swiper.touches.startX - swiper.touches.currentX > moveRange
                ) {
                  setIsStart(false)
                  setIsMain(false)
                  setIsEnd(true)
                }
              }}
              slidesPerView={1}
              autoHeight={true}
              observer={true}
              observeParents={true}>
              <SwiperSlide>
                <div className={styles.title_wrap}>
                  <span className={styles.title_num}>Step 01. 두잇찾기</span>
                  <h5>
                    변화할 내 모습과
                    <br />
                    <strong>닮은 목표를 찾아봐요!</strong>
                  </h5>
                </div>
                <div className={`${styles.contents_box} contents_box`}>
                  <div className={styles.img_wrap}>
                    <Swiper
                      modules={[EffectFade]}
                      effect="fade"
                      style={swiperContainerStyle}
                      slidesPerView={1}
                      centeredSlides={true}
                      slidesPerGroup={1}
                      grabCursor={true}
                      autoplay={swiperAutoPlayOptions}
                      onRealIndexChange={(swiper) => {
                        const paginationBullets = pagination1.current.childNodes
                        paginationBullets.forEach((element) =>
                          element.classList.remove(
                            'swiper-pagination-bullet-active'
                          )
                        )
                        paginationBullets[swiper.realIndex].classList.add(
                          'swiper-pagination-bullet-active'
                        )
                      }}
                      loop={true}
                      className="mySwiper">
                      <SwiperSlide style={swiperContainerStyle}>
                        <Image
                          src={IMAGE_URL.guideDoitCont1}
                          layout="fill"
                          alt="두잇 이미지"
                        />
                      </SwiperSlide>
                      <SwiperSlide style={swiperContainerStyle}>
                        <Image
                          src={IMAGE_URL.guideDoitCont2Bg}
                          layout="fill"
                          alt="두잇 이미지 bg"
                        />
                        <Image
                          src={IMAGE_URL.guideDoitCont2}
                          layout="fill"
                          alt="두잇 이미지"
                        />
                      </SwiperSlide>
                      <SwiperSlide style={swiperContainerStyle}>
                        <Image
                          src={IMAGE_URL.guideDoitCont3Bg}
                          layout="fill"
                          alt="두잇 이미지bg"
                        />
                        <Image
                          src={IMAGE_URL.guideDoitCont3}
                          layout="fill"
                          alt="두잇 이미지"
                        />
                      </SwiperSlide>
                    </Swiper>
                    <Pagination pagination={pagination1} />
                  </div>
                </div>
                <p>
                  두잇은 목표로 향하는
                  <br />
                  나의 꾸준한 습관이
                  <br />
                  만들어지는 공간이에요.
                  <br />
                  <span className={styles.point_text}>
                    내 목표와 같은 두잇을 찾아보세요.
                  </span>
                </p>
                <h5>
                  이제 <strong>두잇을 가입</strong>해볼까요?
                  <br />
                  목표에 한발짝 가까워졌어요!
                </h5>

                <div className={styles.contents_box}>
                  <div className={styles.img_wrap}>
                    <div style={swiperContainerStyle}>
                      <Image
                        src={IMAGE_URL.guideDoitCont4Bg}
                        layout="fill"
                        alt="두잇 이미지 bg"
                      />
                      <Image
                        src={IMAGE_URL.guideDoitCont4}
                        layout="fill"
                        alt="두잇 이미지"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.title_wrap}>
                  <span className={styles.title_num}>Step 02. 인증</span>
                  <h5>
                    변화하는 내 모습을
                    <br />
                    <strong>인증으로 기록</strong>해요.
                  </h5>
                </div>
                <div className={`${styles.contents_box} contents_box`}>
                  <div className={styles.img_wrap}>
                    <Swiper
                      modules={[EffectFade]}
                      style={swiperContainerStyle}
                      slidesPerView={1}
                      centeredSlides={true}
                      slidesPerGroup={1}
                      grabCursor={true}
                      effect="fade"
                      autoplay={swiperAutoPlayOptions}
                      onRealIndexChange={(swiper) => {
                        const paginationBullets = pagination2.current.childNodes
                        paginationBullets.forEach((element) =>
                          element.classList.remove(
                            'swiper-pagination-bullet-active'
                          )
                        )
                        paginationBullets[swiper.realIndex].classList.add(
                          'swiper-pagination-bullet-active'
                        )
                      }}
                      loop={true}
                      className="mySwiper">
                      <SwiperSlide style={swiperContainerStyle}>
                        <Image
                          src={IMAGE_URL.guideAuthCont1Bg}
                          layout="fill"
                          alt="인증 이미지 bg"
                        />
                        <Image
                          src={IMAGE_URL.guideAuthCont1}
                          layout="fill"
                          alt="인증 이미지"
                        />
                      </SwiperSlide>
                      <SwiperSlide style={swiperContainerStyle}>
                        <Image
                          src={IMAGE_URL.guideAuthCont2Bg}
                          layout="fill"
                          alt="인증 이미지 bg"
                        />
                        <Image
                          src={IMAGE_URL.guideAuthCont2}
                          layout="fill"
                          alt="인증 이미지"
                        />
                      </SwiperSlide>
                      <SwiperSlide style={swiperContainerStyle}>
                        <Image
                          src={IMAGE_URL.guideAuthCont3Bg}
                          layout="fill"
                          alt="인증 이미지 bg"
                        />
                        <Image
                          src={IMAGE_URL.guideAuthCont3}
                          layout="fill"
                          alt="인증 이미지"
                        />
                      </SwiperSlide>
                    </Swiper>
                    <Pagination pagination={pagination2} />
                  </div>
                </div>
                <p>
                  작심삼일도 하지 못했던 나,
                  <br />
                  21일 이상 매일 꾸준히 해내는
                  <br />
                  새로운 나를 발견할 수 있어요.
                </p>
                <h5>
                  공유는 다 좋은거니까
                  <br />
                  <strong>친구랑 같이</strong>해도 좋아요.
                </h5>
                <div className={styles.contents_box}>
                  <div className={styles.img_wrap}>
                    <div style={swiperContainerStyle}>
                      <Image
                        src={IMAGE_URL.guideAuthCont4}
                        layout="fill"
                        alt="인증 이미지"
                      />
                      <Image
                        src={IMAGE_URL.guideAuthCont4Bg}
                        layout="fill"
                        alt="인증 이미지 bg"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.title_wrap}>
                  <span className={styles.title_num}>Step 03. 커뮤니티</span>
                  <h5>
                    함께니까, 더 오래 더 멀리
                    <br />
                    <strong>꾸준히 성장</strong>할 수 있어요.
                  </h5>
                </div>
                <div className={styles.contents_box}>
                  <div className={styles.img_wrap}>
                    <div style={swiperContainerStyle}>
                      <Image
                        src={IMAGE_URL.guideCommunityBg}
                        layout="fill"
                        alt="커뮤니티 이미지 bg"
                      />
                      <Image
                        src={IMAGE_URL.guideCommunity}
                        layout="fill"
                        alt="커뮤니티 이미지"
                      />
                    </div>
                  </div>
                </div>
                <p>
                  혼자선 불가능한 일을
                  <br />
                  함께일 때 가능하게 만들어요.
                  <br />
                  <br />
                  리더와 멤버들이
                  <br />
                  나의 페이스메이커가 되어주니까
                  <br />
                  <span className={styles.point_text}>
                    더 오래, 더 멀리 성장할 수 있어요.
                  </span>
                  <br />
                  <br />
                  달라진 모습도
                  <br />
                  같이 공유하면서 말이죠.
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.title_wrap}>
                  <span className={styles.title_num}>Step 04. 랭킹</span>
                  <h5>
                    <strong>다함께 랭킹 도전</strong>으로
                    <br />
                    습관이 즐거워져요!
                  </h5>
                </div>
                <div className={`${styles.contents_box} contents_box`}>
                  <div className={styles.img_wrap}>
                    <Swiper
                      modules={[EffectFade]}
                      style={swiperContainerStyle}
                      slidesPerView={1}
                      centeredSlides={true}
                      slidesPerGroup={1}
                      grabCursor={true}
                      effect="fade"
                      autoplay={swiperAutoPlayOptions}
                      onRealIndexChange={(swiper) => {
                        const paginationBullets = pagination4.current.childNodes
                        paginationBullets.forEach((element) =>
                          element.classList.remove(
                            'swiper-pagination-bullet-active'
                          )
                        )
                        paginationBullets[swiper.realIndex].classList.add(
                          'swiper-pagination-bullet-active'
                        )
                      }}
                      loop={true}
                      className="mySwiper">
                      <SwiperSlide style={swiperContainerStyle}>
                        <Image
                          src={IMAGE_URL.guideRank1Bg}
                          layout="fill"
                          alt="랭킹 이미지 bg"
                        />
                        <Image
                          src={IMAGE_URL.guideRank1}
                          layout="fill"
                          alt="랭킹 이미지"
                        />
                      </SwiperSlide>
                      <SwiperSlide style={swiperContainerStyle}>
                        <Image
                          src={IMAGE_URL.guideRank2Bg}
                          layout="fill"
                          alt="랭킹 이미지 bg"
                        />
                        <Image
                          src={IMAGE_URL.guideRank2}
                          layout="fill"
                          alt="랭킹 이미지"
                        />
                      </SwiperSlide>
                      <SwiperSlide style={swiperContainerStyle}>
                        <Image
                          src={IMAGE_URL.guideRank3}
                          layout="fill"
                          alt="랭킹 이미지 bg"
                        />
                      </SwiperSlide>
                    </Swiper>
                    <Pagination pagination={pagination4} />
                  </div>
                </div>
                <p>
                  멤버들과 매일 꾸준히 인증하고
                  <br />
                  커뮤니티에서 즐거움을 나눌수록
                  <br />
                  우리 두잇의{' '}
                  <strong className={styles.bold_text}>열정 지수*</strong>가
                  올라가요!
                  <span className={styles.small_text}>
                    *열정지수 : 두잇 멤버들의 활동을 나타내는 지표
                  </span>
                  멤버들의 열정지수에 따라
                  <br />
                  매주 달라지는 랭킹으로
                  <br />
                  함께하는 도전이 재밌어져요!
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.title_wrap}>
                  <span className={styles.title_num}>Step 05. 뱃지</span>
                  <h5>
                    나의 성장이 눈에 보이는
                    <br />
                    <strong>도파민 자극하는 뱃지!</strong>
                  </h5>
                </div>
                <div className={`${styles.contents_box} contents_box`}>
                  <div className={styles.img_wrap}>
                    <Swiper
                      modules={[EffectFade]}
                      style={swiperContainerStyle}
                      slidesPerView={1}
                      centeredSlides={true}
                      slidesPerGroup={1}
                      grabCursor={true}
                      effect="fade"
                      autoplay={swiperAutoPlayOptions}
                      onRealIndexChange={(swiper) => {
                        const paginationBullets = pagination5.current.childNodes
                        paginationBullets.forEach((element) =>
                          element.classList.remove(
                            'swiper-pagination-bullet-active'
                          )
                        )
                        paginationBullets[swiper.realIndex].classList.add(
                          'swiper-pagination-bullet-active'
                        )
                      }}
                      loop={true}
                      className="mySwiper">
                      <SwiperSlide style={swiperContainerStyle}>
                        <Image
                          src={IMAGE_URL.guideBadge1}
                          layout="fill"
                          alt="뱃지 이미지"
                        />
                      </SwiperSlide>
                      <SwiperSlide style={swiperContainerStyle}>
                        <Image
                          src={IMAGE_URL.guideBadge2}
                          layout="fill"
                          alt="뱃지 이미지"
                        />
                      </SwiperSlide>
                      <SwiperSlide style={swiperContainerStyle}>
                        <Image
                          src={IMAGE_URL.guideBadge3Bg}
                          layout="fill"
                          alt="뱃지 이미지 bg"
                        />
                        <Image
                          src={IMAGE_URL.guideBadge3}
                          layout="fill"
                          alt="뱃지 이미지"
                        />
                      </SwiperSlide>
                    </Swiper>
                    <Pagination pagination={pagination5} />
                  </div>
                </div>
                <p>
                  3일, 7일, 14일, 21일…
                  <br />
                  나의 성장이 그대로 담겨 있는
                  <br />
                  <span className={styles.point_text}>
                    뱃지가 도전을 더욱 자극해요!
                  </span>
                  <br />
                  <br />
                  해낼수록 더 새롭고 다양한
                  <br />
                  멋진 뱃지가 주어지죠.
                  <br />
                  하나씩 퀘스트를 깨듯 모아보세요.
                  <br />
                  <br />
                  다음엔 또 어떤 모양의
                  <br />
                  뱃지를 얻게 될까요?
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.title_wrap}>
                  <span className={styles.title_num}>Step 06. UCD</span>
                  <h5>
                    <strong>꾸준히 해온 나!</strong>
                    <br />
                    UCD는 얼만큼 쌓였을까요?
                  </h5>
                </div>
                <div className={`${styles.contents_box} contents_box`}>
                  <div className={styles.img_wrap}>
                    <Swiper
                      modules={[EffectFade]}
                      style={{
                        width: '57.22vw',
                        height: '81.94vw',
                        transform: 'translateY(-5.56vw)',
                        margin: '0 auto',
                      }}
                      slidesPerView={1}
                      centeredSlides={true}
                      slidesPerGroup={1}
                      grabCursor={true}
                      effect="fade"
                      autoplay={swiperAutoPlayOptions}
                      onRealIndexChange={(swiper) => {
                        const paginationBullets = pagination6.current.childNodes
                        paginationBullets.forEach((element) =>
                          element.classList.remove(
                            'swiper-pagination-bullet-active'
                          )
                        )
                        paginationBullets[swiper.realIndex].classList.add(
                          'swiper-pagination-bullet-active'
                        )
                      }}
                      loop={true}
                      className="mySwiper">
                      <SwiperSlide
                        style={{
                          width: '57.22vw',
                          height: '81.94vw',
                          transform: 'translateY(-5.56vw)',
                          margin: '0 auto',
                        }}>
                        <Image
                          src={IMAGE_URL.guideUcd1Bg}
                          layout="fill"
                          alt="UCD 이미지 bg"
                        />
                        <Image
                          src={IMAGE_URL.guideUcd1}
                          layout="fill"
                          alt="UCD 이미지"
                        />
                      </SwiperSlide>
                      <SwiperSlide
                        style={{
                          width: '57.22vw',
                          height: '81.94vw',
                          transform: 'translateY(-5.56vw)',
                          margin: '0 auto',
                        }}>
                        <Image
                          src={IMAGE_URL.guideUcd2}
                          layout="fill"
                          alt="UCD 이미지 bg"
                        />
                      </SwiperSlide>
                      <SwiperSlide
                        style={{
                          width: '57.22vw',
                          height: '81.94vw',
                          transform: 'translateY(-5.56vw)',
                          margin: '0 auto',
                        }}>
                        <Image
                          src={IMAGE_URL.guideUcd3Bg}
                          layout="fill"
                          alt="UCD 이미지 bg"
                        />
                        <Image
                          src={IMAGE_URL.guideUcd3}
                          layout="fill"
                          alt="UCD 이미지"
                        />
                      </SwiperSlide>
                    </Swiper>
                    <Pagination pagination={pagination6} />
                  </div>
                </div>
                <p>
                  UCD는 유캔두만의 특별한 리워드예요.
                  <br />
                  꾸준히 목표를 달성하며 열심히
                  <br />
                  소통하는 두잇일수록 UCD 지갑이 두둑히 쌓여요!
                  <br />
                  <br />
                  여러분이 모은 소중한 UCD는 기프티콘, 상품권 등<br />
                  <span className={styles.point_text}>
                    다양한 상품으로 교환하실 수 있어요.
                  </span>
                  <br />
                  여러분의 목표 달성에 유캔두가
                  <br />
                  든든한 지원군이 되어드릴게요!
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.title_wrap}>
                  <span className={styles.title_num}>Step 07. 리더</span>
                  <h5>
                    어느새 성장한 나,
                    <br /> 이제 <strong>리더가 될 자격</strong>이 충분해요!
                  </h5>
                </div>
                <div className={`${styles.contents_box} contents_box`}>
                  <div className={styles.img_wrap}>
                    <Swiper
                      modules={[EffectFade]}
                      style={{
                        width: '57.22vw',
                        height: '81.94vw',
                        transform: 'translateY(-5.56vw)',
                        margin: '0 auto',
                      }}
                      slidesPerView={1}
                      centeredSlides={true}
                      slidesPerGroup={1}
                      grabCursor={true}
                      effect="fade"
                      autoplay={swiperAutoPlayOptions}
                      onRealIndexChange={(swiper) => {
                        const paginationBullets = pagination7.current.childNodes
                        paginationBullets.forEach((element) =>
                          element.classList.remove(
                            'swiper-pagination-bullet-active'
                          )
                        )
                        paginationBullets[swiper.realIndex].classList.add(
                          'swiper-pagination-bullet-active'
                        )
                      }}
                      loop={true}
                      className="mySwiper">
                      <SwiperSlide
                        style={{
                          width: '57.22vw',
                          height: '81.94vw',
                          transform: 'translateY(-5.56vw)',
                          margin: '0 auto',
                        }}>
                        <Image
                          src={IMAGE_URL.guideLeader1Bg}
                          layout="fill"
                          alt="리더 이미지 bg"
                        />
                        <Image
                          src={IMAGE_URL.guideLeader1}
                          layout="fill"
                          alt="리더 이미지"
                        />
                      </SwiperSlide>
                      <SwiperSlide
                        style={{
                          width: '57.22vw',
                          height: '81.94vw',
                          transform: 'translateY(-5.56vw)',
                          margin: '0 auto',
                        }}>
                        <Image
                          src={IMAGE_URL.guideLeader2Bg}
                          layout="fill"
                          alt="리더 이미지 bg"
                        />
                        <Image
                          src={IMAGE_URL.guideLeader2}
                          layout="fill"
                          alt="리더 이미지 bg"
                        />
                      </SwiperSlide>
                      <SwiperSlide
                        style={{
                          width: '57.22vw',
                          height: '81.94vw',
                          transform: 'translateY(-5.56vw)',
                          margin: '0 auto',
                        }}>
                        <Image
                          src={IMAGE_URL.guideLeader3Bg}
                          layout="fill"
                          alt="리더 이미지"
                        />
                        <Image
                          src={IMAGE_URL.guideLeader3}
                          layout="fill"
                          alt="리더 이미지"
                        />
                      </SwiperSlide>
                    </Swiper>
                    <Pagination pagination={pagination7} />
                  </div>
                </div>
                <p>
                  꾸준한 인증으로 레벨업이 되면
                  <br />
                  두잇을 만들 수 있어요.
                  <br />
                  나의 다음 목표를 위해,
                  <br />
                  그리고 나의 변화를 따라올
                  <br />
                  새로운 멤버들과 또다른 도전을
                  <br />
                  시작할 차례에요!
                  <br />
                  <br />
                  새로운 멤버들이 꾸준한 실천으로
                  <br />
                  성장과 변화를 할 수 있도록,
                  <br />
                  유캔두의 좋은 리더가 되어주세요!
                </p>
              </SwiperSlide>
            </Swiper>
          </div>
        </article>
      ) : (
        ''
      )}

      {isEnd ? (
        <article className={styles.page_end}>
          <div className={styles.flex_container}>
            <div className={styles.top_img}>
              <Image
                src={IMAGE_URL.guideEnd}
                layout="fill"
                alt="가이드 종료 이미지"
              />
            </div>
            <h5>
              짝짝짝!
              <br />
              나의 성장과 변화가
              <br />
              그려진다면,
              <br />
              <br />
              이제부터 <strong className={styles.point_text}>습관 만렙</strong>
              에
              <br />
              도전해볼까요?
              <br />
              <br />
            </h5>
            <button
              type="button"
              className={styles.btn_start}
              onClick={() => {
                switch (osName) {
                  case 'aos':
                    closeWebviewAos()
                    break
                  case 'ios':
                    closeWebviewIos()
                    break
                  default:
                    Router.back()
                }
              }}>
              <Image
                src={IMAGE_URL.guideEndButton}
                width={330}
                height={46}
                layout="responsive"
                alt="변화 시작하기"
              />
            </button>
          </div>
        </article>
      ) : (
        ''
      )}
    </section>
  )
}

YouCanDooGuide.getLayout = function getLayout(page) {
  const props = {headers: {title: YOUCANDOO_GUIDE, headerType: FIXED}}
  return <WebviewLayout {...props}>{page}</WebviewLayout>
}
