import { useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

const Create = () => {
    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")
    const [author,setAuthor] = useState("yoshi")
    const [isLoading,setLoading] = useState(false)
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = {title,body,author}
        
        setLoading(true)

        fetch('http://localhost:3000/blogs/',{
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("Blog added")
            setLoading(false)
            history.push('/')
        })
    }

    return(
        <div className="form">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit} className="form-blog">
                <label htmlFor="title">Blog Title</label>
                <input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <br/>
                <label>Blog Body: </label>
                <br/>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <br/>
                <label>Blog author: </label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="yoshi">Yoshi</option>
                    <option value="mario">Mario</option>
                </select>
                <br/>
                <button>Add blog</button>
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
    )
}

export default Create