import React from 'react';
import ProjectBox from './ProjectBox';
import R from '../images/R.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={R} projectName="Project1" />
        <ProjectBox projectPhoto={R} projectName="Project2" />
        <ProjectBox projectPhoto={R} projectName="Project3" />
        <ProjectBox projectPhoto={R} projectName="Project4" />
      </div>

    </div>
  )
}

export default Projects