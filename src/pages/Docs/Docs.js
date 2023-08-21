import Header from '../../components/Header-standard/Header.js';
import Footer from '../../components/Footer/Footer.js';
import './Docs.css'
import SectionDocs from '../../components/sectionDocs/SectionDocs.js';

export default function Docs(){
    return(
    <>
        <Header fixed={true}/>
        <SectionDocs/>
        <Footer />
    </>
    )
}