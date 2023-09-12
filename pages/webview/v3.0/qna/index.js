import React, {useEffect, useState, useRef} from 'react'
import Image from 'next/image'
import Router from 'next/router'
import WebviewLayout from '../../../../components/webview/Layout'
import {INQUIRY, FIXED, IMAGE_URL} from '../../../../utils/constant'
import styles from '../../../../styles/page/_app_qna.module.scss'
import InputWrapper from '../../../../components/webview/InputWrapper'
import Button from '../../../../components/webview/Button'
import Modal from '../../../../components/webview/Modal'
import {osType} from '../../../../utils/call_native'
import {
  documentOverflowAuto,
  documentOverflowHidden,
  getErrorMessage,
  isImage,
  isOverSize,
  initInputValue,
  isEmail,
  isValidPassword,
} from '../../../../utils/utils'
import sha512 from 'crypto-js/sha512'

const InquiryItem = (props) => {
  const {idx, title, status, is_attach, created} = props.item
  return (
    <li>
      <a onClick={() => Router.push(`/webview/v3.0/qna/detail/${idx}`)}>
        상세보기
      </a>
      <div className={styles.title}>
        <span>{created}</span>
        <strong>
          {title}
          {is_attach && (
            <i>
              <Image
                src={IMAGE_URL.attachmentIcon}
                alt="첨부파일"
                layout="fill"
              />
            </i>
          )}
        </strong>
      </div>
      <span
        className={`${styles.icon_answer} ${
          status === '대기' ? '' : styles.complete
        }`}>
        {status}
      </span>
    </li>
  )
}

function scrollToElement(_offsetTop) {
  window.scrollTo({
    top: _offsetTop - 80,
    behavior: 'smooth',
  })
}

let isLogin = false
let attachmentStore = []

