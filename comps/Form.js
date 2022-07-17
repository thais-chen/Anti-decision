import {useState} from "react"

function CreateInputField(props){

    return (
        <div>
          <form>
          <h1>Add a choice </h1>
          <input
                value={props.newInput}
                type="text"
                placeholder="Top text"
                onInput={props.handleChange}
            />
            <button
                  type="button" onClick={props.createDecision}
                  />
          </form>
    </div>
     )

  }

  export default CreateInputField;