import React from "react";
import Card from "./Card";

function LineCards(props){
    return(
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <Card characterData={props.characterData1}/>
            <Card characterData={props.characterData2}/>
      </div>
    )
}

export default LineCards;