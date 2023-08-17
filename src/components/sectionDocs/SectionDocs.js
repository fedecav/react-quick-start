import './SectionDocs.css'

export default function SectionDocs(){
    return(
        <div className='docs-container'>
            <div className='docs-sidebar' >
                <div className='docs-sidebar'>                
                <span className='little-title'>titolo</span>
                    <span>testo 1</span>
                    <span>testo 2</span>
                    <span>testo 3</span>
                </div>
                <div  className='docs-sidebar container'>
                    <span className='little-title'>titolo</span>
                    <span>testo 1</span>
                    <span>testo 2</span>
                    <span>testo 3</span>
                </div>
            </div>
            <div className='docs-content'>
                <h1>titolo</h1>
                <span className='paragraph'>contenuto molto interessante</span>
            </div>
        </div>
    )
}