import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='questions'>
            <div className='question1'>
                <h4>Ques: How react works?</h4>
                <p>Ans: React is not a framework. Ract is a library. React create a virtual DOM, which is a DOM tree representation in JavaScrip. When we read or write to the DOM, React use the virtual representation. Then the virtual DOM try to find the most efficient way to update the browsers DOM.</p>
            </div>
            <div>
                <h4>Ques: How useEffect works?</h4>
                <p>Ans: useEffect is a react hook. It works on function component. When we use useEffect, We tell React that our component needs to do something after render by passing a function. React remember the function we passed in useEffect and call the function later after performing the DOM updates.</p>
            </div>
        </div>
    );
};

export default Question;