import React from 'react';
import { Col, Card, Button } from "react-bootstrap";

export default function Cards({ games, emptyHeading, handleShow }) {
   return (
      <>
         {games.length > 0 ? (
            games.map((game, index) => (
               <Col md={4} key={index}>
                  <Card className="gameImage">
                     <Card.Img variant="top" src={game.image} className="images" />
                     <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                           <Card.Body>
                              <Card.Title>
                                 {game.title}
                              </Card.Title>
                              <Card.Text className="text-left">
                                 {game.description}
                              </Card.Text>
                              <Button
                                 variant="primary"
                                 onClick={() => handleShow(game.id)}
                              >
                                 See More...
                              </Button>
                           </Card.Body>
                           <Card.Footer className="">
                              {game.lastUpdated}
                           </Card.Footer>
                        </div>
                     </div>
                  </Card>
               </Col>
            ))
         ) : (
            <h2>{emptyHeading}</h2>
         )}
      </>
   )
}
