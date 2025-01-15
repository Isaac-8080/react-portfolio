import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero';

import AOS from 'aos';
import 'aos/dist/aos.css' // You can also use <link> for styles;
import AboutEducation from './components/AboutEducation/AboutEducation';
import Projects from './components/project/Projects';
import SkillsTechnologies from './components/SkillsTechnologies/SkillsTechnologies';
import Review from './components/Reviews/Review';
import Footer from './components/Footer';

const App = () => {

  AOS.init();
  
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <AboutEducation />
      <SkillsTechnologies />
      <Review />
      <Footer />
    </>
  )
}

export default App;
