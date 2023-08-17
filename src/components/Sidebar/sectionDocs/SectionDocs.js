import './SectionDocs.css'

export default function SectionDocs(){
    return(
        <><div className="sidenav">
            <p className='script'>About</p>
            <p>Services</p>
            <p>Clients</p>
            <p>Contact</p>
        </div>
        <div className='main'>
            <h1>CIAO!</h1>
            <p className='script-Docs'>
                In questo caso, non possiamo usare le virgolette doppie nella stringa finale senza usare <br></br>
                i caratteri di escape. Tuttavia, possiamo usare virgolette singole se incapsuliamo l’intera <br></br>
                struttura tra virgolette doppie. Vedere il codice seguente.
            </p>
        </div></>
    )
}