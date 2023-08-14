
import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/articles" activeStyle>
                        Articles
                    </NavLink>
                    <NavLink to="/runclubs" activeStyle>
                        Run Clubs
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;