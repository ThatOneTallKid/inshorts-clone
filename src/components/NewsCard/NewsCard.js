import React from "react";
import "./NewsCard.css";

const NewsCard = ({ newsItem }) => {
  return (
    <div className="newsCard">
      <img
        alt={newsItem.title}
        src={
          newsItem.urlToImage
            ? newsItem.urlToImage
            : "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/02/breaking-news-1580690157.jpg"
        }
        className="newsImage"
      />
      <div className="newsText">
        <div>
          <span className="title">{newsItem.headline}</span>
          <br />
          <span className="author">
            <a href={newsItem.url} target="__blank">
              <b>short </b>
            </a>{" "}
            <span className="muted">
              {" "}
              by {newsItem.author ? newsItem.author : "unknown"} /{" "}
              {newsItem.publishedAt}
            </span>
          </span>
        </div>
        <div className="lowerNewsText">
          <div className="description">{newsItem.description}</div>
          <span className="readmore">
            read more at{" "}
            <a href={newsItem.url} target="__blank" className="source">
              
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;