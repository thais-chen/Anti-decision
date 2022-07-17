import {useState} from "react"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import styles from  "../styles/CreateInputField.module.css"

function CreateInputField(props){

    return (
        <div >
             <h1> Add a choice </h1>
          <form className = {styles.formFlex}>
            <input
                    value={props.newInput}
                    type="text"
                    placeholder="Top text"
                    onInput={props.handleChange}
                /> 
                <AddCircleIcon type="button" onClick={props.createDecision} />
          </form>
    </div>
     )

  }

  export default CreateInputField;