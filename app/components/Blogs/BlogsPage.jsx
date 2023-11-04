import BlogCard from './BlogCard';
import './blogs.css';

const BlogsPage = ({blogs}) => {
  return (
    <div className="blogs-flex">
      <h1>{blogs.title}</h1>
      <div className="blogs-grid">
        {blogs.articles.nodes.map((node) => (
          <BlogCard
            key={node.id}
            image={node.image}
            title={node.title}
            body={node.contentHtml}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
