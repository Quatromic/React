import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min"
import useFetch from "./useFetch"

const BlogDetails = () => {
    const { id } = useParams()
    const {data : blog,isLoading,Error} = useFetch('http://localhost:3000/blogs/' + id)
    const history = useHistory()
    console.log("http://localhost:3000/blogs/" + id)

    const handleClick = () => {
        fetch('http://localhost:3000/blogs/' + blog.id,{
            method: "DELETE"
        }).then(() => {
            history.push('/')
        })
    }
    
    return(
        <div>
            {isLoading && <div>Loading</div>}
            {Error && <div>{Error}</div>}
            {blog && (
                <article>
                    <h2>{blog?.title}</h2>
                    <p>{blog?.author}</p>
                    <div>
                        <p>{blog?.body}</p>
                    </div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    )
}

export default BlogDetails