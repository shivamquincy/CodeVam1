import React from 'react'
import { useState } from 'react'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
const FAQ = ({question,answer}) => {
  const [isAnswerShowing, setIsAnswersShowing] = useState(false);
  return (
   <article className='faq'>
     <div><h4>{question}</h4>
     <button className="faq_icon" onClick={() => setIsAnswersShowing(prev => !prev)}> {
        isAnswerShowing ?   <AiOutlineMinus />:  <AiOutlinePlus />
     }
     
     </button>
     </div>
     <div className='faqa'>
     {isAnswerShowing &&  <p>{answer}</p> }
     </div>
    </article>
  )
}

export default FAQ
