import React from 'react';
import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { data } from '../../utilits/navbar';
import { Container, Icon } from './style';
import cart from '../../assets/icons/cart.svg';

const Navbar = () => {
  const [state, setState] = useState(false);
  let location = useLocation();
  const handle = () => {
    setState(!state);
  };
  return (
    <div>
      {data.map((item) => (
        <Container key={item.id} color={location.pathname == item.path}>
          <NavLink to={item.path}>{item.title}</NavLink>
        </Container>
      ))}
      <Icon.Cart onClick={handle} state={state} />
      <img src={cart} alt='cart' />
    </div>
  );
};

export default Navbar;
