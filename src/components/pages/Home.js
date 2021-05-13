import React from 'react'
import { useState, useEffect} from "react";
import Footer from "../footer/footer";
import NavInshort from "../NavInShort";
import NewsContent from "../NewsContent/NewsContent";
import fire from "../signup/firebase"

const db = fire.firestore();

export default function Home() {
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState(10);
  const [loadMore, setLoadMore] = useState(20);
  const [category, setCategory] = useState("general");
  

 

  useEffect(() => {
    const news = []
    db.collection('news').get()
      .then(snapshot => {
      snapshot.docs.forEach(item => {
        let Cid = news.id
        let obj = { ...item.data(), ['id']: Cid }
          news.push(obj)
      })
      setNewsArray(news)
    })
  }, [newsResults, loadMore, category]);

    return (
      <div >
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
