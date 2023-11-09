import React from 'react';
import './blogCard.css';

const BlogCard = ({image, title, body}) => {
  const imageUrl = image.url;
  const altText = image.altText;
  const [contentHtmlText, setContentHtmlText] = React.useState();

  React.useEffect(() => {
    const firstPText = extractFirstPText(body).substring(0, 150) + '...';
    setContentHtmlText(firstPText);
  }, [body]);

  const extractFirstPText = (contentHTml) => {
    const parse = new DOMParser();
    const docString = parse.parseFromString(contentHTml, 'text/html');
    const firstPText = docString.querySelector('p');
    return firstPText ? firstPText.textContent : '';
  };

  return (
    <div>
      <img src={imageUrl} className="blog-card-image" alt={altText} />
      <div style={{backgroundColor: '#855832'}}>
        <div className="blog-card-title">{title}</div>
        <div
          dangerouslySetInnerHTML={{__html: contentHtmlText}}
          className="blog-card-text"
        />
      </div>
    </div>
  );
};

export default BlogCard;
