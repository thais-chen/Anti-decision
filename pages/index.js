import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect, useId } from "react";
import Form from '../comps/Form'
import ChoicesList from '../comps/ChoicesList ';
import Answer from '../comps/Answer';
import AutoFixHighTwoToneIcon from '@mui/icons-material/AutoFixHighTwoTone';
import { nanoid } from 'nanoid';
import Navbar  from '../comps/Navbar';

export default function Home() {
//adds choice to the list of decisions and is array of decisions
const [decisionInput,setDecisionInput] = useState([])
//string of input
const [newInput,setNewInput] = useState("")


function createDecision(){
  if (newInput.length > 0){
    const newDecision = {
      body:newInput,
      id: nanoid()
    }
    //adds input to choice list
    setDecisionInput( oldDecision => [...oldDecision, newDecision])
    //clears input field
     setNewInput("")
     setResetList(false)
  }
  }
  //resets app
  const [restartDecision, setRestartDecision] = useState(false)
  const [showChoice, setShowChoice] = useState(false)
  const [resetList, setResetList] = useState(true)
  const [showAnswerDiv, setShowAnswerDiv] = useState("hide")


  const resetApp = () => {
    setShowChoice(false)
    setRestartDecision(false)
    setResetList(true)
    setDecisionInput([])
    setShowAnswerDiv("hide")

 }
  //updates current string input value
  const handleChange = event => {
  setNewInput(event.target.value)
  }

  return (
    <div className={`${styles.svgBackground} ${styles.container}`}>
      <Head>
        <title>Anti-Decision</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar
        resetApp = {resetApp}/>
      <div className={styles.mainContent}>
      <Form
        handleChange={handleChange}
        createDecision={createDecision}
        newInput={newInput}
        resetApp={resetApp}
        />
       <ChoicesList
        decisionInput = {decisionInput}
        resetApp = {resetApp}
        resetList = {resetList}
        />
      <Answer
        chosenOne = {decisionInput}
        showChoice = {showChoice}
        setShowChoice = {setShowChoice}
        restartDecision = {restartDecision}
        setRestartDecision = {setRestartDecision}
        showAnswerDiv = {setShowAnswerDiv}
        resetApp = {resetApp}
              />
        </div>
    </div>
  )
}
