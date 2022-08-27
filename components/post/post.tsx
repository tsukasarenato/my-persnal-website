import Image, { StaticImageData } from 'next/image'

type PostProps = {
  title: string,
  image: StaticImageData,
  content: {
    subtitle: string, 
    paragraphs:  (JSX.Element | string)[]
  }[]
}

const Post = ({title, image, content} : PostProps) => {

  return (
    <div className='container mx-auto pb-96 sm:pb-32'>
        <div className='flex flex-col mt-10 mx-8 space-y-6'>
          <div className='flex justify-center'>
            <h1 className='text-2xl font-medium text-center'>{title}</h1>
          </div>
          <div className='flex justify-center mb-2'>
            <Image src={image} alt="kim kataguiri" />
          </div>
          {content.map(content => (
            <>
            <div className='flex justify-center'>
              <h1 className='text-xl font-medium text-center'>{ content.subtitle }</h1>
            </div>
            {content.paragraphs.map(paragraph => (
                <>
                {typeof paragraph === 'string' ?
                  <div className='flex justify-start bg-slate-200 p-4'>
                    <p className='whitespace-pre-wrap break-all'>{ paragraph }</p>
                  </div>
                :
                  <div className='flex justify-start'>
                    <p className='text-justify'>{ paragraph }</p>
                  </div>
                }
                </>
            ))}
            </>
          ))}
        </div>
    </div>
  )
}

export default Post
