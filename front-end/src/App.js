import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={ <Header/> } />
   </Routes>
   <NavBar/>
   <Footer/>
   </BrowserRouter>
   </>
  );
}

export default App;
