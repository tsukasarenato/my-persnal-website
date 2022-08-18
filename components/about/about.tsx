import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { isMobile } from '../../utils/breakpoints'
import AboutLaptop from './laptop'
import AboutMobile from './mobile'

const About = () => {
  
  const [mobile, setMobile] = useState(false)

  const handleResize = () => {
    setMobile(isMobile())
  }

  useEffect(() => {
    setMobile(isMobile())
    addEventListener('resize', handleResize)
  },[])

  return (
    <>
        { mobile ?
            <AboutMobile />
          :
            <AboutLaptop />
        }
    </>
  )
}

export default About
