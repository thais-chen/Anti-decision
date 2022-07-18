import AutoFixHighTwoToneIcon from '@mui/icons-material/AutoFixHighTwoTone';
import { useState } from 'react';
import styles from "../styles/Answer.module.css";

const Answer = (props) => {
     const chosenOneBody = props.chosenOne.map(choice => choice.body)
     const [chosen,setChosen] = useState("")
     const [showRestartText,setShowRestartText] = useState(false)

     const handleMouseOver = (e) => {
        //set styles for mouseover
        e.target.style.backgroundColor = "lightblue"
        props.setRestartDecision(true)
        setShowRestartText(true)
     }
        const handleMouseOut = (e) => {
        //set styles for mouseout
        e.target.style.backgroundColor = "white"
        setShowRestartText(false)
        props.setRestartDecision(false)
     }


     return (


    <div>
        {props.chosenOne.length > 1 &&   //if there is more than one choice
        <button onClick={()=>{
            props.setShowChoice(true)
            setChosen( chosenOneBody[Math.floor(Math.random() * chosenOneBody.length)] )

         }}> <AutoFixHighTwoToneIcon  /> </button>}

           {props.showChoice &&
           <div className={styles.decisionfinal} onMouseEnter = {handleMouseOver} onMouseLeave={handleMouseOut} onClick={props.resetApp} >
             {showRestartText ? <div className={styles.decisionRestart}>Start Over </div> : <div  >{chosen}</div>}
            </div>
            }
    </div> );
}

export default Answer;