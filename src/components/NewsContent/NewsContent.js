import { Container } from "@material-ui/core";
import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsContent.css";



const NewsContent = ({ newsArray, loadMore, setLoadMore, newsResults }) => {
    return (
      <Container maxWidth="md">
        <div className="content">
          
          {newsArray.map((newsItem) => (
            <NewsCard newsItem={newsItem} key={newsItem.headline} />
          ))}
          {loadMore <= newsResults && (
            <>
              <hr />
              <button
                className="loadMore"
                onClick={() => setLoadMore(loadMore + 20)}
              >
                Load More
              </button>
            </>
          )}
        </div>
      </Container>
    );
  };
  
  export default NewsContent;