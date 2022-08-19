
type PostsTextProps = {
    title: string,
    text: string
}

const PostsText = ({title, text}: PostsTextProps) => {
  
    return (
        <div className="flex flex-col mt-2">
            <div className="flex justify-start">
                <h1 className="text-lg font-medium">{title}</h1>
            </div>
            <div className="flex justify-center mt-4">
                <p>{text}</p>
            </div>
        </div>
    )
  }
  
export default PostsText
  