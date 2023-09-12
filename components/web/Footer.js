import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import Image from 'next/image'
import Inner from './Inner'
import styles from '../../styles/layout/_web_footer.module.scss'

function Footer() {
  return (
    <footer className={styles.footer}>
      <Inner>
        <div className={styles.p_footer__site_group_list}>
          <ul className={styles.p_footer__info}>
            <li>
              <a onClick={() => Router.push('/web/v3.0/terms/latest')}>
                이용약관
              </a>
            </li>
            <li>
              <a onClick={() => Router.push('/web/v3.0/privacy/latest')}>
                개인정보처리방침
              </a>
            </li>
            <li>
              <Link href="mailto:help@youcandoo.co.kr">
                <a>contact us</a>
              </Link>
            </li>
          </ul>
          <div className={styles.p_footer__address}>
            <p className={styles.p_footer__company}>주식회사 야나두</p>
            <address>
              서울시 강남구 영동대로 96길 26, 3층(삼성동, Place 1)
            </address>
            <small className={styles.p_footer__copy}>
              Copyright © Yanadoo. All rights reserved.
            </small>
          </div>
        </div>
        <ul className={styles.p_footer__sns}>
          <li>
            <Link href="https://www.instagram.com/youcandoo.official/">
              <a target="_self">
                <Image
                  src="https://youcandoo.yanadoocdn.com/v3/web/assets/images/web_icon_instagram.svg"
                  alt="인스타그램 바로가기"
                  width={50}
                  height={50}
                />
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://www.facebook.com/youcandoo.official/">
              <a target="_self">
                <Image
                  src="https://youcandoo.yanadoocdn.com/v3/web/assets/images/web_btn_face_book.svg"
                  alt="페이스북 바로가기"
                  width={50}
                  height={50}
                />
              </a>
            </Link>
          </li>
        </ul>
      </Inner>
    </footer>
  )
}

export default Footer
