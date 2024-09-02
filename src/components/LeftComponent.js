import React from "react";

function LeftComponent({ items, onMoveToRight}){
    return(
        <div className="component">
          <h2>Left Component</h2>
          <ul>
           {items.map((item,index)=>(
            <li key={index} onClick={() => onMoveToRight(item)}>
                {item}
            </li>
           ))}
          </ul>
          </div>
    );
}

export  default LeftComponent;