import React from "react";
import style from "./home.module.scss";
import { Button, Col, Container, Row } from "reactstrap";
import Heading from "../../Components/Heading/Heading";
import Button1 from "../../Components/Buttons/Button";
import bannerpng from "../../asset/imgs/banner.webp";
import Navbar1 from "../../Components/Navbar/Navbar";

const Home = () => (
  <>
    <Navbar1 />
    <Container className={style.home}>
      <Row xs="2" className={style.main_container}>
        <Col md="6" sm="12">
          <Heading
            mainheading={
              "Welcome to next level Cryptocurrencies Token with faster transfer"
            }
            subheading={
              "We helps brands & agencies manage top-performing influencer programs: talent discovery & qualification, relationship management, automated campaign reporting, performance measurement and competitive benchmarking."
            }
          />
          <Button1 color={'secondary'} name="GET TOKEN" />
          <Button1 name="WHITE PAPER" />
        </Col>
        <Col md="6" sm="12">
          <img className={style.banner} src={bannerpng} />
        </Col>
      </Row>
    </Container>
  </>
);

export default Home;
