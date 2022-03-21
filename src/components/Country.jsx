import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Contain = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    gap: 5%;
    padding: 2%;
    align-items: center;
`
const Left = styled.div`
    height: 60%;
    width: 50%;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const Right = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 50%;
    width: 50%;

`

const Top = styled.p`
    font-size: 1.4vw;
    font-weight: 900;
`
const Mid = styled.div`
    width: 100%;
    display: flex;
    gap: 10%;
`
const MidLeft = styled.div`
    width: 50%;
`
const NativeName = styled.h5`
    b{
        padding-right: 2%;
    }
    font-weight: 300;font-size: 1.2rem;
    padding: 2% 0%;
`
const Population = styled.h5`
    b{
        padding-right: 2%;
    }
    font-weight: 300;font-size: 1.2rem;
    font-weight: 300;
    padding: 2% 0%;
`
const Region = styled.h5`
    b{
        padding-right: 2%;
    }
    font-weight: 300;font-size: 1.2rem;
    font-weight: 300;
    padding: 2% 0%;
`
const SubRegion = styled.h5`
    b{
        padding-right: 2%;
    }
    font-weight: 300;font-size: 1.2rem;
    font-weight: 300;
    padding: 2% 0%;
`
const Capital = styled.h5`
    b{
        padding-right: 2%;
    }
    font-weight: 300;font-size: 1.2rem;
    font-weight: 300;
    padding: 2% 0%;
`
const MidRight = styled.div`
    width: 50%;
`
const TopLevel = styled.h5`
    b{
        padding-right: 2%;
    }
    font-weight: 300;font-size: 1.2rem;
    font-weight: 300;
    padding: 2% 0%;
`
const Currency = styled.h5`
    b{
        padding-right: 2%;
    }
    font-weight: 300;font-size: 1.2rem;
    font-weight: 300;
    padding: 2% 0%;
`
const Language = styled.h5`
    b{
        padding-right: 2%;
    }
    font-weight: 300;font-size: 1.2rem;
    font-weight: 300;
    padding: 2% 0%;
`
const Bottom = styled.div`
    width: 100%;
    display: flex;
    gap: 2%;
    height: 3vh;
    button{
        width: 100%;
    }
`
const Btn = styled.button`
    width: 10%;
    margin-left: 2%;
    display: flex;
    justify-content: center;
    gap: 5%;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    align-items: center;
    margin-top: 2%;
    height: 6vh;
    font-size: 1vw;
    text-decoration: none;
`


function Country({theme}) {
    const [country, setCountry] = useState([])
    const {name} = useParams()


    const getCountries = async () => {
        const response = await fetch(`https://restcountries.com/v2/name/${name}`)

        const country = await response.json()

        setCountry(country)
        
        console.log(country)


    }


    useEffect(()=>{
        getCountries()
    },[])
  return (
    <>
    <Link to='/'><Btn> <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon> Back</Btn></Link>
       {
           country.map((item) => {
               const {numericCode, name, borders, flag, nativeName, capital, currencies, languages, topLevelDomain, subregion, region, population} = item

               return (
                   <Contain key={numericCode}>
                       <Left>
                           <img src={flag} alt="" />
                       </Left>
                       <Right>
                           <Top>
                               {name}
                           </Top>
                           <Mid>
                               <MidLeft>
                                   <NativeName><b>Native Name: </b>  {nativeName}</NativeName>
                                   <Population><b>Population:</b> {population}</Population>
                                   <Region><b>Region:</b> {region}</Region>
                                   <SubRegion><b>Sub Region:</b> {subregion}</SubRegion>
                                   <Capital><b>Capital:</b> {capital}</Capital>
                               </MidLeft>
                               <MidRight>
                                    <TopLevel><b>Top Level Domian: </b>{topLevelDomain}</TopLevel>
                                    <Currency><b>Currencies:</b> {currencies[0].name}</Currency>
                                    <Language><b>Languages:</b> {languages[0].name}</Language>
                               </MidRight>
                            </Mid>
                            <Bottom>
                                <b>Border: </b>
                                {
                                    borders.map((border)=>{
                                        return(
                                            <button key={border} bor={theme === 'dark' ? 'black' : 'white'}>
                                                {border}
                                            </button>
                                        )
                                    })
                                }
                            </Bottom>
                       </Right>
                   </Contain>
               )
           })
       }
    </>
  )
}

export default Country