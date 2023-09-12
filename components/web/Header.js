import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Inner from './Inner'
import styles from '../../styles/layout/_web_header.module.scss'

function Header(props) {
  const [active, setActive] = useState('')

  const toggleActive = () => {
    window.pageYOffset >= 20 ? setActive(styles.active) : setActive('')
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleActive)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <header
      className={`${styles.header} ${active} ${
        props.headerType === 'transparent' ? '' : styles.custom
      }`}>
      <Inner>
        <h1>
          <Link href="/web/v3.0/main">
            <a>
              {props.headerType === 'transparent' ? (
                <Image
                  src="https://youcandoo.yanadoocdn.com/v3/web/assets/images/web_logo.svg"
                  alt="로고"
                  width={100}
                  height={100}
                />
              ) : (
                <Image
                  src="https://youcandoo.yanadoocdn.com/v3/web/assets/images/web_logo_blue.svg"
                  alt="로고"
                  width={100}
                  height={100}
                />
              )}
            </a>
          </Link>
        </h1>
      </Inner>
    </header>
  )
}

export default Header
