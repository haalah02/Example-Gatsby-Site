/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
exports.onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `en` });
  
  setHeadComponents([
    <script
      key="cookieyes-script"
      type="text/javascript"
      src="https://cdn-cookieyes.com/client_data/your-unique-id.js"
    />,
  ]);
}
