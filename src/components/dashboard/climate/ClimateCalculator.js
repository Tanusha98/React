import React from "react";
import ClimateVerdict from "./ClimateVerdict";
import TemperatureInput from "./TemperatureInput";

class ClimateCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temperature: "", scale: "c" };
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }

  handleCelsiusChange(temperature) {
    console.log("cel...", temperature);
    this.setState({ temperature, scale: "c" });
  }
  handleFahrenheitChange(temperature) {
    console.log("fah...", temperature);
    this.setState({ temperature, scale: "f" });
  }

  toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  }

  toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }

  tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }

  render() {
    const temperature = this.state.temperature;
    const scale = this.state.scale;
    const celsius =
      scale === "f"
        ? this.tryConvert(temperature, this.toCelsius)
        : temperature;
    const fahrenheit =
      scale === "c"
        ? this.tryConvert(temperature, this.toFahrenheit)
        : temperature;
    return (
      <div>
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <ClimateVerdict celsius={parseFloat(temperature)} />
      </div>
    );
  }
}

export default ClimateCalculator;
