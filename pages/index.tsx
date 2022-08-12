import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { getLocale } from '../utils/language'

const Index: NextPage = () => {

  const router = useRouter()

  useEffect(() => {
    router.push("/home", "/home", { locale: getLocale() })
  }, [])
  
  return (<></>)
}

export default Index
