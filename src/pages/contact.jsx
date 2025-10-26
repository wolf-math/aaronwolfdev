import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Layout from '@theme/Layout';
import styles from './contact.module.scss';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_ymr4mse', 'template_wv03f9o', e.target, 'user_5ckamWVH4TSVJJnehWuF3')
      .then(() => setSent(true))
      .catch((err) => console.error(err));
  };

  return (
    <Layout title="Contact" description="Contact Aaron Wolf">
      <div className={styles.contactpage}>
        <h1>Let&apos;s be in touch!</h1>
        {sent ? (
          <div className={styles.success}>Thanks! Your message has been sent.</div>
        ) : (
          <form onSubmit={sendEmail} className={styles.form}>
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="text" name="subject" placeholder="Subject" />
            <textarea name="message" placeholder="Message" rows="5" required />
            <button type="submit">Send Message</button>
          </form>
        )}
      </div>
    </Layout>
  );
}
