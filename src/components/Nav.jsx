import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faMoon } from '@fortawesome/free-solid-svg-icons';

const Navigation = styled.nav`
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    padding: 2%;
    align-items: center;
    /* background-color: hsl(209, 23%, 22%); */
    /* color: hsl(0, 0%, 100%); */
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`
const Right = styled.div`
    width: 10%;
    display: flex;
    justify-content: center;
    gap: 5%;
    align-items: center;
  cursor: pointer;
`

const Text = styled.h1`
  font-size: 1.2rem;    
`
const Dark = styled.p`
  font-size: 1rem;
`

function Nav({switchTheme}) {
  return (
    <Navigation>
        <Text>Where in the World</Text>
        <Right onClick={switchTheme}><FontAwesomeIcon icon={faMoon}></FontAwesomeIcon> <Dark>Dark Mode</Dark></Right>
    </Navigation>
  )
}

export default Nav