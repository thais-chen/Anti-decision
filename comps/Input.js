import { useState } from "react";
import {nanoid} from "nanoid"




function Input(props){ 
    const  toDecide = props.choicesList.map( x => 
    <div key = {nanoid()}> {x} </div>
    )  

    return (

        <div>
            
               
                 <div> {toDecide}</div>
        </div>
      );
}

export default Input;
