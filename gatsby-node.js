var path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    const BlogPostTemplate = path.resolve("src/templates/BlogPost.js");
    resolve(
      graphql(`
        {
          allContentfulBlogs(limit: 150) {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors);
        }
        result.data.allContentfulBlogs.edges.forEach(edge => {
          createPage({
            path: edge.node.slug,
            component: BlogPostTemplate,
            context: {
              slug: edge.node.slug
            }
          });
        });
        return;
      })
    );
  });
};
