import React, { Component } from "react";
import "./App.css";

const rand = () => Math.floor(Math.random() * 400 - 200);

class App extends Component {
  state = {
    ballX: 500,
    ballY: 500,
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

  handleFetch = () => {
    this.setState(state => ({
      ballX: 500,
      ballY: 500
    }));
  };

  render() {
    return (
      <div className="canvas">
        <Counter hits={this.state.hits} />
        <button className="fetch" onClick={this.handleFetch}>
          Fetch the ball
        </button>
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
