import AutoFixHighTwoToneIcon from "@mui/icons-material/AutoFixHighTwoTone";
import { useState } from "react";
import styles from "../styles/Answer.module.css";
import { green } from "@mui/material/colors";
import { white } from "@mui/material/colors";
const Answer = (props) => {
  const chosenOneBody = props.chosenOne.map((choice) => choice.body);
  const [chosen, setChosen] = useState("");

  return (
    <div className={styles.decisionFinalContainer}>
      {props.chosenOne.length > 1 && ( //if there is more than one choice
        <button
          className={styles.buttonDiv}
          onClick={() => {
            props.setShowChoice(true);
            props.showAnswerDiv("show");
            setChosen(
              chosenOneBody[Math.floor(Math.random() * chosenOneBody.length)]
            );
          }}
        >
          {" "}
          <AutoFixHighTwoToneIcon sx={{ fontSize: 50, color: green }} /> Get
          Decision{" "}
        </button>
      )}

      {props.showChoice && (
        <div className={styles.decisionContainer}>{chosen}</div>
      )}
    </div>
  );
};

export default Answer;
