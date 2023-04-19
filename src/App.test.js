import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './components/BookingForm';

describe('Booking App', () => {
  it('renders title is present', () => {
    render(<App />);

    const linkElement = screen.getByText(/Order for Delivery/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('should render button class and attribute', () => {
    render(<BookingForm />);

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveAttribute('type', 'submit');
    expect(buttonElement).toHaveClass('button', 'button-primary');
  });

  it('should render date input field with the required attribute set', () => {
    render(<BookingForm />);

    const dateInput = screen.getByLabelText('Date');
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toHaveAttribute('required');
  });

  it('should render time input field with the required attribute set', () => {
    render(<BookingForm />);

    const timeInput = screen.getByLabelText('Time');
    expect(timeInput).toHaveAttribute('required');
  });

  it('should render Number of guests input field with the required attribute set', () => {
    render(<BookingForm />);

    const timeInput = screen.getByLabelText('Number of guests');
    expect(timeInput).toHaveAttribute('min');
    expect(timeInput).toHaveAttribute('required');
  });
});