export default function Qna() {
  const nameInput = useRef(null)
  const passwordInput = useRef(null)
  const emailInput = useRef(null)
  const inquiryTypeSelect = useRef(null)
  const titleInput = useRef(null)
  const contentInput = useRef(null)
  const replyEmailInput = useRef(null)
  const privacyInput = useRef(null)
  const loginEmailInput = useRef(null)
  const loginPasswordInput = useRef(null)

  const [activeTabIdx, setActiveTabIdx] = useState(0)
  const [displayPrivacy, setDisplayPrivacy] = useState(false)
  const [displayApplied, setDisplayApplied] = useState(false)
  const [accountToken, setAccountToken] = useState('')
  const [profileUuid, setProfileUuid] = useState('')
  const [appVersion, setAppVersion] = useState('')
  const [osVersion, setOsVersion] = useState('')
  const [device, setDevice] = useState('')
  const [name, setName] = useState('')
  const [nameError, setNameError] = useState(false)
  const [password, setPassword] = useState('')
  const [displayPassword, setDisplayPassword] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [nickname, setNickname] = useState('')
  const [inquiryType, setInquiryType] = useState('')
  const [inquiryTypeError, setInquiryTypeError] = useState(false)
  const [title, setTitle] = useState('')
  const [titleLength, setTitleLength] = useState(0)
  const [titleError, setTitleError] = useState(false)
  const [content, setContent] = useState('')
  const [contentLength, setContentLength] = useState(0)
  const [contentError, setContentError] = useState(false)
  const [chkReplyEmail, setChkReplyEmail] = useState(false)
  const [replyEmail, setReplyEmail] = useState('')
  const [disabledReplyEmail, setDisabledReplyEmail] = useState(true)
  const [replyEmailError, setReplyEmailError] = useState(false)
  const [chkPrivacy, setChkPrivacy] = useState(false)
  const [chkPrivacyError, setChkPrivacyError] = useState(false)
  const [attachmentCount, setAttachmentCount] = useState(0)
  const [attachments, setAttachments] = useState([])

  const [loginEmail, setLoginEmail] = useState('')
  const [loginEmailError, setLoginEmailError] = useState(false)
  const [loginPassword, setLoginPassword] = useState('')
  const [loginPasswordError, setLoginPasswordError] = useState(false)
  const [inquiries, setInquiries] = useState([])

  useEffect(() => {
    document.querySelector('body').classList.add('body')
    setAccountToken(sessionStorage.getItem('account_token') ?? '')
    setAppVersion(sessionStorage.getItem('app_version') ?? '')
    setOsVersion(sessionStorage.getItem('os_version') ?? '')
    setDevice(sessionStorage.getItem('device') ?? '')
    isLogin =
      sessionStorage.getItem('account_token') ||
      (sessionStorage.getItem('login_email') &&
        sessionStorage.getItem('login_password'))
        ? true
        : false

    const tabIdx = sessionStorage.getItem('qna_tab_idx') ?? 0
    handleClickTab(Number(tabIdx))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleClickTab = (idx) => {
    sessionStorage.setItem('qna_tab_idx', idx)
    setActiveTabIdx(idx)
    switch (idx) {
      case 1:
        if (isLogin) {
          const param = {
            is_member:
              accountToken || sessionStorage.getItem('account_token')
                ? 'Y'
                : 'N',
          }
          if (accountToken || sessionStorage.getItem('account_token')) {
            param['profile_uuid'] =
              sessionStorage.getItem('profile_uuid') ?? profileUuid
          } else {
            param['email'] = sessionStorage.getItem('login_email') ?? loginEmail
            param['password'] =
              sessionStorage.getItem('login_password') ??
              sha512(loginPassword).toString()
          }
          const options = {
            method: 'POST',
            body: JSON.stringify(param),
          }
          fetch(process.env.NEXT_PUBLIC_INQUIRIES, options)
            .then((response) => response.json())
            .catch((error) => alert('목록을 불러오는 중 오류가 발생했습니다.'))
            .then((response) => {
              if (response.status === 0) {
                setInquiries(response.data.list)
              } else {
                alert(getErrorMessage(response.status))
              }
            })
        }
        break
      default:
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
    }
  }

  const getDeviceInfo = (obj) => {
    if (obj) {
      const jsonObj = JSON.parse(obj)
      setAccountToken(jsonObj.account_token)
      setAppVersion(jsonObj.app_version)
      setOsVersion(jsonObj.os_version)
      setDevice(jsonObj.device)

      sessionStorage.setItem('app_version', jsonObj.app_version)
      sessionStorage.setItem('os_version', jsonObj.os_version)
      sessionStorage.setItem('device', jsonObj.device)

      if (jsonObj.account_token) {
        isLogin = true
        sessionStorage.setItem('account_token', jsonObj.account_token)
        const options = {
          method: 'POST',
          body: JSON.stringify({account_token: jsonObj.account_token}),
        }
        fetch(process.env.NEXT_PUBLIC_PROFILE, options)
          .then((response) => response.json())
          .catch((error) => alert('회원 정보를 불러올 수 없습니다.'))
          .then((response) => {
            if (response.status === 0) {
              const {nickname, profile_uuid} = response.data
              setNickname(nickname)
              setProfileUuid(profile_uuid)
            } else {
              alert(getErrorMessage(response.status))
            }
          })
      }
    }

    // setAccountToken('ACT-D8D90EA6-C0AA-E124-1C1A-9883B37EA594')
    // const options = {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     account_token: 'ACT-D8D90EA6-C0AA-E124-1C1A-9883B37EA594',
    //   }),
    // }
    // fetch(
    //   'https://developmentapi.youcandoo.co.kr/v3.0/webview/qna/get/profile',
    //   options
    // )
    //   .then((response) => response.json())
    //   .catch((error) => alert('회원 정보를 불러올 수 없습니다.'))
    //   .then((response) => {
    //     if (response.status === 0) {
    //       const {nickname, profile_uuid} = response.data
    //       setNickname(nickname)
    //       setProfileUuid(profile_uuid)
    //       isLogin = true
    //     } else {
    //       alert(getErrorMessage(response.status))
    //     }
    //   })
  }

  const handleKeyupInputElement = (e, target) => {
    if (e.keyCode === 13) {
      target.focus()
    }
  }

  const handleLogin = () => {
    if (!loginEmail) {
      setLoginEmailError(true)
      loginEmailInput.current.focus()
      return false
    }
    if (!loginPassword) {
      setLoginPasswordError(true)
      loginPasswordInput.current.focus()
      return false
    }

    const param = {
      is_member: 'N',
      email: loginEmail,
      password: sha512(loginPassword).toString(),
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(param),
    }
    fetch(process.env.NEXT_PUBLIC_INQUIRIES, options)
      .then((response) => response.json())
      .catch((error) => alert('목록을 불러오는 중 오류가 발생했습니다.'))
      .then((response) => {
        if (response.status === 0) {
          isLogin = true
          sessionStorage.setItem('login_email', loginEmail)
          sessionStorage.setItem(
            'login_password',
            sha512(loginPassword).toString()
          )
          setInquiries(response.data.list)
        } else {
          alert(getErrorMessage(response.status))
        }
      })
  }

  const handleAttachment = (e) => {
    const target = e.target
    if (target.files[0]) {
      if (!isImage(target)) {
        alert('지원하지 않는 파일 형식입니다.')
        initInputValue(target)
        return
      }

      if (isOverSize(target)) {
        alert('최대 10mb까지 등록 가능합니다.')
        initInputValue(target)
        return
      }

      setPreview(target.files[0])
    }
  }

  function setPreview(file) {
    let reader = new FileReader()

    reader.addEventListener(
      'load',
      function () {
        const obj = {
          name: file.name,
          data: this.result,
          file: file,
        }
        attachmentStore.push(obj)
        setAttachments(attachmentStore)
        setAttachmentCount(attachmentStore.length)
      },
      false
    )

    reader.readAsDataURL(file)
  }

  const handleDeletePreview = (_index) => {
    attachmentStore.splice(_index, 1)
    setAttachmentCount(attachmentStore.length)
    setAttachments(attachmentStore)
  }

  const handleSubmitInquiry = () => {
    if (!accountToken && !name) {
      setNameError(true)
      scrollToElement(nameInput.current.parentElement.offsetTop)
      nameInput.current.focus()
      return false
    }
    if ((!accountToken && !email) || emailError) {
      setEmailError(true)
      scrollToElement(emailInput.current.parentElement.offsetTop)
      emailInput.current.focus()
      return false
    }
    if ((!accountToken && !password) || passwordError) {
      setPasswordError(true)
      scrollToElement(passwordInput.current.parentElement.offsetTop)
      passwordInput.current.focus()
      return false
    }
    if (!inquiryType) {
      setInquiryTypeError(true)
      scrollToElement(inquiryTypeSelect.current.parentElement.offsetTop)
      return false
    }
    if (!title) {
      setTitleError(true)
      scrollToElement(titleInput.current.parentElement.offsetTop)
      titleInput.current.focus()
      return false
    }
    if (!content) {
      setContentError(true)
      scrollToElement(contentInput.current.parentElement.offsetTop)
      contentInput.current.focus()
      return false
    }
    if (accountToken && chkReplyEmail && (!replyEmail || replyEmailError)) {
      setReplyEmailError(true)
      scrollToElement(replyEmailInput.current.parentElement.offsetTop)
      replyEmailInput.current.focus()
      return false
    }
    if (!accountToken && !chkPrivacy) {
      setChkPrivacyError(true)
      scrollToElement(privacyInput.current.parentElement.offsetTop)
      return false
    }

    if (confirm('등록 하시겠습니까?')) {
      attachmentStore.length > 0 ? execUploadAttachment() : submitInquiry()
    }
  }

  const execUploadAttachment = () => {
    let formData = new FormData()
    attachmentStore.map((attachment) =>
      formData.append('file', attachment.file)
    )
    const options = {
      method: 'POST',
      body: formData,
    }
    fetch(process.env.FILE_UPLOADER_URL, options)
      .then((response) => response.json())
      .catch((error) => alert('파일 등록 실패.'))
      .then((response) => {
        response.status === 0
          ? submitInquiry(response.image_urls)
          : alert(getErrorMessage(response.msg))
      })
  }

  const submitInquiry = (attachmentsUrl) => {
    const param = {
      is_member: accountToken ? 'Y' : 'N',
      qna_type: inquiryType,
      email: accountToken ? replyEmail : email,
      title: title,
      contents: content,
      app_version: appVersion,
      os_version: osVersion,
      device: device,
    }

    if (attachmentsUrl) {
      const attachParam = attachmentsUrl.map((url) => {
        return {
          contents_type: 'image',
          path: url,
        }
      })

      param['attach'] = attachParam
    }

    if (accountToken) {
      param['is_email'] = chkReplyEmail ? 'Y' : 'N'
      param['profile_uuid'] = profileUuid
    } else {
      param['name'] = name
      param['password'] = sha512(password).toString()
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(param),
    }
    fetch(process.env.NEXT_PUBLIC_CREATE_INQUIRY, options)
      .then((response) => response.json())
      .catch((error) => alert('처리 중 오류가 발생했습니다.'))
      .then((response) => {
        if (response.status === 0) {
          setDisplayApplied(true)
          documentOverflowHidden()
          if (!accountToken) {
            isLogin = false
            setName('')
            setEmail('')
            setPassword('')
            setChkPrivacy(false)
            sessionStorage.setItem('login_email', '')
            sessionStorage.setItem('login_password', '')
          }
          setTitle('')
          setContent('')
          attachmentStore.length = 0
          setAttachments(attachmentStore)
          setAttachmentCount(attachmentStore.length)
        } else {
          alert(getErrorMessage(response.status))
        }
      })
  }

  return (
    <section className={styles.qna}>
      <ul className={styles.qna_tab}>
        <li className={activeTabIdx === 0 ? styles.active : ''}>
          <button type="button" onClick={() => handleClickTab(0)}>
            1:1 문의하기
          </button>
        </li>
        <li className={activeTabIdx === 1 ? styles.active : ''}>
          <button type="button" onClick={() => handleClickTab(1)}>
            문의내역
          </button>
        </li>
      </ul>
      {activeTabIdx === 0 && (
        <article className={styles.qna_create}>
          {!accountToken && (
            <React.Fragment>
              <InputWrapper
                title="이름"
                message="이름을 입력해주세요."
                error={nameError}>
                <div className={styles.input_wrap}>
                  <input
                    ref={nameInput}
                    type="text"
                    placeholder="이름을 입력해주세요"
                    onChange={(e) => {
                      const inputValue = e.target.value.trim()
                      setName(inputValue)
                      setNameError(!inputValue)
                    }}
                    onKeyUp={(e) =>
                      handleKeyupInputElement(e, emailInput.current)
                    }
                  />
                </div>
              </InputWrapper>
              <InputWrapper
                title="이메일"
                message="이메일 형식으로 입력해주세요."
                error={emailError}>
                <div className={styles.input_wrap}>
                  <input
                    ref={emailInput}
                    type="email"
                    placeholder="이메일을 입력해주세요"
                    onChange={(e) => {
                      const inputValue = e.target.value.trim()
                      setEmail(inputValue)
                      setEmailError(!inputValue || !isEmail(inputValue))
                    }}
                    onPaste={(e) => {
                      const inputValue = e.target.value.trim()
                      setEmail(inputValue)
                      setEmailError(!inputValue || !isEmail(inputValue))
                    }}
                    onKeyUp={(e) =>
                      handleKeyupInputElement(e, passwordInput.current)
                    }
                  />
                </div>
              </InputWrapper>
              <InputWrapper
                title="비밀번호"
                message="8자리 이상 영문, 숫자, 특수문자로 입력해주세요."
                password={true}
                error={passwordError}>
                <div className={styles.input_wrap}>
                  <input
                    ref={passwordInput}
                    type={displayPassword ? 'text' : 'password'}
                    placeholder="비밀번호 입력해주세요"
                    onChange={(e) => {
                      const inputValue = e.target.value.trim()
                      setPassword(inputValue)
                      setPasswordError(
                        !inputValue || !isValidPassword(inputValue)
                      )
                    }}
                    onKeyUp={(e) =>
                      handleKeyupInputElement(e, titleInput.current)
                    }
                  />
                  <i
                    className={`${styles.eye} ${
                      displayPassword ? styles.eye_on : styles.eye_off
                    }`}
                    onClick={(e) => {
                      setDisplayPassword(!displayPassword)
                    }}></i>
                </div>
              </InputWrapper>
            </React.Fragment>
          )}
          {accountToken && (
            <InputWrapper title="닉네임">
              <div className={styles.input_wrap}>
                <input type="text" readOnly value={nickname} />
              </div>
            </InputWrapper>
          )}
          <InputWrapper
            title="문의유형"
            message="문의유형을 선택해주세요."
            error={inquiryTypeError}>
            <div className={styles.select_wrap}>
              <select
                ref={inquiryTypeSelect}
                defaultValue=""
                onChange={(e) => {
                  const selectedValue = e.target.value
                  setInquiryType(selectedValue)
                  setInquiryTypeError(!selectedValue)
                }}>
                <option value="" disabled hidden>
                  문의유형을 선택해주세요
                </option>
                <option value="회원정보">회원정보</option>
                <option value="이용안내">이용안내</option>
                <option value="두잇 참여/개설">두잇 참여/개설</option>
                <option value="UCD">UCD</option>
                <option value="오류/불편">오류/불편</option>
                <option value="이벤트">이벤트</option>
                <option value="제휴">제휴</option>
                <option value="기타">기타</option>
              </select>
            </div>
          </InputWrapper>

          <InputWrapper
            title="제목"
            message="제목을 입력해주세요."
            error={titleError}>
            <div className={styles.input_wrap}>
              <strong>{titleLength}/50</strong>
              <input
                ref={titleInput}
                type="text"
                placeholder="제목을 입력해주세요."
                maxLength={50}
                onChange={(e) => {
                  const inputValue = e.target.value.trim()
                  setTitle(inputValue)
                  setTitleLength(e.target.value.length)
                  setTitleError(!inputValue)
                }}
                onKeyUp={(e) =>
                  handleKeyupInputElement(e, contentInput.current)
                }
              />
            </div>
          </InputWrapper>

          <InputWrapper
            title="내용"
            message="내용을 입력해주세요."
            error={contentError}>
            <div className={styles.input_wrap}>
              <strong>{contentLength}/500</strong>
              <textarea
                ref={contentInput}
                placeholder="자세히 설명해 주실수록 더 정확하고 빠른 답변을 받아보실 수 있어요"
                maxLength={500}
                onChange={(e) => {
                  const inputValue = e.target.value.trim()
                  setContent(inputValue)
                  setContentLength(e.target.value.length)
                  setContentError(!inputValue)
                }}></textarea>
            </div>
          </InputWrapper>

          <InputWrapper title="사진첨부">
            <div className={styles.file_upload_wrap}>
              {attachmentCount < 3 && (
                <div className={styles.file_wrap}>
                  <div className={styles.upload_wrap}>
                    <label htmlFor="attachment">
                      <div className={styles.file_length}>
                        <div>
                          <Image
                            src={IMAGE_URL.attachmentAddIcon}
                            alt="사진첨부"
                            layout="fill"
                            accept="image/png, image/jpeg"
                          />
                        </div>
                        <em className={styles.file_count}>
                          사진 {attachmentCount}/3
                        </em>
                      </div>
                    </label>
                    <input
                      id="attachment"
                      type="file"
                      name="attachment"
                      accept="image/png, image/jpeg"
                      onChange={(e) => handleAttachment(e)}
                    />
                  </div>
                </div>
              )}
              <div className={styles.free_view_wrap}>
                {attachments.map((attachment, index) => (
                  <div key={index}>
                    <Image
                      unoptimized
                      src={attachment.data}
                      alt="첨부파일 미리보기"
                      layout="fill"
                    />
                    <i onClick={() => handleDeletePreview(index)}>
                      <Image
                        src={IMAGE_URL.attachmentDeleteIcon}
                        alt="첨부파일 삭제"
                        layout="fill"
                      />
                    </i>
                  </div>
                ))}
              </div>
            </div>
            <span className={styles.desc}>
              * 이미지는 10MB 이내, 3개까지 첨부 가능합니다. (jpg, png)
            </span>
          </InputWrapper>
          {accountToken && (
            <InputWrapper
              message="이메일 형식으로 입력해주세요."
              error={replyEmailError}>
              <div className={styles.checkbox_wrap}>
                <input
                  type="checkbox"
                  id="chkReplyEmail"
                  onChange={(e) => {
                    const isChecked = e.target.checked
                    setChkReplyEmail(isChecked)
                    setDisabledReplyEmail(!isChecked)
                    setReplyEmailError(false)
                    setReplyEmail('')
                    isChecked
                      ? replyEmailInput.current.focus()
                      : (replyEmailInput.current.value = '')
                  }}
                />
                <label htmlFor="chkReplyEmail">
                  <i></i>
                  이메일로 답변받기
                </label>
              </div>
              <div className={styles.input_wrap}>
                <input
                  ref={replyEmailInput}
                  type="email"
                  placeholder="답변받을 이메일 주소를 입력해주세요"
                  onChange={(e) => {
                    const inputValue = e.target.value.trim()
                    setReplyEmail(inputValue)
                    setReplyEmailError(!inputValue || !isEmail(inputValue))
                  }}
                  disabled={disabledReplyEmail}
                />
              </div>
            </InputWrapper>
          )}
          {!accountToken && (
            <InputWrapper
              message="개인 정보 수집 및 이용에 동의해주세요."
              error={chkPrivacyError}>
              <div className={styles.checkbox_wrap}>
                <input
                  ref={privacyInput}
                  type="checkbox"
                  name="chk-privacy"
                  id="chkPrivacy"
                  onChange={(e) => {
                    const isChecked = e.target.checked
                    setChkPrivacy(isChecked)
                    setChkPrivacyError(!isChecked)
                  }}
                />
                <label htmlFor="chkPrivacy">
                  <i></i>
                  <button
                    type="button"
                    onClick={() => {
                      setDisplayPrivacy(true)
                      documentOverflowHidden()
                    }}>
                    개인정보 수집 및 이용동의
                  </button>
                </label>
              </div>
            </InputWrapper>
          )}

          <div className="bottom_fix">
            <Button
              type="button"
              color="primary"
              size="lg"
              clickHandler={handleSubmitInquiry}>
              문의하기
            </Button>
          </div>
        </article>
      )}

      {activeTabIdx === 1 && (
        <div className={styles.qna_history}>
          {!isLogin && (
            <article className={styles.qna_history_guest}>
              <div className={styles.guest_top}>
                <Image
                  src={IMAGE_URL.inquiryGuestLogin}
                  alt="회원정보 없음"
                  width={102}
                  height={102}
                />
                <p>
                  비회원으로 문의하셨나요? <br />
                  입력하신 이메일과 비밀번호로 조회할 수 있어요.
                  <br />
                  <br />
                  회원이라면 로그인 후 이용해주세요.
                </p>
              </div>

              <InputWrapper
                message={'이메일 형식으로 입력해주세요.'}
                error={loginEmailError}>
                <div className={styles.input_wrap}>
                  <input
                    ref={loginEmailInput}
                    type="email"
                    placeholder="이메일을 입력해주세요"
                    onChange={(e) => {
                      const inputValue = e.target.value.trim()
                      setLoginEmail(inputValue)
                      setLoginEmailError(!inputValue || !isEmail(inputValue))
                    }}
                  />
                </div>
              </InputWrapper>

              <InputWrapper
                message={'8자리 이상 영문, 숫자, 특수문자로 입력해주세요.'}
                error={loginPasswordError}>
                <div className={styles.input_wrap}>
                  <input
                    ref={loginPasswordInput}
                    type="password"
                    placeholder="비밀번호 입력해주세요"
                    onChange={(e) => {
                      const inputValue = e.target.value.trim()
                      setLoginPassword(inputValue)
                      setLoginPasswordError(
                        !inputValue || !isValidPassword(inputValue)
                      )
                    }}
                  />
                </div>
              </InputWrapper>

              <div className="bottom_fix">
                <Button
                  type="button"
                  color="primary"
                  size="lg"
                  clickHandler={handleLogin}>
                  조회하기
                </Button>
              </div>
            </article>
          )}
          {isLogin && (
            <article className={styles.qna_history_list}>
              <ul>
                {inquiries.map((inquiry) => (
                  <InquiryItem key={inquiry.idx} item={inquiry} />
                ))}
              </ul>
            </article>
          )}
        </div>
      )}

      {displayPrivacy && (
        <Modal
          title="개인정보 수집 및 이용동의 안내"
          desc="원활한 문의 상담을 위해 꼭 필요한 정보만을 수집하고 있어요. 아래 내용을 확인하시고 동의해주세요."
          size="lg"
          radius="radius"
          position="center">
          <div className={styles.privacy}>
            <dl>
              <dt>수집 이용·목적</dt>
              <dd>문의하기</dd>
            </dl>
            <dl>
              <dt>수집 항목</dt>
              <dd>이름, 이메일, 비밀번호</dd>
            </dl>
            <dl>
              <dt>보유 기간</dt>
              <dd>전자상거래 등에서의 소비자 보호에 관한 법률에 따라 3년</dd>
            </dl>
          </div>
          <Button
            type="button"
            color="primary"
            size="lg"
            radius="radius"
            clickHandler={() => {
              setDisplayPrivacy(false)
              documentOverflowAuto()
            }}>
            확인
          </Button>
        </Modal>
      )}
      {displayApplied && (
        <Modal size="md" position="center">
          <div className={styles.success}>
            1:1 문의가 접수되었어요!
            <br />
            조금만 기다려 주세요.
          </div>
          <Button
            type="button"
            color="reversal"
            size="lg"
            radius="radius"
            clickHandler={() => {
              setDisplayApplied(false)
              documentOverflowAuto()
              handleClickTab(1)
            }}>
            확인
          </Button>
        </Modal>
      )}
    </section>
  )
}

Qna.getLayout = function getLayout(page) {
  const props = {headers: {title: INQUIRY, headerType: FIXED}}
  return <WebviewLayout {...props}>{page}</WebviewLayout>
}
