import React from 'react';
import SideMenuItem from "./SideMenuItem.js"

const SideMenu = () => {
  const renderMenuItems = () => {
    let menuItems = [
      {
        icon: "Bg",
        name: "My Blog Page",
        link: "http://www.corkblog.ie"
      },
      {
        icon: "Pa",
        name: "My Business Site",
        link: "http://www.partummedia.com"
      },
      {
        icon: "Im",
        name: "My Instagram",
        link: "https://www.instagram.com/gautdel/"
      },
      {
        icon: "Ln",
        name: "My LinkedIn",
        link: "https://ie.linkedin.com/in/gauthier-delalleau"
      },
      {
        icon: "Pt",
        name: "My Latest Project",
        link: "http://www.gautdel.com/project"
      }
    ]

    let renderedItems = []

    menuItems.forEach((item, i) => {
      renderedItems.push(<SideMenuItem name={item.name} icon={item.icon} key={i} link={item.link} />)
    })

    return renderedItems
  }

  return (
    <div className="side-menu">
      {renderMenuItems()}
    </div>
  );
}



export default SideMenu;
