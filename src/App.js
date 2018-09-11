import React, { Component } from "react";
import "./App.css";

const rand = () => Math.floor(Math.random() * 400 - 200);

class App extends Component {
  state = {
    ballX: 100,
    ballY: 400,
    hits: 0
  };

  interval = null;
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(state => ({
        ballX: state.ballX + rand(),
        ballY: state.ballY + rand()
      }));
    }, 750);
  }

  componentDidUnmount() {
    clearInterval(this.interval);
  }

  handleClick = () => {
    this.setState(state => ({
      hits: state.hits + 1
    }));
  };

  render() {
    return (
      <div className="canvas">
        <Counter hits={this.state.hits} />
        <Ball
          x={this.state.ballX}
          y={this.state.ballY}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

class Counter extends Component {
  render() {
    return <div className="counter">Hits: {this.props.hits}</div>;
  }
}

class Ball extends Component {
  render() {
    const style = {
      transform: `translate(${this.props.x}px, ${this.props.y}px)`
    };

    return <div onClick={this.props.onClick} className="ball" style={style} />;
  }
}

export default App;
