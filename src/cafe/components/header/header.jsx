import React, { useEffect, useState } from "react";
import "./header.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const navbarAPiUrl = "/json/navbar.json";

function Header() {
  const [navbarData, setnavbarData] = useState();

  const getData = () => {
    fetch(navbarAPiUrl)
      .then((res) => res.json())
      .then((navJson) => {
        setnavbarData(navJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="header-container d-none d-lg-flex ">
      <div className="container header-content">
        <div className="row">
          <div className="col-2">
              <div className="navbar-logo">
                <a href="#">
                  <img src="/images/coffee-logo.svg" className="img-fluid" alt="header-logo"/>
                </a>
              </div>
          </div>
          <div className="col-8">
          <div className="navbar-container">
          <ul>
            {navbarData &&
              navbarData.map((nav) => (
                <li className="nav-item" key={nav.id}>
                  <a
                    className="nav-link"
                    aria-current={nav.text}
                    href={nav.url}
                  >
                    {nav.text}
                  </a>
                </li>
              ))}
          </ul>
        </div>
          </div>
        </div>        
      </div>
    </div>
  );
}

export default Header;
