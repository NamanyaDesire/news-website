// Code generated by Namanya Desire for a Website suing REACT.JS, news API and HTML with the help of JSX component


import React, { useState, useEffect } from 'react'; // Importing React and the hooks (useState and useEffect) from 'react' library
import axios from 'axios';  // Import axios library for making HTTP requests
const NewsWebsite = () => {
  const [articles, setArticles] = useState([]);    // Initializing the state variable 'articles' as an empty array
  useEffect(() => {    
    const fetchArticles = async () => {     // Defining an asynchronous function that fetches the articles
      try {
        
        const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=20eed891142c425cb9c6df161350dbb2'); // a GET request to the news API that contains my individual API KEY
        
        setArticles(response.data.articles);   // Update each state with the fetched articles
      } catch (error) {
        // Log any errors that occur during the fetch operation incaase the images required aren't avaliable
        console.error('Error fetching articles:', error);
      }
    };

    
    fetchArticles();   // Calls the fetchArticles function
  }, []); // An empty dependency array means this effect runs once on running it

  // Renders the component created above
  return (
    <div>
      {/* Header section that dislays the website title and navigation menu */}
      <header>
        <h1 className="website-title">DeZire Daily</h1>
        <nav>
          <ul className="nav-menu">
            {/* Navigation links for each the components created at the header of the Website inthe navigation menu */}
            <li><a href="/" className="nav-link">Home</a></li>
            <li><a href="https://www.bbc.com/news/politics" className="nav-link" target="_blank" rel="noopener noreferrer">Politics</a></li>
            <li><a href="https://theathletic.com/" className="nav-link" target="_blank" rel="noopener noreferrer">Sports</a></li>
            <li><a href="https://techcrunch.com/" className="nav-link" target="_blank" rel="noopener noreferrer">Technology</a></li>
          </ul>
        </nav>
      </header>

      
      <main>
        <section>
          <h2 className="section-title">Headlines from around the World</h2>
          <div className="articles">
            {/* Map over 'articles' state to create a list of article cards */}
            {articles.map((article, index) => (
              <article key={index} className="article-card">
                {/* Container for the article's image */}
                <div className="article-image">
                  {/* Displays the article image or a placeholder if image reuired is missing */}
                  <img src={article.urlToImage || 'https://via.placeholder.com/150'} alt={article.title} />
                </div>

                {/* Container for the article's content */}
                <div className="article-content">
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                  {/* intialises the link to read the full article */}
                  <a href={article.url} target="_blank" rel="noopener noreferrer" className="read-more-link">Read More</a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* Footer section */}
      <footer>
        <p>&copy; 2024 DeZire Daily. All rights reserved.</p>
      </footer>

      {/*  The CSS styles for the components within the website */}
      <style jsx>{`
        header {
          background-color: #333;
          color: #fff;
          padding: 1rem;
        }

        .website-title {
          text-align: center;
          color: #ffa500;
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }

        .nav-menu {
          display: flex;
          justify-content: center;
          list-style-type: none;
          padding: 0;
        }

        .nav-link {
          display: block;
          color: #fff;
          text-decoration: none;
          padding: 1rem 1.5rem;
          transition: background-color 0.3s;
          background-color: #555;
        }

        .nav-link:hover {
          background-color: #777;
        }

        .section-title {
          text-align: center;
          font-size: 2rem;
          margin-bottom: 2rem;
        }

        .articles {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          grid-gap: 2rem;
          background-color: #333;
          padding: 2rem;
        }

        .article-card {
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .article-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }

        .article-image img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .article-content {
          padding: 1.5rem;
        }

        .article-content h3 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
        }

        .article-content p {
          font-size: 0.9rem;
          color: #666;
          margin-bottom: 1rem;
        }

        .read-more-link {
          color: #007bff;
          font-weight: 600;
          text-decoration: none;
        }

        .read-more-link:hover {
          color: #0056b3;
        }
      `}</style>
    </div>
  );
};


export default NewsWebsite;    // Export the NewsWebsite component for use in other parts of the app within the same folder
