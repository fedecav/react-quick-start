import React, { useState, useEffect } from 'react';
import HeaderStandard from '../../components/Header-standard/HeaderStandard.js';
import Footer from '../../components/Footer/Footer';
import Section from '../../components/SectionHome/Section.js'
import Titolo from '../../components/Titolo/Titolo.js'


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
let x  = getRandomInt(42)


export default function Homepage() {
    const [characters, setCharacters] = useState();
    useEffect(() => {
      fetch(`https://rickandmortyapi.com/api/character/?page=${x}`)
        .then((response) => response.json())
        .then((data) => {
            setCharacters(data.results)
        })
        .catch((err) => {
            console.log(err.message)
        });
    }, []);

    return (
    <div>
      <HeaderStandard/>
      <Titolo/>
      {characters && <Section characterData={characters}/>}
      <Footer/>
    </div>
  );
}