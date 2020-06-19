import React, { Component } from "react";
import "../App.css";
import "../stylesheets/feed.css";
import heart from "../heart.svg";
import retweet from "../retweet.svg";
import comment from "../comment.svg";

class Feed extends Component {
  constructor() {
    super();
  }

  splitDate(data) {
    let c = data.split(" ")
    let newDate = c[0] + " " + c[1] + " "+ c[2] + " " + c[5]
    return newDate
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  render() {
    return (
      <div>
        <div className=" feed">
          <div className="d-flex bd-highlight mb-3">
            <img
              src={this.props.data.user.profile_image_url}
              className="profile-image p-2 bd-highlight"
              height="75px"
              width="75px"
            />
            <div className="p-2 bd-highlight">
              <p className="twitter-name">{this.props.data.user.name}</p>
              <p className="twitter-handle">{"@" + this.props.data.user.screen_name}</p>
            </div>

            <span className="ml-auto p-2 bd-highlight">{this.splitDate(this.props.data.created_at)}</span>
          </div>
          <p className="card-text tweet-text">{this.props.data.text}</p>

          <div className="d-flex justify-content-around">
            <span>
              <img src={heart} style={{ height: "20px" }} /> {this.props.data.favorite_count}
            </span>
            <span>
              <img src={retweet} style={{ height: "20px" }} /> {this.props.data.retweet_count}
            </span>
            <span>
              <img src={comment} style={{ height: "20px" }} /> {this.getRandomInt(100)}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Feed;
