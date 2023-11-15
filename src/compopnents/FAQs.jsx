import React from 'react'
import Sectionhead from './Sectionhead'
import { faqs } from '../data'
import FAQ from './FAQ'
import { FaQuestion } from 'react-icons/fa'
const FAQs = () => {
  return (
    <section className='faqs'>
        <div className='container faqs_container'>
            <Sectionhead icon = {<FaQuestion />} title="FAQs"/>
            <div className="faqs_wrapper">
                {
                  faqs.map(({id,question,answer}) => {
                    return <FAQ key={id} question= {question} answer={answer}/>
                  })
                }
            </div>
        </div>
    </section>
  )
}

export default FAQs
