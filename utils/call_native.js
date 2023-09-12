import {NO_DEVICE_INFO} from './constant'

export function closeWebviewAos() {
  try {
    window.webview.closeview()
  } catch (e) {
    alert(e.message)
  }
}

export function closeWebviewIos() {
  try {
    const param = {action: {pageType: 'webview_close'}}
    callIso(param)
  } catch (e) {
    alert(e.message)
  }
}

export function historyBackWebviewAos() {
  try {
    window.webview.webviewback()
  } catch (e) {
    alert(e.message)
  }
}

export function historyBackWebviewIos() {
  try {
    const param = {action: {pageType: 'webview_back'}}
    callIso(param)
  } catch (e) {
    alert(e.message)
  }
}

export function shareReferralCode(obj) {
  const thumbnail =
    'https://youcandoo.yanadoocdn.com/v3/youcandoo/assets/images/webviewimg/v3/invite_kakao_share.png'
  const title = '함께하는 목표달성 커뮤니티 유캔두'
  const description =
    '당신이 결심한 모든 것! 친구와 같이하면 해낼 수 있어요. 오늘부터 시작해볼까요?'
  const buttonname = '지금 바로 시작하기'
  const url = 'invite_friend'
  switch (osType()) {
    case 'aos':
      try {
        const aosParams = {
          thumbnail: thumbnail,
          title: title,
          description: description,
          pageType: '',
          url: url,
          type: obj.type,
          buttonname: buttonname,
          invite_code: obj.referralCode,
        }
        window.webview.webviewlinkshare(JSON.stringify(aosParams))
      } catch (e) {
        console.log(e.message)
      }
      break
    case 'ios':
      try {
        const iosParams = {
          share: {
            pageType: '',
            pageValue: {
              url: url,
            },
            title: title,
            image: thumbnail,
            description: description,
            type: obj.type,
            buttonname: buttonname,
            utm_campaign: 'event',
            invite_code: obj.referralCode,
          },
        }
        callIso(iosParams)
      } catch (e) {
        console.log(e.message)
      }
  }
}

export function osType() {
  const userAgentOsType = navigator.userAgent.toLowerCase()
  if (userAgentOsType.indexOf('android') > -1) return 'aos'
  else if (
    userAgentOsType.indexOf('iphone') > -1 ||
    userAgentOsType.indexOf('ipad') > -1
  )
    return 'ios'
  else return ''
}

function callIso(param) {
  try {
    window.webkit.messageHandlers.osCallbackHandler.postMessage(
      JSON.stringify(param)
    )
  } catch (e) {
    console.log(e.message)
  }
}
