import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, auther, date, source } =
      this.props;

    return (
      <div className="my-3 d-flex justify-content-center">
        <div
          className="card shadow-lg border-0"
          style={{
            width: "20rem",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          {/* Source Badge */}
          <span
            className="badge bg-danger position-absolute"
            style={{
              zIndex: 1,
              right: "1px",

              padding: "5px 10px",
              fontSize: "12px",
              fontWeight: "600",
            }}
          >
            {source}
          </span>

          {/* Card Image */}
          <img
            src={
              !imageUrl
                ? "https://www.searchenginejournal.com/wp-content/uploads/2024/12/wikipedia-790.png"
                : imageUrl
            }
            className="card-img-top"
            alt="News Thumbnail"
            style={{
              height: "180px",
              objectFit: "cover",
              borderRadius: "10px 10px 0 0",
            }}
          />

          {/* Card Body */}
          <div className="card-body">
            <h5 className="card-title fw-bold">{title}</h5>
            <p
              className="card-text text-secondary"
              style={{ fontSize: "14px" }}
            >
              {description}
            </p>
            <p className="card-text">
              <small className="text-muted">
                By:- {!auther ? "Unknown" : auther} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
              style={{
                backgroundColor: "#343a40",
                color: "#fff",
                borderRadius: "5px",
                padding: "5px 15px",
              }}
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
