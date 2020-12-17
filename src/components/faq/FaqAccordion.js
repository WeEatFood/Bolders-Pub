import React from "react";
import { Container, Card, Accordion, Button } from "react-bootstrap";
import "./styles.scss";

const FaqAccordion = () => (
  <div className="faq__main-container">
    <Container className="faq__container">
      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              How do I get a touchless experience?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body> We offer touchless payments via our online menu. You can leave instructions for contactless delivery if that’s what you prefer.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Does Bolder's Pub offer To Go?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Yes! Bolder's Pub offers pickup, curbside pickup, and delivery. To find out what options are available, please check our website.
          </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
              Does Bolder's Pub offer delivery through other third-party delivery partners?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>Yes. Bolder's Pub delivery is available through several other third-party delivery
             partners, but the Bolder's Pub website is the only place to order the entire menu for
             delivery.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="3">
            Can I make changes to my delivery order once I've submitted my order?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body> Since our first priority is getting your order prepared and delivered, we will not be
             able to make delivery order changes.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="4">
            How long will it take to deliver my order?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="4">
            <Card.Body>We will provide a reasonable ETA when you place your order. It will be up to third-party
             delivery services to sdliver in a timely manner.</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="5">
            How do I see your hours of operation?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="5">
            <Card.Body>Our hours of operation can be viewed on the INFO tab</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="6">
              Do you take reservations?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="6">
            <Card.Body>If you would like to reserve a table for you and your guests, please call prior to your arrival at xxx-xxx-xxxx</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="7">
              Is there parking nearby?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="7">
            <Card.Body>Patrons of Border's Pub may parking on the East side of the building.</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Container>
  </div>
);

export default FaqAccordion;
