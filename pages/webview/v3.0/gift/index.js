import {useEffect, useState, useRef} from 'react'
import WebviewLayout from '../../../../components/webview/Layout'
import {GOODS_EXCHANGE, FIXED, IMAGE_URL} from '../../../../utils/constant'
import Image from 'next/image'
import Router from 'next/router'
import styles from '../../../../styles/page/_app_gift.module.scss'
import Button from '../../../../components/webview/Button'
import {
  documentOverflowAuto,
  documentOverflowHidden,
} from '../../../../utils/utils'
import Modal from '../../../../components/webview/Modal'
import {osType} from '../../../../utils/call_native'
import {slideDown, slideUp, getErrorMessage} from '../../../../utils/utils'

const GiftItem = (props) => {
  const balance = props.balance
  const {gift_name, gift_ucd, gift_image_url, is_apply} = props.item
  const btnText =
    is_apply && Number(balance) >= gift_ucd
      ? '신청하기'
      : is_apply
      ? 'UCD 부족'
      : '재고소진'
  return (
    <li>
      <div className={styles.gift_thumbnail}>
        <Image src={gift_image_url} alt="UCD" width={400} height={400} />
      </div>
      <div className={styles.gift_info}>
        <p>{gift_name}</p>
        <div className={styles.price_wrap}>
          <div className={styles.price}>
            <div>
              <Image src={IMAGE_URL.giftUcdIcon} alt="UCD icon" layout="fill" />
            </div>
            <strong>{gift_ucd.toLocaleString('ko-KR')}</strong>
            <button
              onClick={() => props.clickHandler(props.item)}
              className={
                is_apply && Number(balance) >= gift_ucd ? styles.active : ''
              }
              disabled={!is_apply || Number(balance) < gift_ucd}>
              {btnText}
            </button>
          </div>
        </div>
      </div>
    </li>
  )
}

