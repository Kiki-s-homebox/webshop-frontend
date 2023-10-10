import {json} from '@shopify/remix-oxygen';
import {Await, useLoaderData, Link} from '@remix-run/react';
import {Image, Money} from '@shopify/hydrogen';
import {Suspense} from 'react';

export async function loader({context}) {
  const {storefront} = context;
  const {products} = await storefront.query(ALL_PRODUCTS_QUERY);
  return json(products);
}

export default function Products() {
  const products = useLoaderData();
  return (
    <div className="recommended-products">
      <h2>Recommended Products</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={products}>
          {({products}) => (
            <div className="recommended-products-grid">
              {products.nodes.map((product) => (
                <Link
                  key={product.id}
                  className="recommended-product"
                  to={`/products/${product.handle}`}
                >
                  <Image
                    data={product.images.nodes[0]}
                    aspectRatio="1/1"
                    sizes="(min-width: 45em) 20vw, 50vw"
                  />
                  <h4>{product.title}</h4>
                  <small>
                    <Money data={product.priceRange.minVariantPrice} />
                  </small>
                </Link>
              ))}
            </div>
          )}
        </Await>
      </Suspense>
      <br />
    </div>
  );
}

const ALL_PRODUCTS_QUERY = `#graphql
fragment Product on Product {
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
query AllProducts ($country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
  products(first: 250, sortKey: UPDATED_AT, reverse: true) {
    nodes {
      ...Product
    }
  }
}
`;
