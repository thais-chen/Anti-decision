import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import styles from "../styles/CreateInputField.module.css";
import { green } from "@mui/material/colors";
import { white } from "@mui/material/colors";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

function CreateInputField(props) {
  return (
    <div className={styles.zInd}>
      <style jsx>{`
            ::placeholder {
              color: rgb(147, 141, 141);
              padding:2px;
              font-size: 20px;
              font-family: 'Nunito Sans', sans-serif;
            }
            @media screen and (min-width: 800px) {
              ::placeholder {
                font-size: 40px;
                padding:10px;
            }
                `}</style>

      <form
        className={styles.formFlex}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          value={props.newInput}
          type="text"
          placeholder="Add a choice..."
          onInput={props.handleChange}
        />
        <AddOutlinedIcon
          type="button"
          className={styles.circleIcon}
          onClick={props.createDecision}
          sx={{ fontSize: 50, color: white }}
        />
        {/* <RestartAltIcon type="button"   onClick={props.resetApp} sx={{ fontSize:50, color:white} } /> */}
      </form>
    </div>
  );
}

export default CreateInputField;
