import React from "react";
import ClimateCalculator from "./climate/ClimateCalculator";
import WeatherDisplay from "./climate/WeatherDisplay";
import Clock from "./clock/clock";
import "./dashboard.css";

export default function Dashboard() {
  return (
    <div className="Dashboard">
      <WeatherDisplay />
      <Clock className="clock"></Clock>
    </div>
  );
}
