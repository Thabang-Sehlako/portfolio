import React, { useState, useEffect } from 'react';
import { AiOutlineHome, AiOutlineUser, AiOutlineFile } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import profile from '../src/assets/stan.jpeg';

const App = () => {
  const [name, setName] = useState('');
  const fullName = 'Thabang Sehlako';

 /* const handleCVAlert = ()=> {
    alert("I havent upload my CV yet")
  }*/

  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      if (i < fullName.length) {
        setName(fullName.slice(0, i + 1));
        i++;
      } else {
        clearInterval(intervalId);
      }
    }, 100); // adjust speed here
    return () => clearInterval(intervalId);
  }, [fullName]);

  return (
    <div
      className="text-center bg-dark text-white"
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <p>Hello, I am</p>
      <h1 className="display-4">{name}</h1>
      <p>A web designer (frontend)</p>
      <div className="py-3 container d-flex justify-content-center gap-3">
        <button className="btn btn-primary" onClick={()=>alert('I havent upload my CV yet')}>Download CV</button>
        <Link to="/contact">
          <button className="btn btn-secondary">Let's talk</button>
        </Link>
      </div>
      <img
        src={profile}
        alt="Profile Picture"
        className="img-fluid"
        style={{
          width: '300px',
          height: '320px',
          marginBottom: '50px',
          borderRadius: '40% 40% 0 0',
        }}
      />
      <div className="social-icons">
        <a href="#" className="me-4 text-decoration-none">
          <AiOutlineHome size={32} />
        </a>
        <Link to="/about" className="me-4 text-decoration-none">
          <AiOutlineUser size={32} />
        </Link>
        <Link to = '/projects' className="me-4 text-decoration-none">
          <AiOutlineFile size={32} />
        </Link>
      </div>
    </div>
  );
};

export default App;