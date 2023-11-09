import BlogCard from './BlogCard';
import './singleBlogPage.css';

const SingleBlogPage = ({article}) => {
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
        <div
          dangerouslySetInnerHTML={{__html: article.contentHtml}}
          className="body-text"
        />
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
