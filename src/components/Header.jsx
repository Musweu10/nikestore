import React from "react";
import HeaderBrand from "../assets/images/shoe_image.png";
import FlipkartLogo from "../assets/images/flipkart.png";
import AmazonLogo from "../assets/images/amazon.png";
import "./css/header.css";
import { Button } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="container bg-primar col-sm-12 col-lg-6">
            <h1>
              Your Feet <br /> Deserve <br />
              the best
            </h1>

            <div className="container py-3">
              <p className="brand-footer-text">
                YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
                SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH
                OUR SHOES.
              </p>
            </div>
            <div className="text-start">
              {" "}
              <Button
                type="button"
                className="btn btn-danger px-4  my-2 me-4 fw-bold rounded-0"
              >
                Shop Now
              </Button>
              <Button
                type="button"
                className="category-btn btn btn-outline-dark px-4 my-2 fw-bold rounded-0"
              >
                Category
              </Button>
            </div>
            <div className="container mb-4">
              <p>Also Available On</p>
              <img
                className="header-imgIcons"
                src={FlipkartLogo}
                alt="FlipkartLogo"
              />
              <img
                className="header-imgIcons mx-4"
                src={AmazonLogo}
                alt="AmazonLogo"
              />
            </div>
          </div>
          <div className="container text-center bg-dange col-sm-12 col-lg-6">
            <img className="header-brand" src={HeaderBrand} alt="HeaderBrand" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
