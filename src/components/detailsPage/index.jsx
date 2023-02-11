import { logDOM } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";
import { Contents } from "../../contents/contents.js";

const DetailsPage = () => {
  return (
    <>
      <div className="page-hero">
        <Link to={"/"}>
          <img src={Contents[window.location.pathname].background} alt="" />
        </Link>
      </div>
      <div className="page-container">
        <h1> {Contents[window.location.pathname].title}</h1>

        <p> {Contents[window.location.pathname].content}</p>
      </div>
      <div className="page-button">
        <a href="">Hemen Katıl</a>
      </div>
    </>
  );
};

export default DetailsPage;
