import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top w-100 ">
          <div className="container-fluid ">
            <a className="navbar-brand text-danger" to="#">
              NewsApp
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="toggle navigation"
              style={{ borderColor: "white" }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ">
                <Link className="nav-link " to="/general">
                  Home
                </Link>
                <Link className="nav-link  " aria-current="page" to="/business">
                  Business
                </Link>
                <Link
                  className="nav-link "
                  to="/entertainment
"
                >
                  Entertainment
                </Link>

                <Link className="nav-link " to="/health">
                  Health
                </Link>
                <Link className="nav-link " to="/science">
                  Science
                </Link>
                <Link className="nav-link " to="/sports">
                  Sports
                </Link>
                <Link className="nav-link " to="/technology">
                  Technology
                </Link>
              </div>
            </div>
            <form
              className="d-flex justify-content-center w-100 mt-3 mt-lg-0"
              role="search"
            >
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search News"
                aria-label="Search"
              />
              <button class="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}
