import React from 'react';
import "./Sidebar.css";
import logo from "../../assets/me-01.png";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return (
        <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img height="40" width="30" src={logo} alt="logo" />
          <h1> Admin</h1>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-home"></i>
          <a href="#">Dashboard</a>
        </div>
        <h2>Main Menu</h2>
        <div className="sidebar__link">
          <i className="fa fa-envelope-square" aria-hidden="true"></i>
          <a href="#">Email</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-comments"></i>
          <a href="#">Chat</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-cart-plus"></i>
          <a href="#">eCommerce</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-archive"></i>
          <a href="#">Calendar</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-th"></i>
          <a href="#">Layouts</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-id-badge"></i>
          <a href="#">Profile</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-file"></i>
          <a href="#">Pages</a>
        </div>
        <h2>Components</h2>
        <div className="sidebar__link">
          <i className="fa fa-calendar-check-o"></i>
          <a href="#">UI Elements</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-th"></i>
          <a href="#">Icons</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-briefcase"></i>
          <a href="#">Charts</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-table"></i>
          <a href="#">Table</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-align-right"></i>
          <a href="#">Forms</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-map-signs"></i>
          <a href="#">Maps</a>
        </div>
        <div className="sidebar__logout">
          <i className="fa fa-power-off"></i>
          <a href="#">Log out</a>
        </div>
      </div>
    </div>
    );
};

export default Sidebar;