import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import LaptopMenu from '../components/menu/laptop'
import { getMenuLabels, getNavigatorLanguage } from '../utils/translator'

const Index: NextPage = () => {

  const { push } = useRouter()

  const labels = getMenuLabels('en')
  const menus = labels.map(label => (
    {label: label.name, page: label.page, clicked: false, locale: 'en'}
  ))

  useEffect(() => {
    push("/home", "/home", { locale: getNavigatorLanguage() })
  }, [push])
  
  return (
    <>
      <noscript>
        <LaptopMenu menus={menus} languages={[]} />
      </noscript>
    </>
  )
}

export default Index
