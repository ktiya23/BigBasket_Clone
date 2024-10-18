import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import ImageSlider from './components/ImageSlider/ImageSlider';
import FooterImgSlider from './components/FooterImgSlider/FooterImgSlider';
import Paragraph from './components/Paragraph/Paragraph';
import TopOffers from './components/TopOffers/TopOffers';
function App() {
  return (
    <>
        <Header />
        <NavBar />
        <ImageSlider />
        <TopOffers />
        <FooterImgSlider />
        <Paragraph />
        <Footer />
        </>
  );
}

export default App;
