import React from "react";
import FontIcon from "react-md/lib/FontIcons";
import Link from "gatsby-link";

function GetNavList(config) {
  const NavList = [
    {
      primaryText: "Home",
      leftIcon: <FontIcon>home</FontIcon>,
      component: Link,
      to: "/"
    },
    {
      primaryText: "Blog",
      leftIcon: <FontIcon>message</FontIcon>,
      component: Link,
      to: "/blog"
    },
    {
      primaryText: "Projects",
      leftIcon: <FontIcon>star</FontIcon>,
      component: Link,
      to: "/projects"
    },
    {
      primaryText: "About",
      leftIcon: <FontIcon>person</FontIcon>,
      component: Link,
      to: "/about/"
    },
    {
      divider: true
    },
    {
      primaryText: "GIS",
      leftIcon: <FontIcon>layers</FontIcon>,
      component: Link,
      to: "/gis"
    },
    {
      primaryText: "Blockchain",
      leftIcon: <FontIcon>security</FontIcon>,
      component: Link,
      to: "/blockchain"
    },
    {
      primaryText: "Media",
      leftIcon: <FontIcon>share</FontIcon>,
      component: Link,
      to: "/media"
    },
    {
      divider: true
    }
  ];

  if (config.userLinks) {
    config.userLinks.forEach(link => {
      NavList.push({
        primaryText: link.label,
        leftIcon: <FontIcon forceSize iconClassName={link.iconClassName} />,
        component: "a",
        href: link.url
      });
    });
  }

  return NavList;
}
export default GetNavList;
