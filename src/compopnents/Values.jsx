import React from 'react'
import Image from '../assets/images/val3.png'
import Sectionhead from './Sectionhead'
import { GiCutDiamond } from 'react-icons/gi'
import { values } from '../data'
import Card from './Card'
const Values = () => {
  return (
    <div>
      <section className='values'>
        <div className='container values_container'>
          <div className="values_left">
          <div className="values_image">
            <img src = {Image} alt="valuimage"/>
            </div>
          </div>
          <div className="values_right">
           <Sectionhead icon={<GiCutDiamond/>} title="Our Favourites" />
           <p>
            Whether you dream of building apps, websites, or solving complex problems, your goals are within reach!
           </p>
           <div className='values_wrapper'>
            {
              values.map(({id,icon,title,desc}) => {
                return <Card  key={id} className="values_value">
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{desc}</small>

                </Card>
              })
            }
           </div>

            </div>
          </div>
        </section>
    </div>
  )
}

export default Values
