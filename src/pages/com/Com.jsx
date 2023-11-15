import React from 'react'
import I1 from "../../assets/images/vam.jpg"
import "../com/coma.css"
import Card from '../../compopnents/Card'
import {AiFillCaretRight} from "react-icons/ai"
import { Link } from 'react-router-dom'
import {FaCrown} from "react-icons/fa"
import Sectionhead from '../../compopnents/Sectionhead'
import Header from '../../compopnents/Header'
import { programs1 } from '../../data'

const Com = () => {
  return (
    <div>
     <Header title="All Sources Vam." image={I1}>
      The VAM community believes that we grow together by uplifting each other and through Collaboration.
      </Header>
      <section className="programs">
    <div className="container programs_container">
       <Sectionhead icon={<FaCrown />} title = "Communities! Pick one Build." />
    
    <div className='program_wrapper'>
        {
            programs1.map(({id,icon,title,path}) => {
                return (
          <Card className="programs_program" key={id}>
             <span>{icon}</span>
            <h4>{title}</h4>
          <Link to={path} className='btn sm'>Learn More <AiFillCaretRight/></Link>

        </Card>
                )  
            })
        }
        </div>
        </div>
   </section>
      
      
  
    </div>
  )
}

export default Com
