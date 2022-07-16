import { useState } from "react";



function Input({decision}){
   
     const createInputField =  decision.map( x => 
     <div>
        {x}
     </div>
     ) 

    return (
        <div>
                <label>Option 1 </label>
                 {createInputField}
  
                
        </div>
      );
}

export default Input;
