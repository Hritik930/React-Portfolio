import React from 'react'
import './Experience.css'
import experience from './data/experience.json'

const Experience = () => {
  return (
    <>
      <div className="container ex" id='experience'>
        <h1><span>E</span>XPERIENCE</h1>
        {
          experience.map((data) => {
           return ( 
            <>
            <div key={data.id} className='ex-items my-5 text-center' data-aos="zoom-in" data-aos-duration="1000">
              <div className="left">
                <img src={`/src//assets/${data.imageSrc}`} alt="" />
              </div>
              <div className="right">
                <h2 style={{color:"crimson"}}>{data.role}</h2>
                <h4>
                <span style={{color:"orange"}}>{data.startDate}</span>
                {" "}
                <span style={{color:"royalblue"}}>{data.endDate}</span>
                {" "}
                <span>{data.location}</span>
                </h4>
                <h5 style={{color:"darkgray"}}>{data.experiences[0]}</h5>
                <h5 style={{color:"darkgray"}}>{data.experiences[1]}</h5>
              </div>
            </div>
           </>
           )
          })
        }
      </div>
    </>
  )
}

export default Experience
