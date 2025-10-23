import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Layout from '@theme/Layout';
import styles from './contact.module.scss'
import {Container, Form, Button, Alert} from 'react-bootstrap';

export default function Contact () {
  // for success bubble
  const [sent, setSent] = useState(false);

  // https://www.emailjs.com/docs/examples/reactjs/
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ymr4mse', 'template_wv03f9o', e.target, 'user_5ckamWVH4TSVJJnehWuF3')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      ;
    toggle();
  }

  const toggle = () => {
    setSent(!sent);
  }

  const sentAlert = <Alert variant='success'>Email sent successfully </Alert>

  return (
    <Layout>
      <div className={styles.contactpage}>
      <Container fluid className="p-5 mb-4 bg-light rounded-3">
        <h1>Let's be in touch!</h1>
      </Container>
      {sent ? sentAlert : 
        <Form onSubmit={sendEmail} className="col-8 mx-auto">
          <Form.Group controlId="emailForm.name">
            <Form.Control type="text" placeholder="name" name="name" />
          </Form.Group>
          <Form.Group controlId="emailForm.email">
            <Form.Control type="email" placeholder="email" name="email" />
          </Form.Group>
          <Form.Group controlId="emailForm.subject">
            <Form.Control type="text" placeholder="subject" name="subject" />
          </Form.Group>
          <Form.Group controlId="emailForm.message">
            <Form.Control as="textarea" rows={5} placeholder="message" name="message" />
          </Form.Group>
          <Button as="input" type="submit" value="Send" variant="secondary" className="w-100" />
        </Form>
      }
      </div>
    </Layout>
  )
}
