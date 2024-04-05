import React from 'react'
import './Project.css'
import project from './data/projects.json'

const Project = () => {
  return (
    <>
      <div className="container projects my-3" id='projects'>
        <h1><span>P</span>ROJECTS</h1>
        <div className="row d-flex justify-content-center align-items-center">
{project.map((data) => (
  <>
    <div key={data.id} className='my-3 mx-1 col-sm-6 col-md-4 col-lg-3 '>
    <div className="card text-light" style={{width: "18rem", border:"2px solid orange", borderRadius:"10px", background: "#131313", boxShadow: "5px 5px 20px 8px rgb(165, 42, 42,0.2)"}} data-aos="flip-right" data-aos-duration="1000">
    <div className="img d-flex justify-content-center align-items-center mt-3 p-3">
  <img src={data.imageSrc} className="card-img-top" style={{width:"250px", height:"200px", border:"1px solid orange", borderRadius:"10px", boxShadow: "5px 5px 20px 8px rgb(165, 42, 42,0.2)"}} alt="..." />
    </div>
  <div className="card-body text-center">
    <h5 className="card-title">{data.title}</h5>
    <p className="card-text">{data.description}</p>
    <a href={data.demo} className="btn1">Demo</a>
    <a href={data.source} className="btn2">Code</a>
  </div>
</div>
    </div>
  </>
))}
        </div>
      </div>
    </>
  )
}

export default Project
