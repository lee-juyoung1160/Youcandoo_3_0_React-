import React, {useEffect} from 'react'
import WebviewLayout from '../../../../components/webview/Layout'
import Image from 'next/image'
import {useRouter} from 'next/router'
import {LEVEL_GUIDE, FIXED, IMAGE_URL} from '../../../../utils/constant'
import styles from '../../../../styles/page/_app_level_guide.module.scss'

const MemberLevel = (props) => {
  let levelImage = IMAGE_URL.level1Main
  let levelName = '레벨 정보 없음'
  let levelContent = ''
  switch (Number(props.level)) {
    case 1:
      levelImage = IMAGE_URL.level1Main
      levelName = 'Lv.1 비기너'
      levelContent = (
        <p>
          <strong>목표 달성</strong>을 위해 <strong>미션 인증</strong>을 꾸준히
          해보세요.
          <br />
          다음 레벨부터 두잇을 만들 수 있어요.
        </p>
      )
      break
    case 2:
      levelImage = IMAGE_URL.level2Main
      levelName = 'Lv.2 루키'
      levelContent = (
        <p>
          축하해요! 이제 두잇을 <strong>2개</strong>나 만들 수 있어요.
          <br />
          최대 멤버 수도 <strong>100명</strong>으로 늘어났네요.
        </p>
      )
      break
    case 3:
      levelImage = IMAGE_URL.level3Main
      levelName = 'Lv.3 프로'
      levelContent = (
        <p>
          축하해요! 이제 두잇을 <strong>5개</strong>나 만들 수 있어요.
          <br />
          최대 멤버 수도 <strong>1,500명</strong>으로 늘어났네요.
        </p>
      )
      break
    case 4:
      levelImage = IMAGE_URL.level4Main
      levelName = 'Lv.4 마스터'
      levelContent = (
        <p>
          축하해요! 이제 두잇을 <strong>10개</strong>나 만들 수 있어요.
          <br />
          최대 멤버 수도 <strong>1,500명</strong>으로 늘어났네요.
        </p>
      )
      break
    case 5:
      levelImage = IMAGE_URL.level5Main
      levelName = 'Lv.5 레전드'
      levelContent = (
        <p>
          축하해요! 이제 두잇을 <strong>10개</strong>나 만들 수 있어요.
          <br />
          최대 멤버 수도 <strong>2,000명</strong>으로 늘어났네요.
        </p>
      )
      break
    case 6:
      levelImage = IMAGE_URL.level6Main
      levelName = 'Lv.6 파트너'
      levelContent = (
        <p>
          축하해요! 이제 두잇을 <strong>10개</strong>나 만들 수 있어요.
          <br />
          최대 멤버 수도 <strong>10,000명</strong>으로 늘어났네요.
        </p>
      )
      break
    case 7:
      levelImage = IMAGE_URL.level7Main
      levelName = 'Lv.7 스폰서'
      levelContent = (
        <p>
          축하해요! 이제 두잇을 <strong>10개</strong>나 만들 수 있어요.
          <br />
          최대 멤버 수도 <strong>100,000명</strong>으로 늘어났네요.
        </p>
      )
      break
  }

  return (
    <div className={styles.level}>
      <Image src={levelImage} alt={levelName} width={250} height={174} />
      <h3>
        <span>{props.nickname}</span>
        {levelName}
      </h3>
      {levelContent}
    </div>
  )
}

