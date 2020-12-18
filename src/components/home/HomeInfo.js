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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium animi at
            corporis est ex exercitationem iste iure minima necessitatibus odit, porro quam
            quibusdam quis recusandae repellendus sunt, velit. Fugit perspiciatis provident quod
            unde. Accusamus aliquam beatae commodi et facilis hic maiores nobis optio, pariatur
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
