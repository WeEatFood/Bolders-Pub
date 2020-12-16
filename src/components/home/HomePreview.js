// import React from 'react';
// ;import { Col, Container, Row } from 'react-bootstrap'
// import { graphql, useStaticQuery } from 'gatsby';
// import Img from 'gatsby-image';
// import '../../scss/home.scss';
//
// const MenuPreview = () => {
//   const data = useStaticQuery(graphql`
// 		query Images {
// 			homeImg1: file(relativePath: { eq: "Food/burgerhome.jpg" }) {
// 				childImageSharp {
// 					fluid {
// 						...GatsbyImageSharpFluid_tracedSVG
// 					}
// 				}
// 			}
// 			homeImg2: file(relativePath: { eq: "Food/wine2.jpg" }) {
// 				childImageSharp {
// 					fluid {
// 						...GatsbyImageSharpFluid_tracedSVG
// 					}
// 				}
// 			}
// 			homeImg3: file(relativePath: { eq: "Food/open.jpg" }) {
// 				childImageSharp {
// 					fluid {
// 						...GatsbyImageSharpFluid_tracedSVG
// 					}
// 				}
// 			}
// 		}
//   `);
//
//   return (
//     <Container>
//       <Row>
//         <Col xs={ 6 } md={ 4 }>
//           <Img src={ data.homeImg1.childImageSharp.fluid } alt="food"/>
//         </Col>
//         <Col xs={ 6 } md={ 4 }>
//           <Img src={ data.homeImg2.childImageSharp.fluid } alt="food"/>
//         </Col>
//         <Col xs={ 6 } md={ 4 }>
//           <Img src={ data.homeImg3.childImageSharp.fluid } alt="food"/>
//         </Col>
//       </Row>
//     </Container>
//   );
// };
//
// export default MenuPreview;
