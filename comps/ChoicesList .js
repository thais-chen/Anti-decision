function ChoicesList(props){
    return (
   <div>
    <ul>
        {props.decisionInput.map(x =>
            <li key = {props.decisionInput.id}> {x} </li>)}
    </ul>
   </div>)

}
export default  ChoicesList;