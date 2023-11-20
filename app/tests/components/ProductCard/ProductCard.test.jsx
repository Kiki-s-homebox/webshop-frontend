import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import ProductCard from '../../../components/ProductCard/ProductCard';

jest.mock('@shopify/hydrogen', () => {
  const Money = jest.fn(() => <p>Mocked Money</p>);
  const Image = jest.fn(() => <p>Mocked Image</p>);
  return {
    Money,
    Image,
  };
});

jest.mock('@remix-run/react', () => {
  const useNavigate = jest.fn(() => jest.fn());
  return {
    useNavigate,
  };
});

describe('ProductCard', () => {
  const mockProduct = {
    id: 'id',
    title: 'title',
    handle: 'handle',
    availableForSale: true,
    createdAt: 'createdAt',
    priceRange: {
      maxVariantPrice: {
        amount: 'amount',
        currencyCode: 'currencyCode',
      },
      minVariantPrice: {
        amount: 'amount',
        currencyCode: 'currencyCode',
      },
    },
    images: {
      nodes: [
        {
          id: 'id',
          url: 'url',
          altText: 'altText',
          width: 1,
        },
      ],
    },
  };

  it('should render correctly with correct information', () => {
    render(<ProductCard product={mockProduct} />);
    // Assert that the product title is rendered
    expect(screen.getByText('title')).toBeInTheDocument();
    // Assert that the image alt text is rendered
    expect(screen.getByAltText('altText')).toBeInTheDocument();
  });
});
