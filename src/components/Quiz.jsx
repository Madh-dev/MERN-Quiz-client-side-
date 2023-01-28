import React from 'react'
import Questions from './Questions'

const Quiz = () => {
   const onNext = ()=>{
   }
   const onPrev = ()=>{
  }
  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Application</h1>

        {/* display questions */}
        <Questions />
        <div className='grid'>
          <buton className='btn prev' onClick={onPrev}>Prev</buton>
          <button className='btn next' onClick={onNext}>Next</button>
        </div>
    </div>
  )
}

export default Quiz