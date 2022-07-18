function ChoicesList( {decisionInput}){
    return (
   <div>
    <ul>
        {decisionInput.map((x) =>
            <li key = {x.id}>
                 {x.body} 
            </li>
            )}
    </ul>
   </div>)

}
export default  ChoicesList;