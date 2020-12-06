import React from 'react';
import Disqus from 'gatsby-plugin-disqus'

const PostTemplate = () => (
  <>
    <Disqus
      identifier={post.id}
      title={post.title}
      url={`${config.siteUrl}${location.pathname}`}
    />
  </>
)

export default PostTemplate
