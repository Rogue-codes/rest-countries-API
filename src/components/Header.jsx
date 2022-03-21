import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.header`
    width: 100%;
    height: 18vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Form = styled.form`
    width: 40%;
    height: 35%;
`

const Input = styled.input`
    width: 100%;
    height: 100%;
    color: ${props => props.cl}; 
    background-color: ${props => props.bg};
    transition: all .5s linear;
    border: none;
    border-radius: 5px;
    font-size: 1vw;
    padding-left: 2%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    &:focus{
        outline: none;
    }
    &::placeholder{
        color: ${props => props.cl}; 
        transition: all .5s linear;
    }
`

const Filter = styled.select`
    width: 20%;
    height: 35%;
    transition: all .5s linear;
    background-color: ${props => props.bg};
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    color: ${props => props.cl}; 
    font-size: 1vw;
    padding-left: 1%;
    border-radius: 5px;
    border: none;
    &:focus{
        outline: none;
    }
`
const  Option = styled.option`
`

function Header({theme}) {
    const [val, setVal] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    console.log(val)
  return (
    <Container>
        <Form onSubmit={handleSubmit}>
            <Input  type='search' placeholder='search' bg={theme==='light' ? 'hsl(0, 0%, 100%)' : 'hsl(209, 23%, 22%)'} cl={theme==='light' ? 'hsl(0, 0%, 52%)' : 'hsl(0, 0%, 100%)'} onChange={ (e) => setVal(e.target.value)}/>
        </Form>
        <Filter bg={theme==='light' ? 'hsl(0, 0%, 100%)' : 'hsl(209, 23%, 22%)'} cl={theme==='light' ? 'hsl(0, 0%, 52%)' : 'hsl(0, 0%, 100%)'}>
            <Option>Africa</Option>
            <Option>America</Option>
            <Option>Asia</Option>
            <Option>Europe</Option>
            <Option>Oceania</Option>
        </Filter>
        
    </Container>
  )
}

export default Header