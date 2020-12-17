import React from 'react';
import { Container, Card, Accordion, Button } from 'react-bootstrap';
import '../../scss/faq.scss';

const Index = () => (
  //   <div>
  //     <main className="faq">
  //       <div className="faq__holder">
  //         <h1 className="faq__heading">FAQ</h1>
  //         <details className="faq__detail">
  //           <summary className="faq__summary">
  //             <span className="faq__question">How do I get a touchless experience?</span>
  //           </summary>
  //           <p className="faq__text">
  //             We offer touchless payments via our online menu. You can leave instructions for
  //             contactless delivery if that�s what you prefer.
  //           </p>
  //         </details>
  //         <details className="faq__detail">
  //           <summary className="faq__summary">
  //             <span className="faq__question">Does Bolder's Pub offer To Go?</span>
  //           </summary>
  //           <p className="faq__text">
  //             Yes! Bolder's Pub offers pickup, curbside pickup, and delivery. To find out what options
  //             are available, please check our website.
  //           </p>
  //         </details>
  //         <details className="faq__detail">
  //           <summary className="faq__summary">
  //             <span className="faq__question">
  //               Does Bolder's Pub offer delivery through other third-party delivery partners?
  //             </span>
  //           </summary>
  //           <p className="faq__text">
  //             Yes. Bolder's Pub delivery is available through several other third-party delivery
  //             partners, but the Bolder's Pub website is the only place to order the entire menu for
  //             delivery.
  //           </p>
  //         </details>
  //
  //         <details className="faq__detail">
  //           <summary className="faq__summary">
  //             <span className="faq__question">
  //               Can I make changes to my delivery order once I've submitted my order?
  //             </span>
  //           </summary>
  //           <p className="faq__text">
  //             Since our first priority is getting your order prepared and delivered, we will not be
  //             able to make delivery order changes.
  //           </p>
  //         </details>
  //
  //         <details className="faq__detail">
  //           <summary className="faq__summary">
  //             <span className="faq__question">How long will it take to deliver my order?</span>
  //           </summary>
  //           <p className="faq__text">
  //             We will provide a reasonable ETA when you place your order. It will be up to third-party
  //             delivery services to sdliver in a timely manner.
  //           </p>
  //         </details>
  //
  //         <details className="faq__detail">
  //           <summary className="faq__summary">
  //             <span className="faq__question">How do I see your hours of operation?</span>
  //           </summary>
  //           <p className="faq__text">Our hours of operation can be viewed on the INFO tab.</p>
  //         </details>
  //       </div>
  //     </main>
  //   </div>
  // );

  <div className="faq__main-container">
    <h1>Faq</h1>
    <Container className="faq__container">
      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Click me!
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Click me!
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
              Click me!
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="3">
              Click me!
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="4">
              Click me!
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="4">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="5">
              Click me!
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="5">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="6">
              Click me!
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="6">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="7">
              Click me!
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="7">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Container>
  </div>
);
export default Index;
