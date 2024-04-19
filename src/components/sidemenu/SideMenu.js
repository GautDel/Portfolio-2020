import React from 'react';
import SideMenuItem from "./SideMenuItem.js"

const SideMenu = () => {
  const renderMenuItems = () => {
    let menuItems = [
      {
        icon: "Bg",
        name: "My Blog Page",
        link: "http://gautdel.com/"
      },
      {
        icon: "Gh",
        name: "My Github",
        link: "https://github.com/GautDel"
      },
      {
        icon: "Mt",
        name: "My Social",
        link: "https://mastodon.social/@GautDel"
      },
      {
        icon: "Ln",
        name: "My LinkedIn",
        link: "https://ie.linkedin.com/in/gauthier-delalleau"
      },
      {
        icon: "Pt",
        name: "My Latest Project",
        link: "http://flypapershop.eu/"
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
