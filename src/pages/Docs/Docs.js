import Header from '../../components/Header.js';
import SideBar from '../../components/sidebar/Sidebar.js';
import Footer from '../../components/Footer.js';
import SectionDocs from '../../components/section/SectionDocs.js';

export default function Docs(){
    return(
    <>
        <div>
        <Header />
        <div><SideBar/></div>
       <SectionDocs/>
        <Footer />
        </div>
    </>
    )
}