import {useEffect} from 'react'
import {useRouter} from 'next/router'

export default function Privacy() {
  const router = useRouter()
  useEffect(() => {
    router.push('/view/v3.0/privacy/latest')
  })
  return <></>
}
