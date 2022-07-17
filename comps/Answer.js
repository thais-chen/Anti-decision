const Answer = ({chosenOne}) => {
 
    return (
    <div>
        <button onClick={() => alert( chosenOne[Math.floor(Math.random() * chosenOne.length)])}></button>
    </div> );
}

export default Answer;