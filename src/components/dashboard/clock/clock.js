import React from "react";
import { Button } from "react-bootstrap";
import { UseTick } from "./UseTick";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      startTimer: false,
    };
    this.tick = this.tick.bind(this);
    this.trackTime = this.trackTime.bind(this);
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  trackTime() {
    this.setState((state) => ({ startTimer: !this.state.startTimer }));
  }

  render() {
    return (
      <div>
        <h2>Time is Valuable</h2>
        <h3>{this.state.date.toLocaleTimeString()}</h3>
        <Button onClick={this.trackTime}>
          {!this.state.startTimer ? "Track " : "Stop tracking "} time spent here
        </Button>
        {this.state.startTimer && (
          <UseTick startTimer={this.state.startTimer} />
        )}
      </div>
    );
  }
}

export default Clock;
