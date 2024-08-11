import { Link } from "react-router-dom";
import React, { Component } from "react";

import css from "./headers.module.css";

class Header extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      visible: false,
    };
  }
  

  render() {
    const { visible } = this.state;

    return (
      <div className={css.headers}>
        <div className={css.headers__container}>
          <div className={css.homeSign}>
            <Link to="home">
              <img
                src={require("../../image/icon/icons8-makeup-64.png")}
                alt={"homePage"}
                className={css.imgHeader}
              />
              Home page
            </Link>
          </div>

         

          <div className={css.right}>
          
            <ul  style={{ display: visible ? "block" : "none" }}>
              <li >
                <Link to={"blush"}>Blush</Link>
              </li>
              <li  >
                <Link to={"bronzer"}>Bronzer </Link>
              </li>
              <li>
                <Link to={"eyebrows"}>Eyebrows</Link>
              </li>
              <li>
                <Link to={"eyeshadow"}>Eyeshadow </Link>
              </li>
              <li>
                <Link to={"eyeliner"}>Eyeliner </Link>
              </li>
              <li>
                <Link to={"foundation"}>Foundation</Link>
              </li>
              <li>
                <Link to={"lipliner"}>Lip liner </Link>
              </li>
              <li>
                <Link to={"lipstick"}>Lipstick </Link>
              </li>
              <li>
                <Link to={"mascara"}>Mascara </Link>
              </li>
              <li>
                <Link to={"nailpolish"}>Nail polish </Link>
              </li>
            </ul>
            
            <div className={css.slide_nav}>
              <p
                className={css.slide_nav_btn}
                onClick={() => this.setState({ visible: !visible })}>
                ☰
              </p>
            </div>

          </div>
          
        </div>
      </div>
    );
  }
}

export default Header;
