import React from "react";
import MealsImg from "../../assets/meals.jpg";
import HeaderCartButon from "./HeaderCartButon";
import "./Header.scss";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className="header">
        <h1>Food meals</h1>
        <HeaderCartButon onClick={props.onShowCart} />
      </header>
      <div className="main-image">
        <img src={MealsImg} alt=" yummy food" />
      </div>
    </React.Fragment>
  );
};

export default Header;
