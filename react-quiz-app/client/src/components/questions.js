import React from "react";
import "./questions.css";


const contentStyle = {
    height: '400px',
    color: '#fff',
    lineHeight: '400px',
    textAlign: 'center',
    background: '#E6E6FA',
    fontSize: '20px',
    width: "100%",
    overflowWrap: "break-word"
};

export default function Questions(props) {
    //user is not interacting with questions therefore logice can be in the parent component. 
    // we are passing all the data via props. We are not calling the API here. 

    
    // console.log('questions',props.questions)
    // let questions = props.questions
    // question is now the whole data array

    let currentIndex = props.index
    //currentIndex is receiving the index data from the parent component and assigning it to currentIndex

    // let question = questions[currentIndex]
    // console.log('question', question)
    

    // let question = questions[currentIndex]

    // question is extracting a singular question from the array at a specific index 

    return (

        <div>

            {/* this is what the component needs for rendering  */}
            {/* if the data is not null print out the question title  */}
            <ul>
                {props.questions != null ? <div style={contentStyle} className='question-text'>{props.questions[currentIndex].title}</div>
                    : null}
            </ul>

        </div>


    )


}
