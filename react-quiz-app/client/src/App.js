import React, {useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Questions from "./components/questions.js";
import Answers from "./components/answers.js";


function App() {
  const [currentIndex, setIndex] = useState(0);
  const [data, setData] = useState();


  const incrementIndex = (currentIndex) => {
    setIndex(currentIndex + 1)
  }



  const getData = async () => {
    const response = await fetch('/game');
    const data = await response.json();
    setData(data);

  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <div>
      <Questions questions={data} index={currentIndex} />
      {/* no interaction with the user so it is best to put logic in the parent component*/}

      <Answers index={currentIndex} handleIndex={incrementIndex} />
    </div>
  );
}

export default App;
