import React from "react";
import "./WrongLink.css";
import { Col, Row } from "react-bootstrap";
const WrongLink = () => {
  return (
    <div>
      <Row>
        <Col xs={6}>
          <div class="container-wrong-link">
            <h1 class="first-four">4</h1>
            <div class="cog-wheel1">
              <div class="cog1">
                <div class="top"></div>
                <div class="down"></div>
                <div class="left-top"></div>
                <div class="left-down"></div>
                <div class="right-top"></div>
                <div class="right-down"></div>
                <div class="left"></div>
                <div class="right"></div>
              </div>
            </div>

            <div class="cog-wheel2">
              <div class="cog2">
                <div class="top"></div>
                <div class="down"></div>
                <div class="left-top"></div>
                <div class="left-down"></div>
                <div class="right-top"></div>
                <div class="right-down"></div>
                <div class="left"></div>
                <div class="right"></div>
              </div>
            </div>
            <h1 class="second-four">4</h1>
            <p class="wrong-para">Uh Oh! Page not found!</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default WrongLink;