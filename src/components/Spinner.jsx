import React, { Component } from "react";

export default class spinner extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="spinner-border" role="status">
          <span className="sr-only my=3"></span>
        </div>
      </div>
    );
  }
}
