import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'gatsby';
import '../../scss/home.scss';

const Info = () => (
  <section className="py-5">
    <div className="container">
      <div className="row">
        <div className="col-10 col-sm-8 mx-auto text-center">
          <p className="lead text-muted mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium animi at corporis est ex
            exercitationem iste iure minima necessitatibus odit, porro quam quibusdam quis recusandae repellendus sunt,
            velit. Fugit perspiciatis provident quod unde. Accusamus aliquam beatae commodi et facilis hic maiores nobis
            optio, pariatur perspiciatis porro quam sapiente temporibus tenetur velit voluptates voluptatum! Aliquam
            aliquid aut beatae commodi consectetur, culpa ducimus eaque error ex illum laudantium libero, magni maxime
            nobis possimus quod soluta. Blanditiis excepturi harum nesciunt nihil qui! Accusamus ad autem cupiditate
            doloribus dolorum enim et ex, fuga id impedit ipsa natus non perspiciatis placeat possimus sint voluptatum!
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

export default Info;
