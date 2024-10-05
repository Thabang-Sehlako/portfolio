import React from 'react';


function Contact() {
  return (
    <>
 
      <div  id='contact' className="container-fluid bg-white p-5">
        <h1 className="text-center fw-bold mb-5 fs-1">Contact</h1>
        <p className="text-center mb-5 fs-5">Get in touch: For bookings and queiries</p>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form className="p-4" style={{ width: '100%' }}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label ">Name</label>
                <input type="email" name="name" className="form-control" autoComplete="off" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label ">Email</label>
                <input type="email" name="Email" className="form-control" autoComplete="off" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label ">Message</label>
                <textarea className="form-control" name="Message" rows={3} autoComplete="off" />
              </div>
              <button type="submit" className="btn" style={{background:'wheat'}}>Send</button>
            </form>
          </div>
        </div>
      </div>
   
    </>
  );
}

export default Contact;
