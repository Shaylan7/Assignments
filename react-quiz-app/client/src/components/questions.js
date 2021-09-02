import React from "react";
import "./questions.css";
import { Carousel } from 'antd';

function onChange(a, b, c) {
    console.log(a, b, c);
}

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

export default function Questions(props) {
    //user is not interacting with questions therefore logice can be in the parent component. 
    // we are passing all the data via props. We are not calling the API here. 

    let questions = props.questions
    // question is now the whole data array
    let currentIndex = props.index
    //currentIndex is receiving the index data from the parent component and assigning it to currentIndex
    let question = questions[currentIndex]
    // question is extracting a singular question from the array at a specific index 

    return (

        <div>

            {/* this is what the component needs for rendering  */}
            {/* if the data is not null print out the question title  */}
            <ul>
                {questions != null ? <div style={contentStyle} className='question-text'>{question.title}</div>
                    : null}
            </ul>

        </div>


    )


}
