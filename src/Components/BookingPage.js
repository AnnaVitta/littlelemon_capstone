import React, { useReducer, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import BookingForm from './BookingForm';
import FetchData from './API'; // Import the custom hook for fetching data

// Reducer function to handle state updates
const timesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return action.payload;
    default:
      return state;
  }
};

const BookingPage = () => {
  const navigate = useNavigate();

  // Initialize available times using useReducer
  const [availableTimes, dispatch] = useReducer(timesReducer, []);

  // Function to fetch and initialize available times
  const initializeTimes = async () => {
    try {
      const response = await FetchData(); // Fetch data for available times
      dispatch({ type: 'UPDATE_TIMES', payload: response.availableTimes });
    } catch (error) {
      console.error("Error fetching available times:", error);
      // If error occurs, set availableTimes to a default array
      dispatch({ type: 'UPDATE_TIMES', payload: ["17:00", "18:00", "20:00", "21:00", "22:00"] });
    }
  };

  useEffect(() => {
    initializeTimes(); // No need to pass dispatch as an argument
  }, []); // Empty dependency array ensures this runs only once

  // Define the submitForm function to handle form submission
  const submitForm = async (formData) => {
    const apiUrl = 'https://your-api-endpoint.com/api/submit'; // Replace with your valid API endpoint

    try {
      // Send a POST request to the API with the form data
      const response = await fetch(apiUrl, {
        method: 'POST', // HTTP method
        headers: {
          'Content-Type': 'application/json', // Specify the content type
        },
        body: JSON.stringify(formData), // Convert form data to JSON
      });

      // Check if the response is successful (status code 200-299)
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      // Parse the JSON response
      const data = await response.json();

      // Handle the response data (e.g., show a success message)
      console.log('Form submitted successfully:', data);
      navigate('/confirmation'); // Navigate to the confirmation page
    } catch (error) {
      // Handle any errors that occur during the request
      console.error('Form submission error:', error);
    }
  };

  return (
    <div>
      <Header />
      <Nav />
      <div  className="booking">
      <h2 className="booking-title">Reserve a Table</h2>
      <BookingForm availableTimes={availableTimes || []} dispatch={dispatch} submitForm={submitForm} />
    </div></div>
  );
};

export default BookingPage;