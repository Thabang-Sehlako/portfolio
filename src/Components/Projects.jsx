import React from 'react';
import { Link } from 'react-router-dom';


const Projects = () => {
  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center bg-dark text-white " style={{height:'100vh'}}>
      <h1 className="display-4 text-center">My Projects</h1>
      <p className='text-center  mb-4 text-secondary'>click to get chek them out</p>
      <ol style={{ color: 'white', textAlign: 'left' }}>
        <li>
          <Link to="/weatherApp" className="text-decoration-none text-white"> 
            Weather App 
          </Link>
        </li>
        <li>
          <Link to="/dataTable" className="text-decoration-none text-white"> 
            Data Table 
          </Link>
        </li>
        <li>
          <Link to="/makeUp" className="text-decoration-none text-white"> 
            Portfolio Website(make up)
          </Link>
        </li>
      </ol>
    </div>
  );
};

export default Projects;