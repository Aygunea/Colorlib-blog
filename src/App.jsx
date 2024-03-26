import './App.css';
import Header from './Layout/Header/Header';
import Footer from './Layout/Footer/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App;
