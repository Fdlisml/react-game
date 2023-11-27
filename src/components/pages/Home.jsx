import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Home = () => {
   return (
      <div className="myBG">
         <div className="intro">
            <Container className="text-white text-center d-flex justify-content-center align-items-center">
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
