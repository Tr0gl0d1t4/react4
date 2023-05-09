import React from 'react';

class Cuadrado extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'black',
      intervalId: null
    };
  }

  handleMouseEnter = () => {
    const intervalId = setInterval(() => {
      const red = Math.floor(Math.random() * 256);
      const green = Math.floor(Math.random() * 256);
      const blue = Math.floor(Math.random() * 256);
      const color = `rgb(${red}, ${green}, ${blue})`;
      this.setState({ color });
    }, 500);
    this.setState({ intervalId });
  }

  handleMouseLeave = () => {
    clearInterval(this.state.intervalId);
    this.setState({ intervalId: null });
  }

  handleDoubleClick = () => {
    clearInterval(this.state.intervalId);
    this.setState({ intervalId: null });
  }

  render() {
    const { color } = this.state;
    return (
      <div
        style={{
          width: '255px',
          height: '255px',
          backgroundColor: color
        }}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onDoubleClick={this.handleDoubleClick}
      />
    );
  }
}

export default Cuadrado;
