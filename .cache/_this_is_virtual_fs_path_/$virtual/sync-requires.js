
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/haalahibrahim/Desktop/Example-Gatsby-Site/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/haalahibrahim/Desktop/Example-Gatsby-Site/src/pages/index.js")),
  "component---src-pages-using-typescript-tsx": preferDefault(require("/Users/haalahibrahim/Desktop/Example-Gatsby-Site/src/pages/using-typescript.tsx")),
  "component---src-templates-blog-post-js": preferDefault(require("/Users/haalahibrahim/Desktop/Example-Gatsby-Site/src/templates/blog-post.js"))
}

