import { Link } from 'react-router-dom'

const Error = () => {
    return(
        <div className="Not-found">
            <h2>Sorry</h2>
            <p>That page cannot be found</p>
            <Link to="/">Back to homePage</Link>
        </div>
    )
}

export default Error