import logo from "../assets/images/myLogo.png"
import styled from "styled-components"

const Logo = () => {
  return (
    <Main>
      <img 
          src={logo} 
          width="100"  
          alt="jobs tracker" 
          className = "logo"
      />
    </Main>
  )
}

const Main = styled.main`
        width: var(--fluid-width);
        max-width: var(--max-width);
        margin: 0 auto;
        height: var(--nav-height);
        display: flex;
        align-items: center;
`

export default Logo