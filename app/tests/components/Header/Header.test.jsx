import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import {
  HeaderMenuMobileToggle,
  SearchToggle,
  CartBadge,
  activeLinkStyle,
  CartToggle,
  HeaderCtas,
  Header,
} from '~/components/Header/Header';

jest.mock('../../../../public/kikiHomeBoxLogo.avif', () => jest.fn());

jest.mock('@remix-run/react', () => {
  const Await = jest.fn(() => <p>Mocked Await</p>);
  const NavLink = jest.fn(() => <p>Mocked NavLink</p>);

  return {
    Await,
    NavLink
  }
})

jest.mock('@shopify/hydrogen', () => {
  const CartForm = jest.fn();
  const Image = jest.fn();
  const Money = jest.fn();
  return {
    CartForm,
    Image,
    Money
  }
})

jest.mock('~/components/Header/HeaderMenu', () => {
  const HeaderMenu = jest.fn();
  return {
    HeaderMenu
  }
});

describe('HeaderMenuMobileToggle', () => {
  it('should load the hamburger char', () => {
    render(<HeaderMenuMobileToggle />);
    expect(screen.getByText('☰')).toBeInTheDocument();
  });
});

describe('SearchToggle', () => {
  it('should load the search icon', () => {
    render(<SearchToggle />);
    expect(screen.getByTestId('BsSearch')).toBeInTheDocument();
  });
});

describe('CartBadge', () => {
  it('should rencer the count passed to the function', () => {
    render(<CartBadge count={5} />);
    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByTestId('BsCart3')).toBeInTheDocument();
  });
});

describe('activeLinkStyle', () => {
  it('return "bold" for fontWeight, "grey" for color', () => {
    const style = activeLinkStyle({isActive: true, isPending: true});
    expect(style).toEqual({fontWeight: 'bold', color: 'grey'});
  });

  it('return "undefined" for fontWeight, "black" for color', () => {
    const style = activeLinkStyle({isActive: false, isPending: false});
    expect(style).toEqual({fontWeight: undefined, color: 'black'});
  });

  it('return "undefined" for fontWeight, "grey" for color', () => {
    const style = activeLinkStyle({isActive: false, isPending: true});
    expect(style).toEqual({fontWeight: undefined, color: 'grey'});
  });

  it('return "bold" for fontWeight, "black" for color', () => {
    const style = activeLinkStyle({isActive: true, isPending: false});
    expect(style).toEqual({fontWeight: 'bold', color: 'black'});
  });
});

describe('CartToggle', () => {
    it('load CartToggle', () => {
        render(<CartToggle />);
        expect(screen.getByText('Mocked Await')).toBeInTheDocument();
    })
});

describe('HeaderCtas', () => {
    it('load HeaderCtas with Account logged in', () => {
        render(<HeaderCtas isLoggedIn={true} cart={0} />)
        expect(screen.getByText('Mocked NavLink')).toBeInTheDocument();
    })
})

describe('Header', () => {
  it('load the main Header function', () => {
    render(<Header header={jest.fn()} isLoggedIn={jest.fn()} cart={jest.fn()}  />)
    expect(require('~/components/Header/HeaderMenu').HeaderMenu).toHaveBeenCalledTimes(1);
  })
})
