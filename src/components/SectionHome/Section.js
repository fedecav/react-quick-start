import React from 'react';
import LineCards from './LineCards';
import './SectionHome.css';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const y  = getRandomInt(14)
console.log(y)

function Section(props){

  const sectionContent = [];
    for (let i = y ; i < y + 6; i += 2){
      sectionContent.push(
        <LineCards characterData1={props.characterData[i]} characterData2={props.characterData[i+1]} key={i}/>
      );
    }     
    return(
      <section className='section'>  
     {sectionContent}
      </section>
    )
  }

export default Section;