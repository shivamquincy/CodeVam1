import React from 'react'
import "../plans/plan.css"
import Header from '../../compopnents/Header'
import  Card from "../../compopnents/Card"
import { plans } from '../../data'

const Plans = () => {
  return (
    <section className='plans'>
      <div className="container plans_container">
        {
          plans.map(({id, name1,desc, price,features}) => {
            return <Card key={id} className="plan" >
              <h3>{name1}</h3>
              <small>{desc}</small>
              <h1>{`$${price}`}</h1><h2>/mo</h2>
              <h4>Features</h4>
              {
                features.map(({feature, available}, index) => {
                  return <p key={index} className={!available ? 'disabled' : ''}>
                    {feature}
                  </p>
                })
              }
              <button className='btn lg'>Choose Plan</button>
            </Card>

          })
        }
      </div>
    </section>
  )
}

export default Plans
