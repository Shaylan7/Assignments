import React, {useState} from "react";
import totalQuestions from "./data.js";
import "./questions.css"

export default function Questions(){
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const[color, setButtonColor] = useState('grey'); 
    const[count, setCount] = useState(0);
    const [data,setData]=React.useState();

   
  

    React.useEffect(() => {
        fetch('/game')
          .then((res) => res.json())
          .then((data) => {
              console.log(data)
          setData(data)});
    }, [])

    // let formattedData = JSON.stringify(data, null, 2)

    // {data.forEach((element, index) => {
    //     console.log(element.title); 
    //     console.log(index); 
    //     })}
  
   // why is this second parameter needed ^^^ 

    // const getData=()=>{
    //     fetch('/game')
    //       .then(function(response){
    //         console.log(response)
    //         return response.json();
    //       })
    //       .then(function(myJson) {
    //         console.log(myJson);
    //         setData(myJson)
    //       });
    //   }
      
      
    // useEffect(()=>{
    //     getData()
    //   },[])

//want// 
    // const handleAnswerButtonClick = (choice) => {
    //     
    //     if (nextQuestion < totalQuestions.length){
    //         setCurrentQuestion(nextQuestion)
    //     } else {
    //         alert('you reached the end of the quiz');
    // }
    // }

    
    // const colorArr = ['blue', 'pink', 'orange', 'brown', 'yellow', 'green']
    // const handleAnswerButtonClick = (choice) => {
    //     const nextQuestion = currentQuestion + 1;
    //     const nextCount = count +1; 
    //     var randomNum = Math.floor(Math.random()*6) 
    //      if (nextQuestion < totalQuestions.length) {
    //         setCurrentQuestion(nextQuestion);
    //         setButtonColor(colorArr[randomNum]); 
    //         console.log(color)
    //         setCount(nextCount)
    //     } else {
    //          alert('you reached the end of the quiz');
    //     }
    

    // }
   
    return (
        <div>
        <div className="content">
        <div className='question-text'>{totalQuestions[currentQuestion].title}</div>
        {console.log('random', data)}
        <div>
        <ul>
            {data.map((value, index) => {
            return <li key={index}>{value.title}</li>
            })}
        </ul>
        </div>
        <div className='answer-section'>
	    {/* {totalQuestions[currentQuestion].choices.map((choice, index) => (
		<button style={{background:color}} onClick={() =>  handleAnswerButtonClick()}>{choice}</button>
        ))} */}
       </div>
       </div>
        <div>
        
       {/* {data && data.length>0 && data.map((item)=><p>{item.title}</p>)} */}
        
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        </div>
        </div>
    )

      
    }
