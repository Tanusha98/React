import React from "react";
import { Button } from "react-bootstrap";
import "./climate.css";

class ClimateDisplay extends React.Component {
  //   const [temperature, setTemperature] = useState(toCelsius(props.temperature));
  constructor(props) {
    super(props);
    this.state = {};
    this.toCelsius = this.toCelsius.bind(this);
    this.toFahrenheit = this.toFahrenheit.bind(this);
  }
  componentDidMount() {
    this.toCelsius();
  }

  toCelsius() {
    this.setState({ temperature: this.props.temperature - 273.15, scale: "c" });
  }

  toFahrenheit() {
    this.setState({
      temperature: ((this.props.temperature - 273.15) * 9) / 5 + 32,
      scale: "f",
    });
  }

  render() {
    return (
      <div className="climate">
        <h3>{parseInt(this.state.temperature)}</h3>
        <button
          className={this.state.scale === "c" && "highlight"}
          onClick={this.toCelsius}
        >
          {" "}
          °C
        </button>
        <button
          className={this.state.scale === "f" && "highlight"}
          onClick={this.toFahrenheit}
        >
          {" "}
          | °F
        </button>
      </div>
    );
  }
}

export default ClimateDisplay;
