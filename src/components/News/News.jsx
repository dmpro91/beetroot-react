import { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";

import { Request } from "../../utils/Request";
import { NewsItem } from "./NewsItem/NewsItem";

export const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
        const data = await Request.get('https://saurav.tech/NewsAPI/everything/cnn.json');
        setNews(data.articles);
    }

    getNews();
  }, []);

  return news.length ? news.map((item, index) => <NewsItem key={index} {...item}></NewsItem>) : <Alert variant="primary">No News data</Alert>
};
