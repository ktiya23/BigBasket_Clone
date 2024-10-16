import './App.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import ImageSlider from './components/ImageSlider/ImageSlider';
import FooterImgSlider from './components/FooterImgSlider/FooterImgSlider';
function App() {
  return (
    <>
        <Header />
        <NavBar />
        <ImageSlider />
        <FooterImgSlider />
        <Footer />
        </>
  );
}

export default App;
