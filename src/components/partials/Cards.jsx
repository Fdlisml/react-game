import React from 'react';
import { Col, Card, Image } from "react-bootstrap";

export default function Cards({games, emptyHeading}) {
   return (
      <>
         {games.length > 0 ? (
            games.map((game, index) => (
               <Col md={4} key={index}>
                  <Card className="gameImage">
                     <Image src={game.image} className="images" />
                     <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                           <Card.Title className="text-center">
                              {game.title}
                           </Card.Title>
                           <Card.Text className="text-left">
                              {game.desciption}
                           </Card.Text>
                           <Card.Text className="text-left">
                              {game.lastUpdated}
                           </Card.Text>
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
