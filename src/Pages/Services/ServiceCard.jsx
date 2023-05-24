import s1 from "../../asset/imgs/service-1.svg";
import s2 from "../../asset/imgs/service-2.svg";
import s3 from "../../asset/imgs/service-3.svg";
import s4 from "../../asset/imgs/service-4.svg";
import style from "./services.module.scss";
import {Row, Col} from 'reactstrap'

export const ServiceCard = (props) => {
  return (
    <Row className={`${style.service_container} `}>
      {ServiseData.map((obj) => {
        return (
          <Col key={obj.id} className={`${style.card}`} xm='12' sm="12" md="6" lg="3">
            <div className={`${style.serviceLogo}`}>
              <img src={obj.logo} alt="img" />
            </div>
            <h5 className={`${style.heading}`}>{obj.heading}</h5>
            <p className={`${style.text}`}>{obj.text}</p>
          </Col>
        );
      })}
    </Row>
  );
};

export const ServiseData = [
  {
    id: 1,
    logo: s1,
    heading: "Great Market Value",
    text: "Lorem ipsum dolor sit amet with consectetur adipisicing elit the help eiusmod tempor.",
  },
  {
    id: 2,
    logo: s2,
    heading: "Verified Mining Process",
    text: "Lorem ipsum dolor sit amet with consectetur adipisicing elit the help eiusmod tempor.",
  },
  {
    id: 3,
    logo: s3,
    heading: "Fastest Miner",
    text: "Lorem ipsum dolor sit amet with consectetur adipisicing elit the help eiusmod tempor.",
  },
  {
    id: 4,
    logo: s4,
    heading: "Secure Transaction",
    text: "Lorem ipsum dolor sit amet with consectetur adipisicing elit the help eiusmod tempor.",
  },
];
