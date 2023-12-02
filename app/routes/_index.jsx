import {defer} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import MainPage from '~/components/MainPage/MainPage';

export const meta = () => {
  return [{title: 'Hydrogen | Home'}];
};

export async function loader({context}) {
  const {storefront} = context;

  const recommendedProducts = storefront.query(RECOMMENDED_PRODUCTS_QUERY);
  const {blogs} = await storefront.query(BLOGS_QUERY);

  const {nodes} = blogs;

  return defer({recommendedProducts, nodes});
}

export default function Homepage() {
  const data = useLoaderData();
  return (
    <div className="home">
      <MainPage data={data} />
    </div>
  );
}

const RECOMMENDED_PRODUCTS_QUERY = `#graphql
  fragment RecommendedProduct on Product {
    id
    title
    handle
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 1) {
      nodes {
        id
        url
        altText
        width
        height
      }
    }
  }
  query RecommendedProducts ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 3, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...RecommendedProduct
      }
    }
  }
`;

const BLOGS_QUERY = `#graphql
  query Blogs(
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    blogs(
      first: 3,
    ) {
      nodes {
        title
        handle
        seo {
          title
          description
        }
        articles(
          first: 3,
          reverse: true
        ) {
          nodes{
            contentHtml
            handle
            publishedAt
            id
            image {
              id
              altText
              url
            }
            title
            blog {
              handle
            }
            seo {
              description
              title
            }
          }
        }
      }
    }
  }
`;
