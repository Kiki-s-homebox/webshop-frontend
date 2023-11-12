import {useState, useEffect} from 'react';
import BlogCard from './BlogCard';
import './singleBlogPage.css';
import {FiUser} from 'react-icons/fi';
import {Link} from '@remix-run/react';

const SingleBlogPage = ({article, blogs}) => {
  const [suggestedArticle, setSuggestedArticle] = useState();

  useEffect(() => {
    if (blogs) {
      const randomNumber = Math.floor(Math.random() * 10);

      if (blogs.nodes[randomNumber].title === article.title) {
        if (randomNumber === 0) {
          setSuggestedArticle(blogs.nodes[randomNumber + 1]);
        } else {
          setSuggestedArticle(blogs.nodes[randomNumber - 1]);
        }
      } else {
        setSuggestedArticle(blogs.nodes[randomNumber]);
      }
    }

    return () => {
      setSuggestedArticle();
    };
  }, [article]);

  return (
    <div>
      <div>
        <img
          src={article.image.url}
          alt={article.image.altText || 'Blog Image'}
          className="single-blog-image"
        />
      </div>
      <div className="single-blog-body">
        <div className="body-text">
          <h1 className="blog-article-h1">{article.title}</h1>
          <div dangerouslySetInnerHTML={{__html: article.contentHtml}} />
          <div className="blog-article-author">
            <FiUser
              style={{
                fontSize: '40px',
                backgroundColor: '#d9d9d9',
                padding: '0.5rem',
              }}
            />
            <div className="blog-article-author-name">
              <p>Written by</p>
              <p>{article.author.name}</p>
            </div>
          </div>
        </div>
        {suggestedArticle && (
          <div className="body-article">
            <p className="body-article-title">
              You might also be interested to read
            </p>
            <div className="body-article-blogCard">
              <Link
                to={`/blogs/${suggestedArticle.blog.handle}/${suggestedArticle.handle}`}
              >
                <BlogCard
                  image={suggestedArticle.image}
                  title={suggestedArticle.title}
                  body={suggestedArticle.contentHtml}
                />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleBlogPage;
