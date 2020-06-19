import React, { Component } from "react";
import twitter from "./twitter.svg";
import Feed from "./components/feed";
import "./App.css";
import Spinner from "./components/spinner";
import SearchIcon from "./components/searchIcon";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tweets: null,
      searchInput: null,
      isLoading: false,
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  userTweets = () => {
    if (this.state.searchInput == null) {
      alert("Invalid Input");
    } else {
      this.setState({
        isLoading: true,
      });
      const user = {
        username: this.state.searchInput,
      };
      axios
        .post("https://twitter-api-2107.herokuapp.com/api/v1", user)
        .then((res) =>
          this.setState({
            tweets: res.data.data.statuses,
            isLoading: false,
          })
        );
      this.state.searchInput = "";
    }
  };

  render() {
    return (
      <>
        <div className="container-fluid bg">
          <div className="text-center align-middle">
            <div className="d-flex align-items-center justify-content-center">
              <h1>TWEET</h1>
              <img src={twitter} style={{ width: "100px", height: "100px" }} />
              <h1>SEARCH</h1>
            </div>
            <div class="input-container container">
              <SearchIcon />
              <input
                value={this.state.searchInput}
                onChange={this.onChange}
                name="searchInput"
                type="text"
                class=" input-bar"
                placeholder="Enter username or #tag"
              />
            </div>
            <button
              className="btn btn-lg"
              style={{ background: "#178DE6", color: "white" }}
              onClick={this.userTweets}
            >
              Search
            </button>
          </div>
          <div className="">
            <div className="row mt-5">
              {!this.state.isLoading ? (
                this.state.tweets &&
                this.state.tweets.map((tweet) => {
                  return (
                    <div className="col-sm-4 mb-5">
                      <Feed data={tweet} />
                    </div>
                  );
                })
              ) : (
                <Spinner />
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
