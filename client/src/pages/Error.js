import {Link} from "react-router-dom"
import notFound from "../assets/images/not-found.svg"
import Wrapper from "../assets/wrappers/ErrorPage"


const Error = () => {
  return (
    <Wrapper className = "full-page">
      <div>
        <img src={notFound} alt='not found' />
        <h3>Not Found</h3>
        <p>That page doesn't exist...</p>
        <Link to='/'>back home</Link>
      </div>
    </Wrapper>
  )
}

export default Error