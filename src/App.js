import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";

export default class App extends Component {
  name = "Sunny";
  render() {
    return (
      <div>
        <NavBar />
        <News pageSize={6} />
      </div>
    );
  }
}
