import React, { Component } from "react";

class AppInner extends Component {
  sendData = () => {
    setInterval(() => {
      const currTime = Date();
      this.props.parentCallback(currTime);
    }, 1000);
  };
  componentDidMount() {
    console.log("did mount");
    this.sendData();
  }
  render() {
    console.log("render");
    return <div>Karl</div>;
  }
}

class App extends Component {
  state = { message: "" };
  func1 = (childData) => {
    this.setState({ message: childData });
  };

  render() {
    console.log("render sa app");
    return (
      <div>
        <AppInner parentCallback={this.func1} />
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default App;
