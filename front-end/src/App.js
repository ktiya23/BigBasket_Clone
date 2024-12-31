import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ImageSlider from './components/ImageSlider/ImageSlider';
import FooterImgSlider from './components/FooterImgSlider/FooterImgSlider';
import Paragraph from './components/Paragraph/Paragraph';
import TopOffers from './components/TopOffers/TopOffers';
import SmartBasket from './components/MySmartBasket/SmartBasket';
import BestSeller from './components/BestSeller/BestSeller';
import FruitNVeg from './components/Fruits_Veg/FruitNVeg';
import DailyStaples from './components/DailyStaples/DailyStaples';
function App() {
  return (
    <>
        <Header /><br/>
        <ImageSlider /> <br/>
        <SmartBasket/> <br/>
        <BestSeller/>
        <TopOffers /><br/>
        <FruitNVeg /><br/>
        {/* <DailyStaples/> */}
        <FooterImgSlider />
        <Paragraph />
        <Footer />
        </>
  );
}

export default App;
