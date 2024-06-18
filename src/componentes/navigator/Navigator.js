import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faHome,  } from '@fortawesome/free-solid-svg-icons';
import logoPrincipal from '../../img/logoPrincipal.png';
import './Navigator.css';

const Navigator = () => {
  return (
    <nav className='navbar'>
      <ul>
      <div id='logop'>
        <img src={logoPrincipal} />
      </div>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} /> Home
          </Link>
        </li>
        <li>
          <Link to="login">
            <FontAwesomeIcon icon={faHome} /> Login
          </Link>
        </li>
        <li>
          <Link to="form">
            <FontAwesomeIcon icon={faHome} /> Form
          </Link>
        </li>
        <li>
          <Link to="formAdmin">
            <FontAwesomeIcon icon={faHome} /> FormAdmin
          </Link>
        </li>
        <li>
          <Link to="formAdd">
            <FontAwesomeIcon icon={faHome} /> FormAdd
          </Link>
        </li>
              </ul>
    </nav>
  );
};

export default Navigator;
