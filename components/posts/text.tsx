
type PostsTextProps = {
    title: string,
    text: string
}

const PostsText = ({title, text}: PostsTextProps) => {
  
    return (
        <div className="lg:flex lg:flex-col lg:mt-2">
            <div className="flex justify-center lg:justify-start">
                <h1 className="text-lg font-medium text-center">{title}</h1>
            </div>
            <div className="flex justify-center mt-4">
                <p className="text-justify">{text}</p>
            </div>
        </div>
    )
  }
  
export default PostsText
  