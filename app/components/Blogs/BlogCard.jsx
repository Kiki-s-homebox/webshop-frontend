import './blogCard.css';

const BlogCard = ({image, title, body}) => {
  const imageUrl = image.url;
  const altText = image.altText;
  // const contentHtmlText = body.substring(0, 200);
  // console.log("contentHtmlText: ", contentHtmlText)
  const contentHtmlText =
    "If you're planning to move to Finland, one of the most important aspects to consider is finding suitable housing. While the Finnish housing market may seem complex, with the right knowledge and gui";

  return (
    <div className="cardWrapper">
      <img src={imageUrl} className="blog-card-image" alt={altText} />
      <div className="blog-card-title">{title}</div>
      <div
        dangerouslySetInnerHTML={{__html: contentHtmlText}}
        className="blog-card-text"
      />
    </div>
  );
};

export default BlogCard;
