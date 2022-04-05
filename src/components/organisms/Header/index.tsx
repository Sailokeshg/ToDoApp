import React, { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import companyLogo from "../../../assets/logo.png";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import "react-pro-sidebar/dist/css/styles.css";
import "./index.css";
import { Link } from "react-router-dom";

const Index = () => {
  const [menuCollapse, setMenuCollapse] = useState(false);
  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive(!active);
  };

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              <p>
                {menuCollapse ? (
                  <img
                    src={companyLogo}
                    alt="zemoso_logo"
                    height="30px"
                    width="30px"
                  ></img>
                ) : (
                  <span>
                    Zemoso &nbsp;
                    <img
                      src={companyLogo}
                      alt="zemoso_logo"
                      height="30px"
                      width="30px"
                    ></img>
                  </span>
                )}
              </p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="circle">
              <MenuItem active={true} icon={<FiHome />}>
                Notes <Link to="/" />
              </MenuItem>
              <MenuItem
                icon={<FaList />}
                active={active}
                onClick={handleActive}
              >
                Archive <Link to="/archive" />
              </MenuItem>
              <MenuItem icon={<FaRegHeart />}>Favourite</MenuItem>
              <MenuItem icon={<RiPencilLine />}>Author</MenuItem>
              <MenuItem icon={<BiCog />}>Settings</MenuItem>
            </Menu>
          </SidebarContent>
        </ProSidebar>
      </div>
    </>
  );
};

export default Index;
