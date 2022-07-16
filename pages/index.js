import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Input from '../comps/Input'
import { useState, useEffect, useId } from "react";
import {nanoid} from "nanoid"
import Form from '../comps/Form'


export default function Home() {

   const [decisionInput,setDecisionInput] = useState([])
   
  
 function createDecision(){
    const newDecision = {
      id: nanoid(),
      body: newInput
    }
    setDecisionInput( oldDecision => [...oldDecision, newDecision.body]) 

  }  
  
  const [newInput,setNewInput] = useState("")
  console.log(newInput)

  const handleChange = event => {
  setNewInput(event.target.value)
 }
 
 

  return (
    <div className={styles.container}>
      <Head>
        <title>Anti-Decision</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Form 
        handleChange={handleChange}
        createDecision={createDecision}
        />
      <Input 
        choicesList = {decisionInput}/>
    </div>
  )
}
