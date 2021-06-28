import './App.css';
import Banner from './components/Baner/Banner';
import Body1 from './components/body1/Body1';
import Body2 from './components/Body2/Body2';
import Slider from './components/Slider/Slider';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Banner/>
      <Body1/>
      <Body2/>
      <Slider/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;
