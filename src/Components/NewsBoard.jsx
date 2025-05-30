import { useEffect } from "react";
import { useState } from "react"
import NewsItem from "./NewsItem";

const Newsboard = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() =>{
       let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}&category=science`;
       fetch(url).then(response => response.json()).then(data => setArticles(data.articles));

    },[])

  return (
    <div>
      <h2 className='text-center my-5'>Latest <span className='badge bg-danger'>News</span></h2>
      {articles.map((news,index)=>{
          return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
      })}
    </div>
  )
}

export default Newsboard
