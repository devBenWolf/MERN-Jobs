import { Link } from "react-router-dom"
import styled from "styled-components"
import {Logo} from '../components'

const Nav = () => {
  return (
        <Main>
            <Logo />

        </Main>
  )
}

const Main = styled.main`
  display: flex;
  align-items: center;
`



export default Nav