import {
    links,
    loader,
    shouldRevalidate,
    forTestingOnly,
  } from '../root'; // Update the path accordingly

  // as a note: Jest cannot handle SVGs properly. You need to mock the SVGs to non-existent
  jest.mock("../../public/favicon.svg", () => jest.fn());
  
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
  
        const data = await loader({ context });
        expect(data.data).toHaveProperty('cart');
        expect(data.data).toHaveProperty('footer');
        expect(data.data).toHaveProperty('header');
        expect(data.data).toHaveProperty('isLoggedIn');
        expect(data.data).toHaveProperty('publicStoreDomain');
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
        const result = await forTestingOnly.validateCustomerAccessToken(session, customerAccessToken);
        expect(result).toHaveProperty('isLoggedIn');
        expect(result).toHaveProperty('headers');
      });
    });
  
    // Continue here
  });
  