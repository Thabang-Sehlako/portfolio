import React, { useEffect, useState ,useRef} from 'react'
import './Weather.css'
import search_icon from './gallery/search.png'
import clear from './gallery/clear.png'
import cloud from './gallery/cloud.png'
import drizzle from './gallery/drizzle.png'
import rain from './gallery/rain.png'
import snow from './gallery/snow.png'
import wind from './gallery/wind.png'
import humidity from './gallery/humidity.png'


const Weather = () => {
    const inputRef = useRef()
    const  API = "1c9f4c0fcc8e4590dbcd306c4d4b6942"

    const [weatherData,setWeatherData] = useState(false)
    const allIcons = {
        '01d':clear,
        '01n': clear,
        '02d': cloud,
        '02n': cloud,
        '03d':cloud,
        '04d': drizzle,
        '04n':drizzle,
        '09n': rain,
        '10d':rain,
        '10n': rain,
        '13d':snow,
        '13n':snow
    }

    const search = async (city) =>{
        if(city === ''){
            alert('Enter City Name')
           
            
            return
        }
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API}`

            const response = await fetch(url)

            const data = await response.json()

            if(!response.ok){
                alert(data.message)

                return
            }

            console.log(data);

            const icon = allIcons[data.weather[0].icon] || clear

            setWeatherData({
                humidity:data.main.humidity,
                windSpeed: data.wind.speed,
                temparature:Math.floor(data.main.temp),
                location:data.name,
                icon:icon
            })
            
        } catch (error) {
            setWeatherData(false)

            console.error('Error in fetching weather data');

        }
    }



    useEffect(()=>{
        search("FOURIESBURG")
    },[])


  return (
  <div id='weather'>
    <div className='weather'>
        <div className="search-bar">
            <input type="text" placeholder='Search' ref={inputRef} />
            <img src={search_icon} alt="" onClick={()=>search(inputRef.current.value)}/>
        </div>
        {
        weatherData?
        <>
            <img src={weatherData.icon} alt="" className='weather-icon'/>
                <p className='temparature'>{weatherData.temparature}°C</p>
                <p className='location'>{weatherData.location}</p>

            <div className="weather-data">
                <div className="col">
                    <img src={humidity} alt="" />
                    <div>
                        <p>{weatherData.humidity} %</p>
                        <span>humidity</span>
                    </div>
                </div>
                <div className="col">
                    <img src={wind} alt="" />
                    <div>
                        <p>{weatherData.windSpeed}Km/h</p>
                        <span>Wind Speed</span>
                    </div>
                </div>
            </div>
        </>: 
        <> 
          
                <p className='temparature'>°C</p>
                <p className='location'></p>

            <div className="weather-data">
                <div className="col">
                    <img src={humidity} alt="" />
                    <div>
                        <p>{weatherData.humidity} %</p>
                        <span>humidity</span>
                    </div>
                </div>
                <div className="col">
                    <img src={wind} alt="" />
                    <div>
                        <p>{weatherData.windSpeed}Km/h</p>
                        <span>Wind Speed</span>
                    </div>
                </div>
            </div>
        </>}

        
      
    </div>
</div>
  )
}

export default Weather
