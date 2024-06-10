import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';
import { initializeTimes } from './BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})

test('initializeTimes returns the correct initial times', () => {
    const availableTimes = ["17:00", "18:00", "20:00", "21:00", "22:00"];
    const result = initializeTimes();
    expect(result).toEqual(availableTimes);
});

describe('BookingForm', () => {
    it('renders input fields with correct attributes', () => {
      render(<BookingForm availableTimes={[]} dispatch={() => {}} />);
  
      // Test name input field
      expect(screen.getByLabelText('Your Name')).toBeInTheDocument();
      expect(screen.getByLabelText('Your Name')).toHaveAttribute('type', 'text');
      expect(screen.getByLabelText('Your Name')).toHaveAttribute('id', 'name');
      expect(screen.getByLabelText('Your Name')).toHaveAttribute('name', 'name');
  
      // Test email input field
      expect(screen.getByLabelText('Your Email')).toBeInTheDocument();
      expect(screen.getByLabelText('Your Email')).toHaveAttribute('type', 'email');
      expect(screen.getByLabelText('Your Email')).toHaveAttribute('id', 'email');
      expect(screen.getByLabelText('Your Email')).toHaveAttribute('name', 'email');
  
      // Test date input field
      expect(screen.getByLabelText('Choose Date')).toBeInTheDocument();
      expect(screen.getByLabelText('Choose Date')).toHaveAttribute('type', 'date');
      expect(screen.getByLabelText('Choose Date')).toHaveAttribute('id', 'date');
      expect(screen.getByLabelText('Choose Date')).toHaveAttribute('name', 'date');
  
      // Test time select field
      expect(screen.getByLabelText('Choose Time')).toBeInTheDocument();
      expect(screen.getByLabelText('Choose Time')).toHaveAttribute('id', 'selectedTime');
      expect(screen.getByLabelText('Choose Time')).toHaveAttribute('name', 'selectedTime');
  
      // Test guests input field
      expect(screen.getByLabelText('Number of guests')).toBeInTheDocument();
      expect(screen.getByLabelText('Number of guests')).toHaveAttribute('type', 'number');
      expect(screen.getByLabelText('Number of guests')).toHaveAttribute('id', 'guests');
      expect(screen.getByLabelText('Number of guests')).toHaveAttribute('name', 'guests');
      expect(screen.getByLabelText('Number of guests')).toHaveAttribute('min', '1');
      expect(screen.getByLabelText('Number of guests')).toHaveAttribute('max', '10');
  
      // Test occasion select field
      expect(screen.getByLabelText('Occasion')).toBeInTheDocument();
      expect(screen.getByLabelText('Occasion')).toHaveAttribute('id', 'occasion');
      expect(screen.getByLabelText('Occasion')).toHaveAttribute('name', 'occasion');
    });
  });