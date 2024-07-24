import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="banner">
        <div className="title">
          <h1>Eventful Creations</h1>
          <p>Making Memories, One Event at a Time</p>
        </div>
        <div className="tag">
          <label>Stay Connected</label>
          <div>
            <input type="text" placeholder='Enter your email'/>
            <button>Subscribe</button>
          </div>
          <p>Join our mailing list for the latest event trends and updates!</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
