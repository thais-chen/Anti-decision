import styles from '../styles/ChoicesList.module.css';
import Typography from '@mui/material/Typography';




function ChoicesList(props) {
    const decisionLength = props.decisionInput.length


    return (
        ///if there is more than one choice show list of choices

        <div className={styles.containerList} style={{ display: props.resetList ? 'none' : 'block' }}>
            {decisionLength > 0 && !props.resetList &&
                <ul>
                    {props.decisionInput.map((x) =>

                        <Typography variant="subtitle2" key={x.id} >
                            <li className={styles.choiceItem} >
                                {x.body}
                            </li></Typography>
                    )}
                </ul>}
        </div>

    )

}
export default ChoicesList;