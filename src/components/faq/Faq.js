import React from "react";
import { Title } from "../";
import { FaqAccordion } from "./";
import { Jumbotron, Container } from "react-bootstrap";
import "./styles.scss";

const Faq = () => (
  <section className="section pb-5">
    <Jumbotron className="info__jumbo" fluid>
      <Container className="info__container">
        <Title title="FAQ's" />
        <figure className="figure text-start ml-5 mt-2">
          <p className="info__subtitle lead">
            Here some questions some people like to know about us!
          </p>
        </figure>
      </Container>
    </Jumbotron>
    <p className="section-description pb-4 text-center">
      We want every guest at Bolder's Pub to feel welcome. While we are known for our masterful preparation<br /> in service, please feel free to give us a call if there is a matter you are uncertain of. We strive to give all our<br /> guests an exceptional experience.
    </p>
    <div className="nothing">
      <FaqAccordion />
    </div>
  </section>
);

export default Faq;
