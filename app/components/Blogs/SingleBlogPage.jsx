import BlogCard from './BlogCard';
import './singleBlogPage.css';
import {FiUser} from 'react-icons/fi';

const SingleBlogPage = ({article}) => {
  console.log('article: ', article);
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
        <div className="body-article">
          <p className="body-article-title">
            You might also be interested to read
          </p>
          <div className="body-article-blogCard">
            <BlogCard
              image={article.image}
              title={article.title}
              body={article.contentHtml}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
