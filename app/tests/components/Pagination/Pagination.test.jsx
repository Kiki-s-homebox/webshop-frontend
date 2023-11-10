import {render, fireEvent, screen} from '@testing-library/react';
import Pagination from '../../../components/Pagination/Pagination';
import {usePagination} from '~/hooks/usePagination';

jest.mock('../../../hooks/usePagination', () => {
  const usePagination = jest.fn();
  return {
    usePagination,
  };
});

// Mock the global window object
beforeEach(() => {
  global.scrollTo = jest.fn();
});

afterEach(() => {
  global.scrollTo.mockClear();
  delete global.scrollTo;
});

describe('Pagination Component', () => {
  const onPageChangeMock = jest.fn();

  const props = {
    onPageChange: onPageChangeMock,
    totalCount: 10,
    currentPage: 1,
    pageSize: 5,
  };

  it('No Pagination should return null', () => {
    usePagination.mockReturnValue([1]);
    const {container} = render(<Pagination {...props} />);
    expect(container.firstChild).toBeNull();
  });

  it('should render and trigger window.scrollTo', () => {
    const props = {
      onPageChange: onPageChangeMock,
      totalCount: 10,
      currentPage: 1,
      pageSize: 5,
    };
    render(<Pagination {...props} />);
    // Expect that window.scrollTo is called
    expect(global.scrollTo).toHaveBeenCalledWith({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  });

  it('calls onPageChange with the correct page number when a page number item is clicked', () => {
    usePagination.mockReturnValue([1, 2]);
    onPageChangeMock.mockReturnValue(2);
    const props = {
      onPageChange: onPageChangeMock,
      totalCount: 10,
      currentPage: 1,
      pageSize: 5,
      customClassName: ['test', 'pages'],
    };
    render(<Pagination {...props} />);
    const page2 = screen.getByText('2');
    fireEvent.click(page2);
    expect(onPageChangeMock).toHaveBeenCalledWith(2);
  });
  /*


  it('calls onPageChange with the correct page number when the next button is clicked', () => {
    const { getByTestId } = render(<Pagination {...props} />);
    const nextButton = getByTestId('pagination-next-button');
    fireEvent.click(nextButton);
    expect(onPageChangeMock).toHaveBeenCalledWith(2);
  });

  it('calls onPageChange with the correct page number when the previous button is clicked', () => {
    const { getByTestId } = render(<Pagination {...props} currentPage={2} />);
    const previousButton = getByTestId('pagination-previous-button');
    fireEvent.click(previousButton);
    expect(onPageChangeMock).toHaveBeenCalledWith(1);
  });*/
});
