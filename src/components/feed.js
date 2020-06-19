import React, { Component } from "react";
import "../App.css";
import "../stylesheets/feed.css";
import twitter from "../../src/twitter.svg";
import heart from "../heart.svg";
import retweet from "../retweet.svg";
import comment from "../comment.svg";

class Feed extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div className=" feed">
          <div className="d-flex bd-highlight mb-3">
            <img
              src={twitter}
              className="profile-image p-2 bd-highlight"
              height="75px"
              width="75px"
            />
            <div className="p-2 bd-highlight">
              <p className="twitter-name">Bhavishya Negi</p>
              <p className="twitter-handle">@bhavishya2107</p>
            </div>

            <span className="ml-auto p-2 bd-highlight">22/06/20</span>
          </div>
          <p className="card-text tweet-text">{this.props.data.text}</p>

          <div className="d-flex justify-content-around">
            <span>
              <img src={heart} style={{ height: "20px" }} /> {"2.8k"}
            </span>
            <span>
              <img src={retweet} style={{ height: "20px" }} /> {"4.3k"}
            </span>
            <span>
              <img src={comment} style={{ height: "20px" }} /> {"11.5k"}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Feed;
