import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero';
import Projects from './components/project/Projects';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import AboutEducation from './components/AboutEducation/AboutEducation';
import SkillsTechnologies from './components/SkillsTechnologies/SkillsTechnologies';
import Review from './components/Reviews/Review';
import Footer from './components/Footer';
// ..
AOS.init();

const App = () => {

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
