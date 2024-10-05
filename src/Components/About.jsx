import React from 'react';


const About = () => {
  return (
    <>
    
      <div className="container-fluid p-5 bg-dark text-light"  style={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h1 className="mb-4">About Myself</h1>
            <p className="lead">
              As a frontend developer, I specialize in crafting visually stunning and user-friendly web applications.
            </p>
            <p>
              Born and raised in Fouriesburg, Free State, I developed a strong foundation in problem-solving and analytical thinking during my studies in Electrical Engineering at the Central University of Technology.
            </p>
            <p>
              My journey into programming began during my time at university, where I discovered a passion for frontend development. With expertise in HTML, CSS, JavaScript, React JS and Bootstrap, I build dynamic and responsive web interfaces.
            </p>
            <p>
              Outside of coding, I'm an avid chess enthusiast and enjoy strategic thinking. I believe this hobby has improved my problem-solving skills and attention to detail.
            </p>
          </div>
        </div>
      </div>
 
    </>
  );
};

export default About;