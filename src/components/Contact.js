import React from 'react';
import './ContactStyle.css';

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <p>If you have any questions or would like to get in touch, please fill out the form below or contact me through the details provided.</p>

      <div className="contact-details">
        <h2>Contact Information</h2>
        <ul>
          <li>Email: <a href="mailto:sharmavanshika807@gmail.com">sharmavanshika807@gmail.com</a></li>
          <li>Phone: +91 9540580221</li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/vanshika-sharma-b27a282b7/" target="_blank" rel="noopener noreferrer">linkedin.com/in/vanshika-sharma-b27a282b7/</a></li>
          <li>GitHub: <a href="https://github.com/Vanshika-Sharmaa" target="_blank" rel="noopener noreferrer">https://github.com/Vanshika-Sharmaa</a></li>
        </ul>
      </div>

      <div className="contact-form">
        <h2>Send a Message</h2>
        <form action="https://formspree.io/f/xgveyqgy" method="POST">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
