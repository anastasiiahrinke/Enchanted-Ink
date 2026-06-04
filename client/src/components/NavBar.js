import React, { useContext } from "react";
import { Context } from "../index";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { LOGIN_ROUTE, MAIN_ROUTE } from "../utils/consts";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  return (
    <Navbar className="px-4 position-relative">

      <NavLink className="navbar-brand" to={MAIN_ROUTE}>Novella</NavLink>

      <Nav className="position-absolute start-50 translate-middle-x d-flex gap-4">
        <a href="#" className="nav-link">Catalogue</a>
        <a href="#" className="nav-link">Genres</a>
        <a href="#" className="nav-link">New Arrivals</a>
        <a href="#" className="nav-link">My Library</a>
      </Nav>

      {user.isAuth ?
        <Nav className="ms-auto d-flex gap-2">
          <Button className="btn-primary">ADMIN</Button>
          <Button className="btn-primary" onClick={() => user.setIsAuth(false)}>SIGN OUT</Button>
        </Nav>
        :
        <Nav className="ms-auto">
          <NavLink
            to={LOGIN_ROUTE}
            className={'btn-primary'}
          >
            SIGN IN
          </NavLink>
        </Nav>
      }

    </Navbar>
  );
});

export default NavBar;