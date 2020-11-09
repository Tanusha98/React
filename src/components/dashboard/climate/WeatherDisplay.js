import Axios from "axios";
import React from "react";
import { WEATHER_API_KEY } from "../../../data/apiKeys";
import CityInput from "./CityInput";
import ClimateCalculator from "./ClimateCalculator";
import ClimateDisplay from "./ClimateDisplay";
import ClimateVerdict from "./ClimateVerdict";

class WeatherDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = { weatherDetails: {}, haveWeatherDetails: false };
    this.handleCityChange = this.handleCityChange.bind(this);
  }

  handleCityChange(city) {
    this.setState({ haveWeatherDetails: false });
    Axios.get(
      "http://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=" +
        WEATHER_API_KEY
    ).then((res) => {
      console.log(res);
      this.setState({ weatherDetails: res.data, haveWeatherDetails: true });
    });
  }

  render() {
    const date = new Date();
    let sunrise = 0;
    let sunset = 0;
    // if (this.state.haveWeatherDetails) {
    //   sunrise = new Date(this.state.weatherDetails.sys.sunrise).toTimeString();
    //   sunset = new Date(this.state.weatherDetails.sys.sunset);
    // }
    return (
      <div>
        <CityInput onCityChange={this.handleCityChange} />
        {this.state.haveWeatherDetails && (
          <>
            <h5>{date.toDateString()}</h5>
            <div className="climate">
              <div className="climate-display flex">
                <ClimateDisplay
                  temperature={this.state.weatherDetails.main.temp}
                />
                <ClimateVerdict
                  celsius={this.state.weatherDetails.main.temp - 273.15}
                />
              </div>
              <div className="weather-info">
                <h5>Humidity: {this.state.weatherDetails.main.humidity} %</h5>
                <h5>Pressure: {this.state.weatherDetails.main.pressure} hPa</h5>
                <h5>Wind: {this.state.weatherDetails.wind.speed} m/s</h5>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default WeatherDisplay;
