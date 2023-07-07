import { Fragment } from "react";
import MealsImg from "../Assets/meals.jpg";
import classes from "../Layout/Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

function Header() {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Order Meal</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={MealsImg} alt="a table full of delicious meals" />
      </div>
    </Fragment>
  );
}

export default Header;
