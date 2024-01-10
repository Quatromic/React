import { Link } from "react-router-dom/cjs/react-router-dom.min"

const Bloglist = ({blogs,title}) => {
    return ( 
        <>
            <h1 className="blogs">{title}</h1>  
            {blogs.map((Blog) => 
                <div key={Blog.id} className="Actualblog">
                    <Link to={`/blogs/${Blog.id}`}>
                        <h2>{Blog.title}</h2>
                    </Link>
                    <p>Written by: {Blog.author}</p>
                    <p>{Blog.body}</p>
                </div>
            )}
        </>
    )
}
export default Bloglist