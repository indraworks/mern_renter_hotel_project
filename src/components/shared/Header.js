import React from 'react';

const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <a className='navbar-brand title' href='!#'>
        BookWithMe
      </a>
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
            <a className='nav-link' href='!#'>
              Home <span className='sr-only'>(current)</span>
            </a>
          </li>
          <li className='nav-item dropdown'>
            <a
              className='nav-link dropdown-toggle'
              href='!#'
              id='navbarDropdown'
              role='button'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              Manage
            </a>
            <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
              <a className='dropdown-item' href='!#'>
                Action
              </a>
              <a className='dropdown-item' href='!#'>
                Another action
              </a>
              <div className='dropdown-divider'></div>
              <a className='dropdown-item' href='!#'>
                Something else here
              </a>
            </div>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='!#'>
              Login
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='!#'>
              Register
            </a>
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