export default function Gift() {
  const slideModalWrap = useRef(null)
  const slideModalContent = useRef(null)
  const slideModalBackdrop = useRef(null)
  const [accountToken, setAccountToken] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [balance, setBalance] = useState(0)
  const [gifts, setGifts] = useState([])
  const [quantity, setQuantity] = useState(1)
  const [selectedGiftUuid, setSelectedGiftUuid] = useState('')
  const [selectedGiftName, setSelectedGiftName] = useState('')
  const [selectedGiftPrice, setSelectedGiftPrice] = useState(0)
  const [displayApplyModal, setDisplayApplyModal] = useState(false)

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
      setAccountToken(jsonObj.account_token)

      if (jsonObj.account_token) {
        const options = {
          method: 'POST',
          body: JSON.stringify({account_token: jsonObj.account_token}),
        }
        fetch(process.env.NEXT_PUBLIC_GIFTS, options)
          .then((response) => response.json())
          .catch((error) => alert('회원 정보를 불러올 수 없습니다.'))
          .then((response) => {
            if (response.status === 0) {
              const {phone, ucd, list} = data.data
              setPhoneNumber(phone)
              setBalance(ucd)
              setGifts(list)
            } else {
              alert(getErrorMessage(response.status))
            }
          })
      }
    }
  }

  const handleClickSubmit = () => {
    const param = {
      account_token: accountToken,
      gift_uuid: selectedGiftUuid,
      gift_qty: quantity,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(param),
    }
    fetch(process.env.NEXT_PUBLIC_EXCHANGE_GIFT, options)
      .then((response) => response.json())
      .catch((error) => alert('신청 처리 중 오류가 발생햇습니다.'))
      .then((response) => {
        if (response.status === 0) {
          Router.push('/webview/v3.0/gift/complete')
        } else {
          alert(getErrorMessage(response.status))
        }
      })
  }

  const handleClickBtnApply = () => {
    fadeoutSlideModal()
    setDisplayApplyModal(true)
    documentOverflowHidden()
  }

  const handleClickBtnApplyCancel = () => {
    setDisplayApplyModal(false)
    documentOverflowAuto()
  }

  const handleClickGiftItem = (gift) => {
    setSelectedGiftUuid(gift.gift_uuid)
    setSelectedGiftName(gift.gift_name)
    setSelectedGiftPrice(gift.gift_ucd)
    setQuantity(1)
    slideModalWrap.current.style.display = 'block'
    slideModalBackdrop.current.style.display = 'block'
    slideDown(slideModalContent.current, 500)
    documentOverflowHidden()
  }

  const fadeoutSlideModal = () => {
    slideUp(slideModalContent.current, 500)
    slideModalBackdrop.current.style.display = 'none'
    slideModalWrap.current.style.display = 'none'
    documentOverflowAuto()
  }

  return (
    <section className={styles.gift}>
      <div className={styles.user_ucd}>
        <div className={styles.ucd}>
          <span>나의 보유 UCD</span>
          <Image
            src={IMAGE_URL.giftUcdIcon}
            width={17}
            height={17}
            alt="ucd icon"
          />
          <strong>{balance.toLocaleString('ko-KR')}</strong>
        </div>
      </div>
      <ul className={styles.gift_list}>
        {gifts.map((gift) => (
          <GiftItem
            key={gift.gift_uuid}
            item={gift}
            balance={balance}
            clickHandler={handleClickGiftItem}
          />
        ))}
      </ul>
      <div className={styles.footer}>
        <h5>
          <Image
            src={IMAGE_URL.tipIcon}
            alt="notice icon"
            width={17}
            height={17}
          />
          <span>꼭 확인해주세요.</span>
        </h5>
        <p>
          신청한 기프티콘, 야나두 평생 수강 패키지는 전주 월요일부터 일요일까지
          신청 기준으로 다음주 수요일 발송돼요.
        </p>
      </div>

      <div
        className={styles.bottom_modal_wrap}
        style={{display: 'none'}}
        ref={slideModalWrap}>
        <div
          className={`${styles.modal_content} ${styles.gift_quantity}`}
          style={{display: 'none'}}
          ref={slideModalContent}>
          <div className={styles.title}>{selectedGiftName}</div>
          <ul>
            <li>
              <strong>수량</strong>
              <span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity - 1)}
                  disabled={quantity <= 1}>
                  <Image
                    src={IMAGE_URL.minusIcon}
                    alt="마이너스"
                    width={20}
                    height={20}
                  />
                </button>
                <em>{quantity}</em>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  disabled={balance < (quantity + 1) * selectedGiftPrice}>
                  <Image
                    src={IMAGE_URL.plusIcon}
                    alt="플러스"
                    width={20}
                    height={20}
                  />
                </button>
              </span>
            </li>
            <li>
              <strong>사용 UCD</strong>
              <span>
                {(selectedGiftPrice * quantity).toLocaleString('ko-KR')} UCD
              </span>
            </li>
          </ul>
          <ol className={styles.btn_wrap}>
            <li>
              <Button
                type="button"
                color="default"
                size="md"
                radius="radius"
                clickHandler={fadeoutSlideModal}>
                취소
              </Button>
            </li>
            <li>
              <Button
                type="button"
                color="primary"
                size="md"
                radius="radius"
                clickHandler={handleClickBtnApply}>
                상품 교환 신청
              </Button>
            </li>
          </ol>
        </div>
        <div
          className={styles.modal_bg}
          style={{display: 'none'}}
          ref={slideModalBackdrop}></div>
      </div>

      {displayApplyModal && (
        <Modal size="md" radius="radius" position="center">
          <div className={styles.success}>
            {selectedGiftName}
            <br />
            상품 {quantity}개를 신청했어요.
            <br />
            {phoneNumber} 번호로
            <br />
            다음주 수요일 발송됩니다.
            <br />
            <br />
            <span>
              *번호가 다르다면, 나 &gt; 프로필 편집 &gt; 휴대폰
              <br />
              번호 인증을 통해 변경해주세요.
              <br />
              <br />
            </span>
            <div className={styles.btn_wrap}>
              <Button
                clickHandler={handleClickBtnApplyCancel}
                type="button"
                color="reversalDefault"
                size="sm"
                radius="radius">
                취소
              </Button>
              <Button
                clickHandler={handleClickSubmit}
                type="button"
                color="reversal"
                size="sm"
                radius="radius">
                신청
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  )
}

Gift.getLayout = function getLayout(page) {
  const props = {headers: {title: GOODS_EXCHANGE, headerType: FIXED}}
  return <WebviewLayout {...props}>{page}</WebviewLayout>
}
