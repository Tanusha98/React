import React from "react";

class CityInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(e.target.value);
    this.props.onCityChange(e.target.value);
  }

  render() {
    const city = this.props.city;
    return (
      <fieldset>
        <legend>Search city : </legend>
        <input value={city} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

export default CityInput;
