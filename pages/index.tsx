import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { getNavigatorLanguage } from '../utils/translator'

const Index: NextPage = () => {

  const router = useRouter()

  useEffect(() => {
    router.push("/home", "/home", { locale: getNavigatorLanguage() })
  }, [])
  
  return (<></>)
}

export default Index
