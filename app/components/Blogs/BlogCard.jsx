import './blogCard.css';

const BlogCard = ({image, title, body}) => {
  return (
    <div className="cardWrapper">
      <img src={image.url} className="blog-card-image" alt={image.altText} />
      <div className="blog-title">{title}</div>
    </div>
  );
};

export default BlogCard;
