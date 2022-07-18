 import AddCircleIcon from '@mui/icons-material/AddCircle';
import styles from  "../styles/CreateInputField.module.css"

function CreateInputField(props){

    return (
        <div className={styles.zInd} >

          <form className = {styles.formFlex}>
            <input
                    value={props.newInput}
                    type="text"
                    placeholder="Top text"
                    onInput={props.handleChange}
                />
                <AddCircleIcon type="button" fontSize="large" onClick={props.createDecision} />
          </form>
    </div>
     )

  }

  export default CreateInputField;