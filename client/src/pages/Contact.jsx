import React, { useState } from 'react'
import '../css/contact.css'
export default function Contact() {
    let[input,setinput]=useState({})
    const handleInput=(e)=>{
        let{name,value}=e.target;
        setinput(values=>({...values,[name]:value}))
    }
    const submit=(e)=>{
        e.preventDefault();
        console.log(input)
    }
    return(
    <section className="main">
    <div className="information">
      <div>
        <p>
          <span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016
        </p>
      </div>
      <div>
        <p>
          <span>Phone:</span> +91-8052056711
        </p>
      </div>
      <div>
        <p>
          <span>Email:</span> bipinsingh8052
        </p>
      </div>
      <div>
        <p>
          <span>Website:</span> yoursite.com
        </p>
      </div>
    </div>

    <div className="information_second">
    
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230660.45187482997!2d81.63676744781661!3d25.402482061979363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398534c9b20bd49f%3A0xa2237856ad4041a!2sPrayagraj%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1725173837552!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>

    
      <div className="form" onSubmit={submit}>
        <form>
          <input type="text" id="name" placeholder="Your Name" name='name' onChange={handleInput} required />
          <input type="email" id="email" placeholder="Your Email" name='email' onChange={handleInput}  required />
          <input type="text" id="subject" placeholder="Subject" name='subject' onChange={handleInput}  required />
          <textarea id="message" rows="5" placeholder="Message" name='message' onChange={handleInput}  required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>

  
    
  </section>
)
}