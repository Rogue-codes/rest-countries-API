import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Header from './Header'
import { Link } from 'react-router-dom'


const Container = styled.section`
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 2%;
    gap: 5%;
`
const Wrapper = styled.div`
    width: 20%;
    height: 50vh;
    margin-top: 5%;
    color: ${props => props.cl}; 
    background-color: ${props => props.bg};
    border-radius: 5px;
    transition: all .5s linear;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    img{
        width: 100%;
        height: 40%;
        object-fit: cover;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
    }
    a{
        margin-left: 5%;
        margin-bottom: 5%;
        padding: 1% 4%;
        font-size: 1vw;
        text-decoration: none;
        background: transparent;
        color: ${props => props.cl};
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
`
const Country = styled.h2`
    margin-top: 10%;
    padding-left: 5%;
    margin-bottom: 5%;
    font-size: 1.2vw;
`
const Population = styled.h4`
    padding: 1% 5%;
    font-size: 1vw;
`
const Region = styled.h4`
    padding: 3% 5%;
    font-size: 1vw;
`
const Capital = styled.h4`
    padding: 3% 5%;
    font-size: 1vw;
    margin-bottom: 2%;
`

function Countries({theme}) {
    const URL =`https://restcountries.com/v2/all`

    const [countries, setCountries] = useState([])
    // const [countrySearch, setCountrySearch] = useState([])



    const fetchCountries = async () => {
        const country = await fetch(URL)

        const countries = await country.json()

        setCountries(countries)

        console.log(countries)
    }

    useEffect(()=>{
        fetchCountries()
    },[])

  return (
    <div>
        <Container>
            <Header theme={theme}/>
        {
            countries.map((country) => {

                const { numericCode, name, population, region, capital, flag} = country

                return(
                    <Wrapper key={numericCode} bg={theme==='light' ? 'hsl(0, 0%, 100%)' : 'hsl(209, 23%, 22%)'} cl={theme==='light' ? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%)'}>
                        <img src={flag} alt="name" />
                        <Country>{name}</Country>
                        <Population><b>Population: </b>{population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Population>
                        <Region><b>Region: </b>{region}</Region>
                        <Capital><b>Capital: </b>{capital}</Capital>
                        <Link to={`/countries/${name}`} cl={theme==='light' ? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%)'}>view</Link>
                    </Wrapper>
                )
            })
        }
        </Container>
    </div>
  )
}

export default Countries