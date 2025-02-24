import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Join from './components/Join/Join';
import Plans from './components/Plans/Plans';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Reel from './components/Reel/Reel';
import Testimonials from './components/Testimonials/Testimonials';
function App() {
  return (
    <div className="App">
          <Hero/>
          <Programs/>
          <Reasons/>
          <Reel />
          <Plans/>
          <Testimonials/>
          <Footer/>
    </div>
  );
}

export default App;
