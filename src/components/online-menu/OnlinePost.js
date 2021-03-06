// import React from 'react';
// import Helmet from 'react-helmet';
// import { Link, graphql } from 'gatsby';
// import get from 'lodash/get';
//
// import { DiscussionEmbed } from 'disqus-react';
//
// class PostTemplate extends React.Component {
//   render() {
//     const post = this.props.data.markdownRemark;
//     const siteTitle = get(this.props, 'data.site.siteMetadata.title');
//     const { previous, next } = this.props.pathContext;
//
//     let siteMeta = get(this.props, 'data.site.siteMetadata');
//
//     let disqusProps = {
//       shortname: siteMeta.disqus.shortName,
//       config: {
//         identifier: post.id, // identify of the post
//         title: post.frontmatter.title, // title of the post
//       },
//     };
//
//     return (
//       <div>
//         <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
//         <h1>{post.frontmatter.title}</h1>
//         <p>{post.frontmatter.date}</p>
//         <div dangerouslySetInnerHTML={{ __html: post.html }} />
//         <hr />
//         <ul
//           style={{
//             display: 'flex',
//             flexWrap: 'wrap',
//             justifyContent: 'space-between',
//             listStyle: 'none',
//             padding: 0,
//           }}
//         >
//           <li>
//             {previous && (
//               <Link to={previous.fields.slug} rel="prev">
//                 ? {previous.frontmatter.title}
//               </Link>
//             )}
//           </li>
//           <li>
//             {next && (
//               <Link to={next.fields.slug} rel="next">
//                 {next.frontmatter.title} ?
//               </Link>
//             )}
//           </li>
//         </ul>
//         <DiscussionEmbed {...disqusProps} />
//       </div>
//     );
//   }
// }
//
// export default PostTemplate;
//
// export const pageQuery = graphql`
//   query BlogPostBySlug($slug: String!) {
//     site {
//       siteMetadata {
//         title
//         author
//         disqus {
//           shortName
//         }
//       }
//     }
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       id
//       html
//       frontmatter {
//         title
//         date(formatString: "MMMM DD, YYYY")
//       }
//     }
//   }
// `;
