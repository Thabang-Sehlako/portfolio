import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';

function Contact() {
 
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "7f7be015-dc4f-4137-9dd9-1401a30e8698");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert(res.message)
    }
  };
  return (
    <>
      <div className="container-fluid bg-dark text-light p-5" style={{ height: '100vh' }}>
        <h1 className="text-center display-4 mb-4">Get in touch for any queries</h1>
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <form onSubmit={onSubmit} className="p-4" style={{ width: '100%' }}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label ">Name</label>
                <input type="text" name="Name" className="form-control" autoComplete="off" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label ">Email</label>
                <input type="email" name="Email" className="form-control" autoComplete="off" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label ">Message</label>
                <textarea className="form-control" name="Message" rows={3} autoComplete="off" />
              </div>
              <button type="submit" className="btn btn-primary">Send</button>
            </form>
          </div>
        </div>
        <div className="social-media-icons mt-4 mb-6 d-flex justify-content-center">
          <Link to='https://wa.link/4uzzxf' className="me-4 text-decoration-none text-light">
            <FaWhatsapp size={32} />
          </Link>
          <Link to='https://web.facebook.com/thabang.raymond.737/' className="me-4 text-decoration-none text-light">
            <FaFacebook size={32} />
          </Link>
          <Link  to = 'https://www.instagram.com/thabang.raymond.737/' className="me-4 text-decoration-none text-light">
            <FaInstagram size={32} />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Contact;
