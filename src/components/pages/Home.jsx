import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import backgroundImg from '../../assets/bg/live-background.gif';


const Home = () => {
   return (
      <div className="myBG">
         <img src={backgroundImg} alt="" className="background-img"/>
         <div className="intro d-flex align-items-center" style={{ height:"100vh" }}>
            <Container className="text-white text-left d-flex justify-content-start align-items-start text-wrap">
               <Row>
                  <Col>
                     <div className="title">ON TARGET</div>
                     <div className="title">MISSION COMPLETE</div>
                     <Button className="btn-primary">See All List</Button>
                  </Col>
               </Row>
            </Container>
         </div>
      </div>
   );
};

export default Home;
