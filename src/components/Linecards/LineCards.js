import React from "react";
import Card from '/Users/formazionequinck/Desktop/workspace/react-quick-start/src/components/Card/Card.js';

function LineCards(props){
    return(
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <Card characterData={props.characterData1}/>
            <Card characterData={props.characterData2}/>
      </div>
    )
}

export default LineCards;