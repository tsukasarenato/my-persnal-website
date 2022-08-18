import Image from 'next/image'
import profile from '../../public/profile.jpg'

const Welcome = () => {
    
    return (
        <div className='flex flex-col sm:grid sm:grid-cols-5'>
            <div className='flex justify-center'>
                <div className='h-28 w-28 mt-4'>
                    <Image src={profile} alt='Pictore of author' className='rounded-full' />
                </div>
            </div>
            <div className='sm:container sm:col-span-4 mt-8'>
                <div className='flex justify-center sm:justify-start'>
                    <h1 className='text-xl font-medium'>Renato Gonçalves Rodrigues: </h1>
                </div>
                <div className='flex justify-center mt-2'>
                    <h2 className='text-lg font-medium text-center'>Hello everyone, welcome to my website here I share my knowledge and experience in the technology area.</h2>
                </div>
            </div>
        </div>
    )

  /*return (
    <div className='grid grid-cols-5'>
        <div className='flex justify-center'>
            <div className='h-28 w-28 mt-4'>
                <Image src={profile} alt='Pictore of author' className='rounded-full' />
            </div>
        </div>
        <div className='container col-span-4 mt-8'>
            <div className='flex justify-start'>
                <h1 className='text-xl font-medium'>Renato Gonçalves Rodrigues: </h1>
            </div>
            <div className='flex justify-center mt-2'>
                <h2 className='text-lg font-medium'>Hello everyone, welcome to my website here I share my knowledge and experience in the technology area.</h2>
            </div>
        </div>
    </div>
  )*/
}

export default Welcome
