import AutoFixHighTwoToneIcon from '@mui/icons-material/AutoFixHighTwoTone';

const Answer = ({chosenOne}) => {
 
    return (
    <div>
        <AutoFixHighTwoToneIcon onClick={() => alert( chosenOne[Math.floor(Math.random() * chosenOne.length)])}></AutoFixHighTwoToneIcon>
    </div> );
}

export default Answer;