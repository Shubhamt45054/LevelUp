import React from 'react'
import './Jobs.scss'

const Inter = () => {
  return (
    <div>
    <div className="container" id="marginbetweennavigationbarandjumbotron">
      <div className="row">
        <div className="col-xs-12">
          <h2 className="text-center
          text-primary" style={{ margin: '0px', padding: '0px', fontFamily: 'Droid Sans, sans-serif' }}>Search Internship, Across all India.</h2>
          <hr />

          <form className="form-group form-inline text-center">

            <input type="text" className="form-control" placeholder="Enter Intern Title,Desigination,Keywords" style={{ width: '300px', margin: '10px' }} />

            <select className="form-control" style={{ width: '300px', margin: '10px' }}>
              <option>Select Experience</option>
              <option>0 Year | Fresher</option>
              <option>1 Year</option>
              <option>2 Years</option>
              <option>3 Years</option>
              <option>4 Years</option>
              <option>5 Year</option>
              <option>6 Years</option>
              <option>7 Years</option>
              <option>8 Years</option>
              <option>9 Years</option>
              <option>10 Years</option>
              <option>More than 10 Years</option>
            </select>
            <p className="text-center">
              <button type="submit" className="btn-primary text-center form-control" style={{ width: '300px' }}>Search</button>
            </p>
          </form>
          <h3 className="text-center text-primary m-5">OR</h3>

          <div style={{ height: '0px', overflow: 'hidden' }}>
            <input type="file" id="fileInput" name="fileInput" />
          </div>
          <p className="text-center clear-float">
            <a href="#" className="btn btn-primary btn-lg m-5">Upload Your CV | Resume</a>
          </p>
          <p className="text-center text-primary m-5">We Will Search Best Matching Jobs for You.</p>

        </div>
      </div>
    </div>     
    
  </div>
  )
}

export default Inter
