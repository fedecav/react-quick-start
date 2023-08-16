import React from 'react';
import LineCards from './LineCards';
import '../App.css';


function Section(props){
  const sectionContent = [];
    for (let i = 0 ; i < 6 ; i += 2){
      let x = i + 1
      console.log(i)
      console.log(x)
      sectionContent.push(
        <LineCards characterData1={props.characterData[i]} characterData2={props.characterData[x]} key={i}/>
      );
    }     
    return(
      <section className='section'>  
     {sectionContent}
      </section>
    )
  }

export default Section;