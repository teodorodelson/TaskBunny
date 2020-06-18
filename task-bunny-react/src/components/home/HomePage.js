import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";

import logo_0 from "./../../Assets/carousel_01.jpg";
import logo_1 from "./../../Assets/carousel_02.jpg";
import logo_2 from "./../../Assets/carousel_03.jpg";
import logo from "./../../Assets/TB_LOGO.png";
import card_0 from "./../../Assets/card_01.jpg";
import card_1 from "./../../Assets/card_02.jpg";
import card_2 from "./../../Assets/card_03.jpg";
import Role from "../../Pages/role";

export default function HomePage() {
  const token = localStorage.getItem("token");
  if (token != null) {
    return (
      <>
        <Role />
        <Container fluid>
          <Row>
            <p>
              <br />
              <div className="welcomeline">
                <img src={logo} alt="Logo" className="center" />;
                <hr />
                <h6>
                  Have more time for yourself, let someone else do your other
                  tasks
                </h6>
              </div>
              HISTORY, PURPOSE AND USAGE Lorem ipsum, or lipsum as it is
              sometimes known, is dummy text used in laying out print, graphic
              or web designs. The passage is attributed to an unknown typesetter
              in the 15th century who is thought to have scrambled parts of
              Cicero's De Finibus Bonorum et Malorum for use in a type specimen
              book. It usually begins with: “Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.” The purpose of lorem ipsum is to
              create a natural looking block of text (sentence, paragraph, page,
              etc.) that doesn't distract from the layout. A practice not
              without controversy, laying out pages with meaningless filler text
              can be very useful when the focus is meant to be on design, not
              content.
            </p>
          </Row>

          <Row>
            <Col>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={logo_0}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={logo_1}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={logo_2}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </Col>
            <Col>
              <p>
                HISTORY, PURPOSE AND USAGE Lorem ipsum, or lipsum as it is
                sometimes known, is dummy text used in laying out print, graphic
                or web designs. The passage is attributed to an unknown
                typesetter in the 15th century who is thought to have scrambled
                parts of Cicero's De Finibus Bonorum et Malorum for use in a
                type specimen book. It usually begins with: “Lorem ipsum dolor
                sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.” The purpose of
                lorem ipsum is to create a natural looking block of text
                (sentence, paragraph, page, etc.) that doesn't distract from the
                layout. A practice not without controversy, laying out pages
                with meaningless filler text can be very useful when the focus
                is meant to be on design, not content.
              </p>
            </Col>

            <br />
          </Row>
          <hr />
          <br />
          <Row>
            <CardColumns>
              <Card>
                <Card.Img variant="top" src={card_0} />
                <Card.Body>
                  <Card.Title>Card title that wraps to a new line</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="p-3">
                <blockquote className="blockquote mb-0 card-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                  <footer className="blockquote-footer">
                    <small className="text-muted">
                      Someone famous in{" "}
                      <cite title="Source Title">Source Title</cite>
                    </small>
                  </footer>
                </blockquote>
              </Card>
              <Card>
                <Card.Img variant="top" src={card_1} />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.{" "}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card bg="primary" text="white" className="text-center p-3">
                <blockquote className="blockquote mb-0 card-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                  <footer className="blockquote-footer">
                    <small className="text-muted">
                      Someone famous in{" "}
                      <cite title="Source Title">Source Title</cite>
                    </small>
                  </footer>
                </blockquote>
              </Card>
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.{" "}
                  </Card.Text>
                  <Card.Text>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img src={card_2} />
              </Card>
              <Card className="text-right">
                <blockquote className="blockquote mb-0 card-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                  <footer className="blockquote-footer">
                    <small className="text-muted">
                      Someone famous in{" "}
                      <cite title="Source Title">Source Title</cite>
                    </small>
                  </footer>
                </blockquote>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </Card.Text>
                  <Card.Text>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardColumns>
          </Row>
        </Container>
      </>
    );
  } else {
    return <h1></h1>;
  }
}
