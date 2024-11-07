import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero';
import Projects from './components/project/Projects';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const App = () => {

  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
    </>
  )
}

export default App;
