import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import styles from  "../styles/CreateInputField.module.css"
import { green } from '@mui/material/colors';
import { white } from '@mui/material/colors';



function CreateInputField(props){

    return (
        <div className={styles.zInd} >

          <style jsx>{`
            ::placeholder {
              color: rgb(147, 141, 141);
              padding:2px;
              font-size: 20px;
              font-family: 'Rubik', sans-serif;

            }
            @media screen and (min-width: 600px) {
              ::placeholder {
                font-size: 40px;
            }
                `}</style>

          <form className = {styles.formFlex} onSubmit={e => { e.preventDefault(); }}>
                 <input
                    value={props.newInput}
                    type="text"
                    placeholder="Add a choice..."
                    onInput={props.handleChange}
                />
                <AddOutlinedIcon type="button" className={styles.circleIcon} onClick={props.createDecision} sx={{ fontSize:50, color:white} } />
          </form>
    </div>
     )

  }

  export default CreateInputField;