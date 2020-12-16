import React from 'react';
import { HomeInfo }from './';
import { Carousel, Button } from 'react-bootstrap';
import { graphql } from 'gatsby';
import BackgroundImage from 'gatsby-image';

import HomeImg1 from '../../images/Food/burgerhome.jpg';
import HomeImg2 from '../../images/Food/wine2.jpg';
import HomeImg3 from '../../images/Food/open.jpg';
import './styles.scss';

const Home = props => (
  <React.Fragment>
    <Carousel className="carousel__item-container">
      <Carousel.Item>
        <BackgroundImage
          fluid={props.data.slide1.childImageSharp.fluid}
          alt="first restaurant image"
          className="carousel__image"
        />
        <Carousel.Caption className="carousel__caption">
          <h3>-Star Magazine</h3>
          <p>
            This restaurant is the best in North-West Colorado! Stop by if your in the boulder area
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <BackgroundImage
          fluid={props.data.slide2.childImageSharp.fluid}
          alt="second restaurant image"
          className="carousel__image"
        />
        <Carousel.Caption className="carousel__caption">
          <h3>-Rolling Stones</h3>
          <p>They got beer and lots of it!!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <BackgroundImage
          fluid={props.data.slide3.childImageSharp.fluid}
          alt="third restaurant image"
          className="carousel__image"
        />
        <Carousel.Caption className="carousel__caption">
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <BackgroundImage
          fluid={props.data.slide4.childImageSharp.fluid}
          alt="fourth restaurant image"
          className="carousel__image"
        />
        <Carousel.Caption className="carousel__caption">
          <h3>Fourth slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <HomeInfo />
    <div className="home-sliderz__container container-fluid">
      <div className="row justify-content-center">
        <div className="col-3 carousel__img-container">
          <img src={HomeImg3} alt="food" className="sliderz" />
          <Button className="carousel__img-btn" >
            Info
          </Button>
        </div>
        <div className="col-3 carousel__img-container">
          <img src={HomeImg1} alt="food" className="sliderz" />
          <Button className="carousel__img-btn">
            Menu
          </Button>
        </div>
        <div className="col-3 carousel__img-container">
          <img src={HomeImg2} alt="food" className="sliderz" />
          <Button className="carousel__img-btn">
            Drinks
          </Button>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default Home;

export const data = graphql`
	query {
		slide1: file(relativePath: { eq: "../../Restaurant/pubhub2.jpg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
		slide2: file(relativePath: { eq: "../../Restaurant/beer.jpg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
		slide3: file(relativePath: { eq: "../../Restaurant/rest.jpg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
		slide4: file(relativePath: { eq: "../../Restaurant/burger.jpg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
	}
`;
