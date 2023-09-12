import {useEffect} from 'react'
import {useRouter} from 'next/router'

export default function Custom404() {
  const router = useRouter()
  useEffect(() => {
    const pathName = window.location.pathname
    const isWebview = pathName.startsWith('/webview')
    isWebview
      ? router.push('/webview/v3.0/error')
      : router.push('/web/v3.0/error')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return <></>
}
