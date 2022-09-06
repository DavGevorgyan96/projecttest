import React from "react";
import "./style.css";
import logo from "../../assets/gidonline.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <img src={logo} className="logo" alt="" />
        <div>
          <input  type="search" id="site-search" name="" className="srch_query" placeholder="Название фильма..."></input>
          <input id="btnSearch" type="submit" name="submit" value="Поиск"></input>
        </div>
      </div>
      <div className="nav">
        <a href="index.html" className="ttpi">
          Новинки
        </a>
        <span className="ttpo">|</span>
        <a href="browse.html" className="ttpi">
          Премьеры
        </a>
        <span className="ttpo">|</span>
        <a href="details.html" className="ttpi">
          Навигатор
        </a>
        <span className="ttpo">|</span>
        <a href="streams.html" className="ttpi">
          Случайный
        </a>
      </div>
    </div>
  );
};

export default Header;
