import logo from "../assets/images/myLogo.png"
import styled from "styled-components"

const Logo = () => {
  return (
    <Main className = "logo">
      <img 
          src={logo} 
          width="100"  
          alt="jobs tracker"
          className = "logo" 
      />
    </Main>
  )
}

const Main = styled.div`
        width: 110px;
        height: var(--nav-height);
        display: grid;
        place-items: center;

`

export default Logo