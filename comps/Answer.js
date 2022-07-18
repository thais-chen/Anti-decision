import AutoFixHighTwoToneIcon from '@mui/icons-material/AutoFixHighTwoTone';
import { useState } from 'react';
import styles from "../styles/Answer.module.css";
 
const Answer = ({chosenOne}) => {
     const chosenOneBody = chosenOne.map(choice => choice.body)
     const [chosen,setChosen] = useState("")
     
    return ( 
    <div>
         
        <button onClick={()=>{  setChosen( chosenOneBody[Math.floor(Math.random() * chosenOneBody.length)] ) }}> <AutoFixHighTwoToneIcon /> </button>
        
        <div className={styles.decisionfinal}> 
             <h1> {chosen}</h1>
        </div>
      
    </div> );
}

export default Answer;