import React from 'react';
import { IoPaperPlaneOutline } from 'react-icons/io5';

const Contact = () => {
  return (
    <article className="contact active" data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>
      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>
        <form action="https://formspree.io/f/xanbanvj" method="POST" className="form" data-form>
          <div className="input-wrapper">
            <input type="text" name="Name" className="form-input" placeholder="Full name" required />
            <input type="email" name="Email" className="form-input" placeholder="Email address" required />
          </div>
          <textarea name="Message" className="form-input" placeholder="Your Message" required></textarea>
          <button className="form-btn" type="submit">
            <IoPaperPlaneOutline />
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  );
};

export default Contact;