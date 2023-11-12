import {json} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import SingleBlogPage from '~/components/Blogs/SingleBlogPage';

export const meta = ({data}) => {
  return [
    {title: `Kiki's Home Box | ${data.article.articleByHandle.title} article`},
  ];
};

export async function loader({params, context, request}) {
  const {blogHandle, articleHandle} = params;

  if (!articleHandle || !blogHandle) {
    throw new Response('Not found', {status: 404});
  }

  const {blog} = await context.storefront.query(ARTICLE_QUERY, {
    variables: {blogHandle, articleHandle},
  });

  if (!blog?.articleByHandle) {
    throw new Response(null, {status: 404});
  }

  const article = blog;

  return json({article});
}

export default function Article() {
  const {article} = useLoaderData();

  return (
    <div>
      <SingleBlogPage
        article={article.articleByHandle}
        blogs={article.articles}
      />
    </div>
  );
}

// NOTE: https://shopify.dev/docs/api/storefront/latest/objects/blog#field-blog-articlebyhandle
const ARTICLE_QUERY = `#graphql
  query Article(
    $articleHandle: String!
    $blogHandle: String!
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(language: $language, country: $country) {
    blog(handle: $blogHandle) {
      articleByHandle(handle: $articleHandle) {
        title
        contentHtml
        publishedAt
        author: authorV2 {
          name
        }
        image {
          id
          altText
          url
          width
          height
        }
        seo {
          description
          title
        }
      }
      articles(first: 10, reverse: true) {
        nodes {
          ...ArticleItem
        }
      }
    }
  }
  fragment ArticleItem on Article {
    author: authorV2 {
      name
    }
    contentHtml
    handle
    id
    image {
      id
      altText
      url
      width
      height
    }
    publishedAt
    title
    blog {
      handle
    }
  }
`;
