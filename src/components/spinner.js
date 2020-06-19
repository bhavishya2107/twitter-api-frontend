import React, { Component } from "react";
import "../stylesheets/loader.css";  

export default class Spinner extends Component {
  render() {
    return (
      <div className="loader-container">
        <div class="loader"/>
        <p>Fetching Tweets...</p>
      </div>
    );
  }
}
