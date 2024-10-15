import './App.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import { ChakraProvider } from '@chakra-ui/react';
import ImageSlider from './components/ImageSlider/ImageSlider';
function App() {
  return (
    <ChakraProvider> 
        <Header />
        <NavBar />
        <ImageSlider />
        <Footer />
    </ChakraProvider>
  );
}

export default App;
