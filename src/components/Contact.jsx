import React, { useState } from 'react';
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/message/send",
        {
          name,
          email,
          subject,
          message
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" }
        }
      );
      toast.success(res.data.message);
      setName("");
      setEmail("");
      setMessage("");
      setSubject("");
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred while sending the message.");
      }
    }
  }

  return (
    <>
      <div className="contact container">
        <div className="banner">
          <div className="item">
            <h4>Address</h4>
            <p>Any where,Any City,4521</p>
          </div>
          <div className="item">
            <h4>Call Us</h4>
            <p>Call us: +91-8777377281</p>
          </div>
          <div className="item">
            <h4>Mail Us</h4>
            <p>ipsi@gmail.com</p>
          </div>
        </div>
        <div className="banner">
          <div className="item">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d517.582209525898!2d88.39624261107932!3d22.5259367310365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02776b9d544a59%3A0x655bfe938c4dffdf!2sDisha%20Enterprise!5e0!3m2!1sen!2sin!4v1721528083555!5m2!1sen!2sin"
              style={{ border: 0, width: "100%", height: "450px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="item">
            <form onSubmit={handleSendMessage}>
              <h2>CONTACT</h2>
              <div>
                <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <input type="text" placeholder='Subject' value={subject} onChange={(e) => setSubject(e.target.value)} />
              <textarea rows={10} placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)} />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;
