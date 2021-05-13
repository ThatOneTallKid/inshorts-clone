import React from 'react'
import { useEffect, useState } from "react";
import Footer from "../footer/footer";
import NavInshort from "../NavInShort";
import NewsContent from "../NewsContent/NewsContent";

import axios from "axios";

export default function Home() {
    const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadMore, setLoadMore] = useState(20);
    const [category, setCategory] = useState("general");
    
    const NewsApi = async () => {
        try {
          const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    
          const news = await axios.get(
            `${proxyUrl}https://newsapi.org/v2/top-headlines?country=in&apiKey=ceaf4b7e73c0465087c2d9b747e6a0c6&pageSize=${loadMore}&category=${category}`
          );
          // console.log(news);
          setNewsArray(news.data.articles);
          setNewsResults(news.data.totalResults);
        } catch (error) {
          console.log(error);
        }

        useEffect(() => {
            NewsApi();
            // eslint-disable-next-line
          }, [newsResults, loadMore, category]);
      };
    return (
        <div>
            <NavInshort setCategory={setCategory} />
      
      {newsResults && (
        <NewsContent
          newsArray={newsArray}
          newsResults={newsResults}
          loadMore={loadMore}
          setLoadMore={setLoadMore}
        />
      )}
      <Footer />
        </div>
    )
}
