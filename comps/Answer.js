import AutoFixHighTwoToneIcon from '@mui/icons-material/AutoFixHighTwoTone';
import { useState } from 'react';
import styles from "../styles/Answer.module.css";
import { green } from '@mui/material/colors';
const Answer = (props) => {
     const chosenOneBody = props.chosenOne.map(choice => choice.body)
     const [chosen,setChosen] = useState("")
     const [showRestartText,setShowRestartText] = useState(false)

     const handleMouseOver = (e) => {
        //set styles for mouseover
      props.setRestartDecision(true)
        setShowRestartText(true)
     }
        const handleMouseOut = (e) => {
        //set styles for mouseout
        setShowRestartText(false)
        props.setRestartDecision(false)
     }


     return (


    <div className={styles.decisionFinalContainer}>
        {props.chosenOne.length > 1 &&   //if there is more than one choice
        <button className={styles.buttonDiv} onClick={()=>{
            props.setShowChoice(true)
            setChosen( chosenOneBody[Math.floor(Math.random() * chosenOneBody.length)] )

         }}> <AutoFixHighTwoToneIcon  sx={{ fontSize:50, color: green[800] } } /> Get Decision </button>}

           {props.showChoice &&
           <div className={styles.decisionfinal} onMouseEnter = {handleMouseOver} onMouseLeave={handleMouseOut} onClick={props.resetApp} >
             {showRestartText ? <div className={styles.decisionRestart}>Start Over </div> : <div  >{chosen}</div>}
            </div>
            }
    </div> );
}

export default Answer;