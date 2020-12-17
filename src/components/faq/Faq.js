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
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure
      provident voluptate esse quasi, <br />
      veritatis totam voluptas nostrum quisquam eum porro a pariatur accusamus veniam.
      <br />
    </p>
    <div className="">
      <FaqAccordion />
    </div>
  </section>
);

export default Faq;
