
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Home from './pages/Home';
import Header from './components/Header/Header';

function App() {
  return (
   <>
   <BrowserRouter>
   {/* <Header/> */}
   <Routes>
    <Route path='/' element={ <Header/> } />
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
