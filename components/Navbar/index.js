import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavBtn,
  NavBtnLink,
} from "./navbar-styles";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <NavLogo
          to="home"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          <Image src="/jc.svg" width={50} height={30} alt="logo_JC" />
        </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars color="white" />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLink
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="training"
              smooth={true}
              duration={500}
              spy={true}
              exact="train"
              offset={-80}
            >
              Training
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              exact="train"
              offset={-80}
            >
              Über mich
            </NavLink>
          </NavItem>
          
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Blog</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
