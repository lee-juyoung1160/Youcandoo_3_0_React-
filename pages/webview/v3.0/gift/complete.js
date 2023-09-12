import {useState, useEffect} from 'react'
import WebviewLayout from '../../../../components/webview/Layout'
import {GOODS_EXCHANGE, FIXED, IMAGE_URL} from '../../../../utils/constant'
import NoResult from '../../../../components/webview/NoResult'
import Button from '../../../../components/webview/Button'
import styles from '../../../../styles/page/_app_gift.module.scss'
import Router from 'next/router'
import {
  osType,
  closeWebviewIos,
  closeWebviewAos,
} from '../../../../utils/call_native'

export default function Complete() {
  const [osName, setOsName] = useState('')

  useEffect(() => {
    document.querySelector('body').classList.add('body')
    setOsName(osType())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleClickExtraGift = () => {
    Router.push('/webview/v3.0/gift')
  }

  const handleClickBtnComplete = () => {
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
  }

  return (
    <section className={styles.gift_complete}>
      <NoResult url={IMAGE_URL.giftExchangeComplete}>
        상품 신청이 완료되었어요!
        <br />
        다음 주 수요일 휴대폰번호로 발송돼요.
      </NoResult>
      <div className="bottom_fix">
        <div className={styles.footer}>
          <h5>
            <span>※ 안내</span>
          </h5>
          <p>
            신청한 기프티콘, 야나두 평생 수강 패키지는 전주 월요일부터
            일요일까지 신청 기준으로 다음주 수요일 발송돼요.
          </p>
        </div>
        <div className={styles.btn_wrap}>
          <Button
            type="button"
            color="default01"
            size="sm"
            clickHandler={handleClickExtraGift}>
            상품 추가 신청
          </Button>
          <Button
            type="button"
            color="primary"
            size="sm"
            clickHandler={handleClickBtnComplete}>
            확인
          </Button>
        </div>
      </div>
    </section>
  )
}

Complete.getLayout = function getLayout(page) {
  const props = {headers: {title: GOODS_EXCHANGE, headerType: FIXED}}
  return <WebviewLayout {...props}>{page}</WebviewLayout>
}
