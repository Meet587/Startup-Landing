import React from "react";
import style from "./home.module.scss";
import { Button, Col, Container, Row } from "reactstrap";
import Heading from "../../Components/Heading/Heading";
import Button1 from "../../Components/Buttons/Button";
import bannerpng from "../../asset/imgs/banner.webp";
import Navbar1 from "../../Components/Navbar/Navbar";

const Home = () => (
  <>
    <div className={`${style.navbar}`}>
      <Navbar1 />
    </div>
    <Container className={`${style.home} container-md `}>
      <Row xs="2" className={style.main_container}>
        <Col xs="12" sm="12" md="12" lg="6" xl="6" xxl="6">
          <Heading
            mainheading={
              "Welcome to next level Cryptocurrencies Token with faster transfer"
            }
            subheading={
              "We helps brands & agencies manage top-performing influencer programs: talent discovery & qualification, relationship management, automated campaign reporting, performance measurement and competitive benchmarking."
            }
          />
          <Button1 color={"secondary"} name="GET TOKEN" />
          <Button1 name="WHITE PAPER" />
        </Col>
        <Col xs="12" sm="12" md="12" lg="6" xl="6" xxl="6">
          <img className={style.banner} src={bannerpng} />
        </Col>
      </Row>
    </Container>
  </>
);

export default Home;
