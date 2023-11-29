import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import backgroundImg from '../../assets/bg/bg2.jpg';

const Home = () => {
   return (
      <div className="myBG">
         <img src={backgroundImg} alt="" className="background-img"/>
         <div className="intro">
            <Container className="text-white text-center d-flex justify-content-center align-items-center text-wrap">
               <Row>
                  <Col>
                     <div className="title">ON TARGET</div>
                     <div className="title">MISSION COMPLETE</div>
                     <div className="">
                        <Button variant="dark">See All List</Button>
                     </div>
                  </Col>
               </Row>
            </Container>
         </div>
      </div>
   );
};

export default Home;
