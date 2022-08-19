import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { getNavigatorLanguage } from '../utils/translator'

const Index: NextPage = () => {

  const { push } = useRouter()

  useEffect(() => {
    push("/home", "/home", { locale: getNavigatorLanguage() })
  }, [push])
  
  return (<></>)
}

export default Index
