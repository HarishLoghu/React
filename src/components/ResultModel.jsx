import { forwardRef } from "react";

const ResultModal =  forwardRef(function ResultModal({ref,result,targetTime}){
  return(
  <dialog ref={ref} className="result-modal" open>
    <h2>You {result}</h2>
    <p>
      The target time was
       <strong>{targetTime} second.</strong>
      </p>
    <p>
      You stopped the timer with 
      <strong>X seconds left</strong>
      </p>
    <form method="dialog">
      <button>Close</button>
    </form>
  </dialog>
  );
});

export default ResultModal;