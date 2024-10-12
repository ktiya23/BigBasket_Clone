
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Home from './pages/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={ <Header/> } />
   </Routes>
   <Footer/>
   </BrowserRouter>
   </>
  );
}

export default App;
