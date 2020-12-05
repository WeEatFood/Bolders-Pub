import React from 'react';
import { Container } from 'react-bootstrap';
import { useStaticQuery, graphql } from 'gatsby';
import '../../scss/home.scss'

const MenuPreview = () => {
  return (
    <Container>

    </Container>
  );
};

export const data = useStaticQuery(graphql`
	query {
		homeImg1: file(relativePath: { eq: "Food/burgerhome.jpg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
		homeImg2: file(relativePath: { eq: "Food/wine2.jpg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
		homeImg3: file(relativePath: { eq: "Food/open.jpg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
	}
`);

export default MenuPreview;
