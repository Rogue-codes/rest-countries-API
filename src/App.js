import { useState } from "react";
import styled from "styled-components";
import Countries from "./components/Countries";
import Nav from "./components/Nav";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Country from "./components/Country";

const ThemeProvider = styled.div`
  width: 100%;
  height: auto;
  background-color: ${props => props.bg};
  color: ${props => props.cl};
  transition: all .5s linear;
  button{
        background: transparent;
        color: ${props => props.cl};
        cursor: pointer;
        transition: all .5s ease-in-out;
        &:hover{
          transform: scale(1.1);
        }
  }
  a{
    text-decoration: none;
  }
`


function App() {
  const [theme, setTheme] = useState('light')

  const switchTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider className="App" bg={theme==='light' ? 'hsl(0, 0%, 98%)' : 'hsl(207, 26%, 17%)'} cl={theme==='light' ? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%)'}>
      <Router>
        <Nav switchTheme={switchTheme}/>
        <Routes>
          <Route path="/" element={<Countries theme={theme}/>}/>
          <Route path="/countries/:name" element={<Country/>}/>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
