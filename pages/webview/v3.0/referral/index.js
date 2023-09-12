import React, {useEffect, useState, useRef} from 'react'
import WebviewLayout from '../../../../components/webview/Layout'
import Image from 'next/image'
import {FIXED, IMAGE_URL, REFERRAL} from '../../../../utils/constant'
import styles from '../../../../styles/page/_app_referral.module.scss'
import {shareReferralCode, osType} from '../../../../utils/call_native'
import Button from '../../../../components/webview/Button'
import {
  documentOverflowAuto,
  documentOverflowHidden,
  numberWithCommas,
  getErrorMessage,
} from '../../../../utils/utils'
import Modal from '../../../../components/webview/Modal'

export default function Referral() {
  const referralCodeInput = useRef(null)
  const [signInFriend, setSignInFriend] = useState(0)
  const [actionedFriend, setActionedFriend] = useState(0)
  const [rewardUcd, setRewardUcd] = useState(0)
  const [referralCode, setReferralCode] = useState('초대코드를 불러올 수 없음')
  const [displayModal, setDisplayModal] = useState(false)

  useEffect(() => {
    document.querySelector('body').classList.add('body')
    /**  AOS는 native 펑션을 호출하면 값을 return 해주고 IOS는 native 호출하면 웹의 getDeviceInfo(arg) callback 하면서 arg를 넘겨줌. **/
    switch (osType()) {
      case 'aos':
        let responseFromAos
        try {
          /**  native 펑션을 호출하면 값을 return **/
          responseFromAos = window.webview.getDeviceInfo()
        } catch (e) {
          console.log(e.message)
        } finally {
          getDeviceInfo(responseFromAos)
        }
        break
      case 'ios':
        try {
          /** native 호출하면 웹의 getDeviceInfo(arg) callback 하면서 arg를 넘겨줌. **/
          const param = JSON.stringify({action: {pageType: 'inquiry'}})
          window.webkit.messageHandlers.osCallbackHandler.postMessage(param)
        } catch (e) {
          alert('catch', e.message)
          console.log(e.message)
          getDeviceInfo()
        }
        break
      default:
        getDeviceInfo()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getDeviceInfo = (obj) => {
    if (obj) {
      const jsonObj = JSON.parse(obj)
      if (jsonObj.account_token) {
        const options = {
          method: 'POST',
          body: JSON.stringify({
            account_token: jsonObj.account_token,
          }),
        }
        fetch(process.env.NEXT_PUBLIC_REFERRAL_STATUS, options)
          .then((response) => response.json())
          .catch((error) =>
            alert('초대 현황 및 코드 정보를 불러올 수 없습니다.')
          )
          .then((response) => {
            if (response.status === 0) {
              alert(response.data.pcode)
              const {pcode, join_count, action_count, ucd} = response.data
              setSignInFriend(join_count)
              setActionedFriend(action_count)
              setRewardUcd(ucd)
              setReferralCode(pcode)
            } else {
              alert(getErrorMessage(response.status))
            }
          })
      }
    }
  }

  const handleClickBtnCopyCode = () => {
    referralCodeInput.current.select()
    const isCopied = document.execCommand('copy')
    isCopied ? copySuccess() : alert('초대코드 복사에 실패했습니다.')
  }

  const copySuccess = () => {
    documentOverflowHidden()
    setDisplayModal(true)
  }

  const handleClickBtnOk = () => {
    documentOverflowAuto()
    setDisplayModal(false)
  }

  return (
    <section className={styles.referral}>
      <Image
        src={IMAGE_URL.referralTopBanner}
        alt="친구초대 상단 배너"
        width={360}
        height={360}
        layout="responsive"
      />
      <div className={styles.invitation_code_wrap}>
        <p className={styles.title}>나의 초대코드</p>
        <div className={styles.input_copy_wrap}>
          <input
            type="text"
            readOnly
            value={referralCode}
            ref={referralCodeInput}
          />
          <button type="button" onClick={handleClickBtnCopyCode}>
            <Image
              src={IMAGE_URL.referralButton1}
              alt="복사하기"
              width={85}
              height={42}
              layout="responsive"
            />
          </button>
        </div>
        <div className={styles.invitation_btn_wrap}>
          <div className={styles.invitation_btn}>
            <button
              type="button"
              onClick={() => {
                shareReferralCode({
                  type: 'kakaolink',
                  referralCode: referralCodeInput.current.value,
                })
              }}>
              <Image
                src={IMAGE_URL.referralButton3}
                alt="카카오톡 초대하기"
                width={37}
                height={16}
              />
              카카오톡으로 초대하기
            </button>
            <button
              type="button"
              onClick={() => {
                shareReferralCode({
                  type: 'linkcopy',
                  referralCode: referralCodeInput.current.value,
                })
              }}>
              <Image
                src={IMAGE_URL.referralButton2}
                alt="링크복사"
                width={37}
                height={16}
              />
              링크 복사하기
            </button>
          </div>
          <p>*본인인증을 완료한 계정만 이벤트 혜택을 받을 수 있어요!</p>
        </div>
      </div>
      <div className={styles.invitation_status_wrap}>
        <p className={styles.title}>나의 친구 초대 현황</p>
        <div className={styles.shadow_box}>
          <dl>
            <dt>가입한 친구</dt>
            <dd>
              <span>{numberWithCommas(signInFriend)}</span>명
            </dd>
          </dl>
          <dl>
            <dt>첫 인증한 친구</dt>
            <dd>
              <span>{numberWithCommas(actionedFriend)}</span>명
            </dd>
          </dl>
        </div>
        <div className={styles.my_ucd}>
          <strong>
            <Image
              src={IMAGE_URL.referralUcdIcon}
              alt="UCD"
              width={23}
              height={19}
            />
            적립받은 UCD
          </strong>
          <span>{numberWithCommas(rewardUcd)}</span>
        </div>
      </div>
      <div className={styles.invitation_notice}>
        <div className={styles.inner}>
          <p className={styles.notice_title}>꼭 읽어주세요!</p>
          <ul>
            <li>ㆍ친구 초대 혜택은 최대 100만 UCD까지 적립 가능합니다.</li>
            <li>
              ㆍ추천인/친구 모두 본인인증을 완료한 계정만 친구초대 혜택을 받을
              수 있습니다.
            </li>
            <li>
              ㆍ친구 초대 UCD는 친구가 초대한 링크 및 초대코드로 가입 후 두잇 첫
              인증 시 자동 지급됩니다.
            </li>
            <li>
              ㆍ커뮤니티, 웹사이트, SNS 등에 공유한 친구 초대 링크/코드로 인해
              발생한 일에 대해 회사는 책임지지 않습니다.
            </li>
            <li>
              ㆍ친구 초대 이벤트는 당사 사정에 의해 사전 공지 없이 내용이 변경될
              수 있습니다.
            </li>
          </ul>
        </div>
      </div>

      {displayModal ? (
        <Modal size="lg" radius="radius" position="center">
          <strong className={styles.modal_text}>
            초대코드가 복사되었습니다.
          </strong>
          <Button
            type="button"
            color="primary"
            size="lg"
            radius="radius"
            clickHandler={handleClickBtnOk}>
            확인
          </Button>
        </Modal>
      ) : (
        ''
      )}
    </section>
  )
}

Referral.getLayout = function getLayout(page) {
  const props = {headers: {title: REFERRAL, headerType: FIXED}}
  return <WebviewLayout {...props}>{page}</WebviewLayout>
}
