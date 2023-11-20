import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import ProductCard from '../../../components/ProductCard/ProductCard';

jest.mock('@shopify/hydrogen', () => {
  const Money = jest.fn(() => 'Mocked Money');
  const Image = jest.fn(() => 'Mocked Image');
  return {
    Money,
    Image,
  };
});

jest.mock('@remix-run/react', () => {
  const useNavigate = jest.fn(() => jest.fn());
  const Link = jest.fn(() => 'Mocked Link');
  return {
    useNavigate,
    Link,
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
