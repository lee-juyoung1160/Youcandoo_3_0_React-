import {useEffect} from 'react'
import {useRouter} from 'next/router'

export default function Terms() {
  const router = useRouter()
  useEffect(() => {
    router.push('/webview/v3.0/terms/latest')
  })
  return <></>
}
