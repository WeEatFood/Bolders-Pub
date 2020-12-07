import React from 'react';
import { graphql } from 'gatsby';
import { Carousel, Col, Container, Image } from 'react-bootstrap';
import BackgroundImage from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Info from '../components/home/info';
import HomeImg1 from '../images/Food/burgerhome.jpg';
import HomeImg2 from '../images/Food/wine2.jpg';
import HomeImg3 from '../images/Food/open.jpg';
import '.././scss/home.scss';

const IndexPage = props => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `restaurant`, `react`, `group projects`]} />
    <div>
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
              This restaurant is the best in North-West Colorado! Stop by if your in the boulder
              area
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
      <Info />
      <div className="home-sliderz__container">
        <img src={HomeImg3} alt="food" className="sliderz" />
        <img src={HomeImg1} alt="food" className="sliderz" />
        <img src={HomeImg2} alt="food" className="sliderz" />
      </div>
    </div>
  </Layout>
);

export default IndexPage;

export const data = graphql`
  query {
    slide1: file(relativePath: { eq: "Restaurant/pubhub2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    slide2: file(relativePath: { eq: "Restaurant/beer.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    slide3: file(relativePath: { eq: "Restaurant/rest.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    slide4: file(relativePath: { eq: "Restaurant/burger.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;
