module.exports = {
  blogPostDir: "sample-posts", // The name of directory that contains your posts.
  siteTitle: "Qarmazi Labs", // Site title.
  siteTitleAlt: "Qarmazi Labs: GIS, Blockchain & Media.", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://www.qarmazilabs.com", // Domain of your website without pathPrefix.
  pathPrefix: "/gatsby-material-starter", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "A GatsbyJS stater with Material design in mind.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "", // FB Application ID for using app insights
  siteGATrackingID: "", // Tracking code ID for google analytics.
  disqusShortname: "", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  userName: "Q-Labs", // Username to display in the author segment.
  userTwitter: "qarmazilabs", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Tancanhuitz, San Luis Potosí", // User location to display in the author segment.
  userAvatar: "", // User avatar to display in the author segment.
  userDescription:"",
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/qarmazi-labs",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/qarmazilabs",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:info@qarmazilabs.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2018. Qarmazi Labs" // Copyright string for the footer of the website and RSS feed.
};
