import { useRef, useState } from "react";
import ResultModal from "./ResultModel";

// let timer;

export default function TimerChallenger({title,targetTime}){

  const timer = useRef();
  const dialog = useRef();

  const[timerStarted,setTimerStared] = useState(false);
  const[timerExpired,setTimerExpired] = useState(false);
  
  function handleStart(){
    timer.current =  setTimeout(()=>{
      setTimerExpired(true);
      dialog.current.showModal();
    },target * 1000);

    setTimerStared(true);
  }

  function handleStop(){
      clearTimeout(timer.current);
  }

  return (
  <>
   <ResultModal ref={dialog} targetTime={targetTime} result="lost"/>
    <section className="challenge">
    <h2>{title}</h2>
    
    <p className="challenge-time">
      {targetTime} second{targetTime > 1 ? 's':''}
    </p>
    <p>
      <button onClick={timerStarted ? handleStop:handleStart}>
        {timerStarted ? 'Stop':'Start'} Challenge
      </button>
    </p>
    <p className={timerStarted ? 'active':undefined}>
      {timerStarted ? 'Time is running..' : 'Time inactive'}
    </p>
  </section>
  </>

  );
}