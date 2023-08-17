import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';
import SectionDocs from '../../components/Sidebar/sectionDocs/SectionDocs.js';
import './Docs.css'

export default function Docs(){
    return(
    <>
        <Header />
        <div>
            <SectionDocs/>
        </div>
        <Footer />
    </>
    )
}