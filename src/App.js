import logo from './logo.svg';
import './App.css';
import Header from './section/Header';
import About from './section/About';
import Portofolio from './section/Portofolio';
import Contact from './section/Contact';
import Footer from './section/Footer';

function App() {
  return (
    <div className='overflow-x-hidden'>
      <Header />
      <About />
      <Portofolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
