import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Input from '../comps/Input'
import { useState, useEffect } from "react";
import {nanoid} from "nanoid"


export default function Home() {

  const [decisionInput,setDecisionInput] = useState([])
    
   function createDecision(){
    const newDecision = {
      id: nanoid(),
      body: "etc"
    }
    setDecisionInput( oldDecision => [newDecision.body, ...oldDecision])
    console.log(decisionInput)
    return decisionInput
    

  } 
  return (
    <div className={styles.container}>
      <Head>
        <title>Anti-Decision</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <button onClick={createDecision}> </button>
      </div>
      <Input 
        decision = {decisionInput} />
    </div>
  )
}
