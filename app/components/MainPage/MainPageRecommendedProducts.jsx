import {Await, Link} from '@remix-run/react';
import {Suspense} from 'react';
import {Image, Money} from '@shopify/hydrogen';
import './mpRecommendedProducts.css';

const MainPageRecommendedProducts = ({products}) => {
  return (
    <div className="mpRecommendedProducts-grid">
      <div className="mpRecommendedProducts-grid-header">
        <h2 style={{marginBottom: '0rem'}}>Best deals</h2>
        <h4>Get started with our kits</h4>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={products}>
          {({products}) => (
            <div className="mpRecommendedProducts-body">
              {products.nodes.map((product) => (
                <Link
                  key={product.id}
                  className="mpRecommendedProduct"
                  to={`/products/${product.handle}`}
                >
                  <div className="mpRecommendedProducts-body-image">
                    <Image
                      data={product.images.nodes[0]}
                      aspectRatio="1/1"
                      sizes="(min-width: 45em) 20vw, 50vw"
                    />
                  </div>
                  <div className="mpRecommendedProducts-body-footer">
                    <h4>{product.title}</h4>
                    <small>
                      <Money data={product.priceRange.minVariantPrice} />
                    </small>
                    <button className="mpRecommendedProducts-body-footer-button">
                      View Details
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </Await>
      </Suspense>
      <br />
    </div>
  );
};

export default MainPageRecommendedProducts;
