function isEmpty(value) {
  return (
    /** null or undefined **/
    value == null ||
    /** has length and it's zero **/
    (value.hasOwnProperty('length') && value.length === 0) ||
    /** is an Object and has no keys **/
    (value.constructor === Object && Object.keys(value).length === 0) ||
    (value.constructor === String && value.trim() === '')
  )
}

export function numberWithCommas(num) {
  return isEmpty(num) ? 0 : num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export function isValidPassword(testValue) {
  const regExp = /^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$/
  const regExp1 = /(0123)|(1234)|(2345)|(3456)|(4567)|(5678)|(6789)|(7890)/
  const regExp2 = /(\w)\1\1\1/

  return (
    regExp.test(testValue) &&
    !regExp1.test(testValue) &&
    !regExp2.test(testValue)
  )
}

export function isEmail(testValue) {
  const regExp =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
  return regExp.test(testValue)
}

export function isImage(obj) {
  const file = obj.files[0]
  const fileType = file['type']
  const imageTypes = ['image/jpeg', 'image/png']

  return imageTypes.indexOf(fileType) > -1
}

export function isOverSize(obj) {
  const maxSize = 50 * 1024 * 1024
  return obj.files[0].size > maxSize
}

export function initInputValue(obj) {
  obj.value = null
}

export function documentOverflowHidden() {
  document.body.style.overflow = 'hidden'
}

export function documentOverflowAuto() {
  document.body.style.overflow = 'auto'
}

export function getErrorMessage(status) {
  switch (Number(status)) {
    case 20004:
      return 'account_token 키가 존재하지 않음'
    case 20005:
      return 'store 값 없음'
    case 20006:
      return '만료된 account_token'
    case 20011:
      return '통합서버 PHP Error Return'
    case 20253:
      return 'QNA is_member 키가 존재하지 않음.'
    case 20254:
      return '삭제된 문의입니다.'
    case 20278:
      return '상품교환 gift_uuid 키가 존재하지 않음'
    case 20279:
      return '상품교환 qty 키가 존해하지 않음'
    case 20280:
      return '상품교환 신청 상품정보가 없음'
    case 20281:
      return '보유 UCD가 부족합니다.'
    case 20213:
      return 'UCD 선물함 받기 처리 오류'
    default:
      return '처리중 오류가 발생했습니다. 잠시 후 다시 시도 해주세요.'
  }
}

export function slideDown(target, duration = 500) {
  target.style.removeProperty('display')
  let display = window.getComputedStyle(target).display

  if (display === 'none') display = 'block'

  target.style.display = display
  let height = target.offsetHeight
  target.style.overflow = 'hidden'
  target.style.height = 0
  target.style.paddingTop = 0
  target.style.paddingBottom = 0
  target.style.marginTop = 0
  target.style.marginBottom = 0
  target.offsetHeight
  target.style.boxSizing = 'border-box'
  target.style.transitionProperty = 'height, margin, padding'
  target.style.transitionDuration = duration + 'ms'
  target.style.height = height + 'px'
  target.style.removeProperty('padding-top')
  target.style.removeProperty('padding-bottom')
  target.style.removeProperty('margin-top')
  target.style.removeProperty('margin-bottom')
  window.setTimeout(() => {
    target.style.removeProperty('height')
    target.style.removeProperty('overflow')
    target.style.removeProperty('transition-duration')
    target.style.removeProperty('transition-property')
  }, duration)
}

export function slideUp(target, duration = 500) {
  target.style.transitionProperty = 'height, margin, padding'
  target.style.transitionDuration = duration + 'ms'
  target.style.boxSizing = 'border-box'
  target.style.height = target.offsetHeight + 'px'
  target.offsetHeight
  target.style.overflow = 'hidden'
  target.style.height = 0
  target.style.paddingTop = 0
  target.style.paddingBottom = 0
  target.style.marginTop = 0
  target.style.marginBottom = 0
  window.setTimeout(() => {
    target.style.display = 'none'
    target.style.removeProperty('height')
    target.style.removeProperty('padding-top')
    target.style.removeProperty('padding-bottom')
    target.style.removeProperty('margin-top')
    target.style.removeProperty('margin-bottom')
    target.style.removeProperty('overflow')
    target.style.removeProperty('transition-duration')
    target.style.removeProperty('transition-property')
  }, duration)
}
