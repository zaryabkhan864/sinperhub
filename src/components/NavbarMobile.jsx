import React from 'react'

const NavbarMobile = () => {
  return (
    <nav className="navbar navbar-light bg-light fixed-top">
    <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" href="#">Offcanvas navbar</a>
  
      <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">My NFTs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/addwork">Smart Alerts</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/addwork">Top Collections</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/addwork">Market Overview</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/addwork">Staking Compare</a>
            </li>
      
           
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
  
    </div>
  </nav>
  )
}

export default NavbarMobile