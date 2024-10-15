import './App.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import { ChakraProvider } from '@chakra-ui/react';
function App() {
  return (
    <ChakraProvider> 
      {/* <BrowserRouter> */}
        <Header />
        <NavBar />
        {/* <Routes>
          <Route path='/' element={<h1>Home Page</h1>} /> 
        </Routes> */}
        <Footer />
      {/* </BrowserRouter> */}
    </ChakraProvider>
  );
}

export default App;
