import React from 'react';
import './Contact.css';

const Contact = () =>
  (
    <section className="Contact">
      <h2>Contact</h2>
      <div className="error"></div>
      <form noValidate className="Contact__form" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfcQFRte2znk6aiS-0l-MVmIefH-Lp39_j4VmhB2Mu7qs7Cdw/formResponse" target="_self" method="POST" id="mG61Hd">
        <input type="text" placeholder="name" name="entry.2005620554" required />
        <input type="email" placeholder="your@email.com" name="entry.1045781291" required />
        <textarea placeholder="message" name="entry.1065046570" required></textarea>
        <button className="Contact__submit-btn">Submit</button>
      </form>
    </section>
  )

export default Contact;