import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Questions from "./components/questions.js";
import Answers from "./components/answers.js";


function App() {
  const [currentIndex, setIndex] = useState(0);
  const [data, setData] = useState();
  const [showScore, setShowScore] = useState(false);
  const [currentScore, setScore] = useState(0); 


  

  const incrementScore = (currentScore) => {
    setScore(currentScore +1)
    console.log(currentScore)
  }


  const incrementIndex = (currentIndex) => {

    if (currentIndex >= data.length-1){
      alert('you reached the end of the quiz');
      setShowScore(true)
    } else {
      setIndex(currentIndex + 1)
    } 

  }


  const getData = async () => {
    const response = await fetch('/game');
    const data = await response.json();
    setData(data);
    console.log('app', data);

  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <div>
      <Questions questions={data} index={currentIndex} />
      {/* no interaction with the user so it is best to put logic in the parent component*/}

      <Answers index={currentIndex} handleIndex={incrementIndex} score={currentScore} handleScore={incrementScore}/>
      <div className='app'>{showScore ? <div className='score-section'>You scored {currentScore} out of {data.length}</div> : <> </>}</div>
    </div>
  );
}

export default App;
