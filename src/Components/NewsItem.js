import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <span
            class="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            style={{ zIndex: 1, left: "90%" }}
          >
            {source}
          </span>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://cdn.iconscout.com/icon/premium/png-512-thumb/no-image-1753539-1493784.png"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>

            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "unknown"} on{" "}
                {new Date(date).toUTCString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
              rel="noreferrer"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
