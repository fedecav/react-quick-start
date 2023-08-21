import Header from '../../components/Header-standard/Header.js';
import Footer from '../../components/Footer/Footer.js';
import './about.css'
export default function About(){
    return(
    <>
    <Header fixed={false}/>
    <h1 className='title'>About</h1>
    <Footer/>
    </>
    )
}