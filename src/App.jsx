import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class App extends Component {
  pageSize = 6;

  render() {
    const apiKey = import.meta.env.VITE_API_KEY;

    return (
      <>
        <Router>
          <Navbar />
          <div style={{ marginTop: "50px" }}>
            <Routes>
              <Route
                path="/general"
                element={
                  <News
                    apiKey={apiKey}
                    key="general"
                    pageSize={this.pageSize}
                    category="general"
                  />
                }
              />
              <Route
                path="/business"
                element={
                  <News
                    apiKey={apiKey}
                    key="business"
                    pageSize={this.pageSize}
                    category="business"
                  />
                }
              />
              <Route
                path="/entertainment"
                element={
                  <News
                    apiKey={apiKey}
                    key="entertainment"
                    pageSize={this.pageSize}
                    category="entertainment"
                  />
                }
              />
              <Route
                path="/health"
                element={
                  <News
                    apiKey={apiKey}
                    key="health"
                    pageSize={this.pageSize}
                    category="health"
                  />
                }
              />
              <Route
                path="/science"
                element={
                  <News
                    apiKey={apiKey}
                    key="science"
                    pageSize={this.pageSize}
                    category="science"
                  />
                }
              />
              <Route
                path="/sports"
                element={
                  <News
                    apiKey={apiKey}
                    key="sports"
                    pageSize={this.pageSize}
                    category="sports"
                  />
                }
              />
              <Route
                path="/technology"
                element={
                  <News
                    apiKey={apiKey}
                    key="technology"
                    pageSize={this.pageSize}
                    category="technology"
                  />
                }
              />
            </Routes>
          </div>
        </Router>
      </>
    );
  }
}
