import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <div className="contact-container">
        <div className="contact-text">
          <h2>Want to work with me?</h2>
          <p>Contact me here</p>
        </div>

        <div className="contact-icons">
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              id="profile-link"
              href="https://github.com/eden-jermendi"
            >
              Github
            </a>
          </div>
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:ejermendi@gmail.com?subject=Let%27s%20work%20together%21"
            >
              Email me
            </a>
          </div>
          <div><a href="tel:+642102291894">Call me</a></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
