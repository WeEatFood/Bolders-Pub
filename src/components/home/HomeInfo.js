import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "gatsby";
import "./styles.scss";

const HomeInfo = () => (
  <section className="py-5">
    <div className="container text-center">
      <div className="row text-center">
        <div className="col-10 col-sm-8 mx-auto text-center">
          <p className="lead text-muted mb-5">
            From our rustic decor to the delicious food, Border's Pub has remained a favorite trdition in Boulder for over 40 years. Our intimate and relaxed dining, top notch service and live music make for a memorable food experience with every visit. Come see what we are all about.
          </p>
          <Link to="#">
            <Button className="home-info__btn" variant="">
              about us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default HomeInfo;
