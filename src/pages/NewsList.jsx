import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Breadcrumbs from '../comon/breadcrumbs';
import Kitchen from '../assets/img/kitchen.jpg';

const NewsList = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

   useEffect(() => {
    axios.get('https://admin.massholdings.com.np/api/News_blog/all')
      .then(response => {
        setItems(response.data?.items);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  console.log(items)

  return (
    <>
      <Breadcrumbs />
      <div className="container py-5">
        <div className="news-list">
          {items.map((news) => (
            <Link to={`/news-updates/${news.slug || news.id}`} key={news.id}>
              <div className="news-card">
                <div className="img-wrapper">
                  <img src={news.CoverImage} alt="news image" />
                  <p className="px-3 py-2">Read More</p>
                </div>
                <div className="news-detail">
                  <p className="menu-text">{news.title}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default NewsList;
