import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ActionButton from './ActionButton';

describe('ActionButton component', () => {
  it('renders correctly with default props', () => {
    const { container } = render(<ActionButton text="Click me" />);
    expect(container).toMatchSnapshot();
  });

  it('calls onClick handler when button is clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(<ActionButton text="Click me" onClick={onClickMock} />);
    
    fireEvent.click(getByText('Click me'));
    
    expect(onClickMock).toHaveBeenCalled();
  });

  it('disables the button when disabled prop is true', () => {
    const { getByText } = render(<ActionButton text="Click me" disabled={true} />);
    const button = getByText('Click me');
    
    expect(button).toBeDisabled();
  });

  it('applies custom class names to the container div', () => {
    const { container } = render(<ActionButton text="Click me" customClassName={['custom-class']} />);
    
    expect(container.firstChild).toHaveClass('action-button custom-class');
  });
});