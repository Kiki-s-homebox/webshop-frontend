import BlogCard from './BlogCard';
import './blogsPage.css';
import {Link} from '@remix-run/react';

const BlogsPage = ({blogs}) => {
  return (
    <div className="blogs-flex">
      <h1>{blogs.title}</h1>
      <div className="blogs-grid">
        {blogs.articles.nodes.map((node) => (
          <Link
            to={`/blogs/${node.blog.handle}/${node.handle}`}
            className="blogs-a"
          >
            <BlogCard
              key={node.id}
              image={node.image}
              title={node.title}
              body={node.contentHtml}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
