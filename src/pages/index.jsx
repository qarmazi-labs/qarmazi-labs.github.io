import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";

class Index extends React.Component {
  render() {
    return (
      <div className="index-container">
        <Helmet>
          <title>{config.siteTitle}</title>
          <link rel="canonical" href={`${config.siteUrl}`} />
        </Helmet>
      </div>
    );
  }
}

export default Index;
