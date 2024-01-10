import useFetch from "./useFetch"
import Bloglist from "./Bloglist"

const Home = () => {
    const {data: Blog,isLoading,error} = useFetch('http://localhost:3000/blogs')

    return(
        <section className="content">
            <div>
                {error && <div>{error}</div>}
                {isLoading && <div style={{fontFamily:"Lobster Two"}}>Loading...</div>}
                {Blog && <Bloglist title="Coding" blogs={Blog}/>}
            </div>
        </section>
    )
}

export default Home