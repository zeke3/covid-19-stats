import React, {useState, useEffect} from 'react';
import ConfirmedStats from './ConfirmedStats';
import DeathsStats from './DeathsStats';
import RecoveredStats from './RecoveredStats';
import Flags from './Flags';
import axios from 'axios';

const CovidStats = () => {

    const [confirmed, setConfirmed] = useState(0)
    const [deaths, setDeaths] = useState(0)
    const [recovered, setRecovered] = useState(0)
    const [countries, setCountries] = useState([])
    const [slug, setSlug] = useState([])
    const [countryCode, setCountryCode] = useState("")

    const fetchCountries = () => {
        axios
            .get("https://api.covid19api.com/countries")
            .then(res=>{
                // Setting data tp respective states
                const response = res.data
                setCountries(response)
            })
            .catch(err=>{
                console.log(err)
            })
    }

    const fetchStats = () => {
        axios
            .get(
                slug ? `https://api.covid19api.com/live/country/${slug}` : `https://api.covid19api.com/live/country/algeria`
                ) 
            .then(res => {
                // console.log(res.data)
                const response = res.data
                console.log(response)
                const statConfirmed = response.map(data => data.Confirmed)
                setConfirmed(statConfirmed[statConfirmed.length - 1])
                const statDeaths = response.map(data => data.Deaths)
                setDeaths(statDeaths[statDeaths.length - 1])
                const statRecovered = response.map(data => data.Recovered)
                setRecovered(statRecovered[statRecovered.length - 1])
                const countrycode = response.map(data => data.CountryCode)
                setCountryCode(countrycode[0]) 
            })
            .catch(err => {
                console.log(`https://api.covid19api.com/live/country/${slug}`)
                console.log(err)
            })
    }

    // console.log(deaths)
    // console.log(recovered)
    // console.log(confirmed)

    const handleSlug = (e) => {
        const selectedCountry = e.target.value
        countries.map( data => {
            if(selectedCountry === data.Country){
                setSlug(data.Slug)
                console.log(slug)
            }
        })   
    }

    useEffect(()=> {
        fetchCountries()
        fetchStats()
    },[slug])

    return(
        <div className="container">
            <div className="title">
                <h1>COVID-19 STATISTICS</h1>
            </div>
            <div className="stat-countries">
                <select className="country-list" onChange={handleSlug}>
                    {countries.map((country, index)=>{
                        return <option key={index} className="stat-country" >{country.Country}</option>
                    })}
                </select> 
                <Flags countryCode={countryCode} />
            </div>
            <div className="cards">
                <ConfirmedStats confirmed={confirmed} />
                <DeathsStats deaths={deaths} />
                <RecoveredStats recovered={recovered} />
            </div>
        </div>    
    );
}

export default CovidStats;