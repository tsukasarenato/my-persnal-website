import Image from 'next/image'
import me1 from '../../public/me1.jpg'
import me2 from '../../public/me2.jpg'
import me3 from '../../public/me3.jpg'
import profile from '../../public/profile.jpg'

const AboutImages = () => {
  
  const images = [me1, me2, me3, profile]

  return (
    <>
        {images.map((image, index) => (
            <div className='flex justify-center h-72' key={index}>
                <Image src={image} alt={'Me ' + index} />
            </div>
        ))}
    </>
  )
}

export default AboutImages
