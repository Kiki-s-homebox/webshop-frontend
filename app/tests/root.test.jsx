import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import App, {links, loader, shouldRevalidate, forTestingOnly} from '../root';

// as a note: Jest cannot handle SVGs properly. You need to mock the SVGs to non-existent
jest.mock('../../public/favicon.svg', () => jest.fn());
jest.mock('../components/Layout/Layout', () => {
  return {
    __esModule: true,
    Layout: jest.fn(() => <p>Mocked Layout</p>), // Replace this with the appropriate structure of your Layout component
  };
});

jest.mock('@shopify/hydrogen', () => {
  const useNonce = jest.fn(() => 'mockNonce');

  return {
    useNonce,
  };
});

jest.mock('@shopify/remix-oxygen', () => {
  const defer = jest.fn();

  return {
    defer,
  };
});

jest.mock('@remix-run/react', () => {
  const useLoaderData = jest.fn();
  const Meta = jest.fn();
  const Links = jest.fn();
  const Outlet = jest.fn();
  const ScrollRestoration = jest.fn();
  const Scripts = jest.fn();
  const LiveReload = jest.fn();
  return {
    useLoaderData,
    Meta,
    Links,
    Outlet,
    ScrollRestoration,
    Scripts,
    LiveReload,
  };
});

describe('App Functions', () => {
  describe('shouldRevalidate', () => {
    it('should revalidate when form method is not GET', () => {
      const result = shouldRevalidate({
        formMethod: 'POST',
        currentUrl: 'currentUrl',
        nextUrl: 'nextUrl',
      });
      expect(result).toBe(true);
    });

    it('should not revalidate when form method is GET', () => {
      const result = shouldRevalidate({
        formMethod: 'GET',
        currentUrl: 'currentUrl',
        nextUrl: 'nextUrl',
      });
      expect(result).toBe(false);
    });
  });

  describe('links', () => {
    it('should return an array of links', () => {
      const result = links();
      expect(Array.isArray(result)).toBe(true);
    });
  });

  describe('loader', () => {
    it('should load data without errors', async () => {
      const context = {
        storefront: {
          query: jest.fn(),
          CacheLong: jest.fn(),
        },
        session: {
          get: jest.fn(),
        },
        cart: {
          get: jest.fn(),
        },
        env: {
          PUBLIC_STORE_DOMAIN: 'example.com',
        },
      };

      await loader({context});
      expect(require('@shopify/remix-oxygen').defer).toHaveBeenCalled();
    });
  });

  describe('validateCustomerAccessToken', () => {
    it('should validate the customer access token', async () => {
      const session = {
        unset: jest.fn(),
        commit: jest.fn(),
      };
      const customerAccessToken = {
        accessToken: 'token',
        expiresAt: new Date().toISOString(),
      };
      const result = await forTestingOnly.validateCustomerAccessToken(
        session,
        customerAccessToken,
      );
      expect(result).toHaveProperty('isLoggedIn');
      expect(result).toHaveProperty('headers');
    });
  });
});

describe('App Component', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(require('@shopify/hydrogen').useNonce).toHaveBeenCalledTimes(2);
    expect(require('@remix-run/react').useLoaderData).toHaveBeenCalledTimes(2);
    expect(require('@remix-run/react').Meta).toHaveBeenCalledTimes(1);
    expect(require('@remix-run/react').Links).toHaveBeenCalledTimes(1);
    expect(require('@remix-run/react').Outlet).toHaveBeenCalledTimes(0);
    expect(require('@remix-run/react').Scripts).toHaveBeenCalledTimes(1);
    expect(require('@remix-run/react').LiveReload).toHaveBeenCalledTimes(1);
    expect(screen.getByText('Mocked Layout')).toBeInTheDocument();
  });
});
