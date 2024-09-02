import React from "react";

function RightComponent({ items, onMoveToLeft}){
    return(
        <div className="component">
          <h2>Right Component</h2>
          <ul>
           {items.map((item,index)=>(
            <li key={index} onClick={() => onMoveToLeft(item)}>
                {item}
            </li>
           ))}
          </ul>
          </div>
    );
}

export  default RightComponent;