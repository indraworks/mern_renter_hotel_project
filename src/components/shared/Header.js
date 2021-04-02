import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <Link className='navbar-brand title' to='/'>
        BookWithMe
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <form className='form-inline my-2 my-lg-0'>
          <input
            className='form-control bmw-search mr-sm-2 ml-5'
            type='search'
            placeholder='Search'
            aria-label='Search'
          />
          <button
            className='btn bmw-main btn-outline-success my-2 my-sm-0'
            type='submit'
          >
            Search
          </button>
        </form>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item active'>
            <Link className='nav-link' to='/'>
              Home <span className='sr-only'>(current)</span>
            </Link>
          </li>
          <li className='nav-item dropdown'>
            <Link
              className='nav-link dropdown-toggle'
              to='!#'
              id='navbarDropdown'
              role='button'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              Manage
            </Link>
            <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
              <Link className='dropdown-item' to='!#'>
                Action
              </Link>
              <Link className='dropdown-item' to='!#'>
                Another action
              </Link>
              <div className='dropdown-divider'></div>
              <Link className='dropdown-item' to='!#'>
                Something else here
              </Link>
            </div>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/login'>
              Login
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/register'>
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;

/*
cara distable eslint kalau muncul warning utk temporary biar tak terganggu
/* eslint-disable jsx-ally/anchor-is-valid */
