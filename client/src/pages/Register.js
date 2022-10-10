import {useState, useEffect} from "react"
import { useAppContext } from "../context/appContext"
import Wrapper from "../assets/wrappers/RegisterPage"
import {Alert, FormRow} from "../components"
import {useNavigate} from "react-router-dom"

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: false,
}




const Register = () => {
  const {isLoading, showAlert, displayAlert, user, loginUser, handleUser} = useAppContext()
  const [values, setValues] = useState(initialState)

  // redirect to landing page
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate(`/`)
      }, 2000)
    }
  }, [user, navigate])

// handle text input changes
  const handleChange = (event) => {
    const {name, value} = event.target
    setValues({
      ...values,
      [name]: value
    })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    const {name, email, password, isMember} = values
    if (!email || !password || (!isMember && !name)) {
      displayAlert()
    }
    const currentUser = {name, email, password}
    if (isMember) {
      handleUser({currentUser, endPoint: "login", alertText: "User Logged In. Redirecting..."})
    } else {
      handleUser({currentUser, endPoint: "register", alertText: "User Created. Redirecting..." })
    }
  }

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember, name: "" })
  }


  return (
    <Wrapper className = "full-page">
      <form 
        onSubmit={handleSubmit} 
        className="form"
      >
      <h3>{values.isMember ? "Login" : "Register"}</h3>
      {showAlert && <Alert />}
      <div className='form-row'>
        {!values.isMember && (  
          <FormRow 
            type="text" 
            name="name" 
            value={values.name} 
            handleChange={handleChange}
          />
        )}
        <FormRow 
          type="email" 
          name="email" 
          value={values.email} 
          handleChange={handleChange}
        />
        <FormRow 
          type="password" 
          name="password" 
          value={values.password} 
          handleChange={handleChange}
        />
        </div>
        <button 
          type='submit' 
          className='btn btn-block'
          disabled={isLoading}
          >
          submit
        </button>
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button 
            type="button"
            onClick = {toggleMember}
            className = "member-btn"
            
          >{values.isMember ? "register": "login" }

          </button>
        </p>
      </form>
    </Wrapper>
  )
}

export default Register