import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './Components/Home';
import BookingPage from './Components/BookingPage';
import ConfirmationPage from './Components/ConfirmationPage';
import PageUnderConstruction from './Components/PageUnderConstruction';

function App() {
  return (
  //adding semantic tags: fragment <></>, header, nav,main,footer
    <>
    <section className="App">
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/reservation' element={<BookingPage />} />
      <Route path='/confirmation' element={<ConfirmationPage />} />
      <Route path='/menu' element={<PageUnderConstruction />} />
      <Route path='/login' element={<PageUnderConstruction />} />
      <Route path='/orderDelivery' element={<PageUnderConstruction />} />
      <Route path='/onlineMenu' element={<PageUnderConstruction />} />
      <Route path='/orderOnline' element={<PageUnderConstruction />} />
      </Routes>
    </section>
    </>
  );
}

export default App;