export default function Level() {
  const router = useRouter()
  const {nickname, level} = router.query
  useEffect(() => {
    document.querySelector('body').classList.add('body')
  })

  return (
    <div className={styles.root}>
      <MemberLevel nickname={nickname} level={level} />
      <article>
        <div className={styles.description}>
          <ul>
            <li>
              <Image
                src={IMAGE_URL.level1Sub}
                alt="비기너"
                width={75}
                height={75}
              />
              <div>
                <dl>
                  <dt>개설 가능 두잇 수</dt>
                  <dd>0</dd>
                </dl>
                <dl>
                  <dt>두잇 최대 멤버 수</dt>
                  <dd>0</dd>
                </dl>
                <dl>
                  <dt>레벨업 보너스</dt>
                  <dd className={styles.bonus}>0</dd>
                </dl>
              </div>
            </li>
            <li>
              <Image
                src={IMAGE_URL.level2Sub}
                alt="루키"
                width={75}
                height={75}
              />
              <div>
                <dl>
                  <dt>개설 가능 두잇 수</dt>
                  <dd>2개</dd>
                </dl>
                <dl>
                  <dt>두잇 최대 멤버 수</dt>
                  <dd>100명</dd>
                </dl>
                <dl>
                  <dt>레벨업 보너스</dt>
                  <dd className={styles.bonus}>+3,000UCD</dd>
                </dl>
              </div>
            </li>
            <li>
              <Image
                src={IMAGE_URL.level3Sub}
                alt="프로"
                width={75}
                height={75}
              />
              <div>
                <dl>
                  <dt>개설 가능 두잇 수</dt>
                  <dd>5개</dd>
                </dl>
                <dl>
                  <dt>두잇 최대 멤버 수</dt>
                  <dd>1,500명</dd>
                </dl>
                <dl>
                  <dt>레벨업 보너스</dt>
                  <dd className={styles.bonus}>+10,000UCD</dd>
                </dl>
              </div>
            </li>
            <li>
              <Image
                src={IMAGE_URL.level4Sub}
                alt="마스터"
                width={75}
                height={75}
              />
              <div>
                <dl>
                  <dt>개설 가능 두잇 수</dt>
                  <dd>10개</dd>
                </dl>
                <dl>
                  <dt>두잇 최대 멤버 수</dt>
                  <dd>1,500명</dd>
                </dl>
                <dl>
                  <dt>레벨업 보너스</dt>
                  <dd className={styles.bonus}>+30,000UCD</dd>
                </dl>
              </div>
            </li>
            <li>
              <Image
                src={IMAGE_URL.level5Sub}
                alt="레전드"
                width={75}
                height={75}
              />
              <div>
                <dl>
                  <dt>개설 가능 두잇 수</dt>
                  <dd>10개</dd>
                </dl>
                <dl>
                  <dt>두잇 최대 멤버 수</dt>
                  <dd>2,000명</dd>
                </dl>
                <dl>
                  <dt>레벨업 보너스</dt>
                  <dd className={styles.bonus}>+100,000UCD</dd>
                </dl>
              </div>
            </li>
          </ul>
        </div>
      </article>

      <div>
        <div className={styles.notice}>
          <h5>
            <i>
              <Image
                src={IMAGE_URL.tipIcon}
                alt="tip icon"
                width={20}
                height={20}
              />
            </i>
            확인해주세요
          </h5>
          <ul>
            <li>
              <i>-</i>유캔두에 올린 인증이 많을수록 레벨이 높아져요.
              <br />
              내가 직접 올린 인증은 물론, 내가 만든 두잇에서 멤버들이 올린
              인증도 레벨 경험치에 포함되어요.
              <br />
              빠르게 레벨을 올리고 싶다면 리더십을 발휘해 더 많은 사람들의
              인증을 이끌어보세요!
            </li>
            <li>
              <i>-</i>유캔두 레벨은 매주 월요일 일괄적으로 올라가요.
              <br />
              레벨에 따라 만들 수 있는 두잇 수와 두잇 별 최대 정원이 결정돼요.
            </li>
            <li>
              <i>-</i>레벨업 보너스는 최초 레벨 업 시 1번만 지급되는 특별
              UCD예요.
            </li>
            <li>
              <i>-</i>유캔두 레벨 기준은 정책에 의해 변경될 수 있어요.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

Level.getLayout = function getLayout(page) {
  const props = {headers: {title: LEVEL_GUIDE, headerType: FIXED}}
  return <WebviewLayout {...props}>{page}</WebviewLayout>
}
