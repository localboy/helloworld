import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const api = {
    key: "76e70a78e71a96d5f44504f7f9293220",
    base: "https://api.openweathermap.org/data/2.5/"
}

const Weather = () => {
    const [query, setQuery] = useState('')
    const [weather, setWeather] = useState({})
    const [upComming, setComming] = useState({})
    const date = new Date()
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    const timeConverter=(UNIX_timestamp)=>{
        const a = new Date(UNIX_timestamp * 1000);
        const year = a.getFullYear();
        const month = months[a.getMonth()];
        const date = a.getDate();
        const time = date + ' ' + month;
        return time;
      }

    const search = evt => {
        if (evt.key == 'Enter'){
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
            .then(res=>res.json())
            .then(result=>{
                setWeather(result);
                setQuery('');
                const lat = result.coord.lat;
                const lon = result.coord.lon;
                fetch(`${api.base}onecall?lat=${lat}&lon=${lon}&units=metric&exclude=current,minutely,hourly&appid=${api.key}`)
                .then(res => res.json())
                .then(result=>{
                    setComming(result);
                    console.log(result)
                })
            });
        }
    }
    return (
        <div className="row justify-content-center pt-3">
            <div className="col-md-8 col-sm-10 col-xs-12 page-content page-container" id="page-content">
                <div className="search-box mb-2">
                    <input type="text"
                        className="search-bar form-control"
                        placeholder="Search...."
                        onChange={e => setQuery(e.target.value)}
                        value={query}
                        onKeyPress={search}
                    />
                </div> 
                {(typeof weather.main !='undefined')?
                <div className="grid-margin stretch-card">
                    <div className="card card-weather">
                    
                        <div className="card-body">
                            <div className="weather-date-location">
                                <h3>{days[date.getDay()]}</h3>
                                <p className="text-gray"> 
                                    <span className="weather-date">{timeConverter(weather.dt)}</span>
                                    <span className="weather-location">{weather.name}, {weather.sys.country}</span> 
                                </p>
                            </div>
                            <div className="weather-data d-flex">
                                <div className="mr-auto">
                                    <h4 className="display-3">{Math.round(weather.main.temp)} <span className="symbol">°</span>C</h4>
                                    <p> {weather.weather[0].main} </p>
                                </div>
                            </div>
                        </div>
                        {(typeof upComming.daily != 'undefined')?
                        <div className="card-body p-0">
                            <div className="d-flex weakly-weather">
                                {upComming.daily.map((w, index)=>{
                                    if(index != 0){
                                    return (
                                        <div className="weakly-weather-item" key={index}>
                                            <p className="mb-0"> {Math.round(w.temp.day)}° </p>
                                            <p className="mb-0"> {timeConverter(w.dt)} </p> <i className="mdi mdi-weather-cloudy"></i>
                                            <p className="mb-0">{w.weather[0].main}</p>
                                        </div>
                                    )}
                                })}
                            </div>
                        </div>:''}
                    </div>
                </div>:null}

            </div>
        </div>
    );
};

export default Weather;