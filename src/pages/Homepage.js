import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Section from '../components/Section.js';
import Titolo from '../components/Titolo.js';
import characterData from '../assets/characterData.js';
import '/Users/formazionequinck/Desktop/workspace/react-quick-start/src/App.css';

export default function Homepage() {
    return (
    <div>
      <Header/>
      <Titolo/>
      <Section characterData={characterData}/>
      <Footer/>
    </div>
  );
}