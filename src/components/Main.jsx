import React,{useRef} from 'react'
import {Link} from 'react-router-dom'
import './main.css'
const Main = () => {
  const inputRef = useRef(null)
  return (
    <div>
      <h1 className='title text-light'>Quiz Application</h1>

      <ol>
        <li>You will asked 10 questions one after mother.</li>
        <li>10 points is awarded for the correct answer. </li>
        <li>Each question has three options. you can choose only one options</li>
        <li>You can review and change answers before the quiz finish </li>
        <li>The result will be declared at the end of the quiz </li>
      </ol>

      <form id='form'>
        <input type='text' placeholder='Username' ref={inputRef} />
        </form>
        <div className='start'>
          <Link className='btn' to ={'quiz'}>Start Quiz</Link>
        </div>
    </div>
  )
}

export default Main