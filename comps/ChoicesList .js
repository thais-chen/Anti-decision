import  styles from '../styles/ChoicesList.module.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Typography from '@mui/material/Typography';




function ChoicesList(props) {
    const decisionLength = props.decisionInput.length


    return (
        ///if there is more than one choice show list of choices

        <div className={styles.choicesList}>
        { decisionLength > 0 && !props.resetList &&
        <ul>
            {props.decisionInput.map((x) =>
            <Typography variant="subtitle2">
                <li key = {x.id} className =  {styles.choiceItem} >
                    {x.body}
                </li></Typography>
                )}
        </ul>}
    </div>

   )

}
export default  ChoicesList;