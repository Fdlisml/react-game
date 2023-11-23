import { Container, Row, Col, Image, Card } from "react-bootstrap";
import NavigationBar from "./NavigationBar";
import SearchInput from "./SearchInput";

import back4bloodImage from "../assets/best/back4blood.jpg";
import crysis3Image from "../assets/best/crysis3.jpg";
import residentEvil12Image from "../assets/best/residentEvil2.jpg";
import theWalkingDeadImage from "../assets/best/theWalkingDead.jpg";
import thiefImage from "../assets/best/thief.jpg";
import untilDawnImage from "../assets/best/untilDawn.jpg";


import { useState } from 'react';

const bestGamesData = [
   {
      image: back4bloodImage,
      title: "Back 4 Blood",
      desciption:
         "Back 4 Blood is a thrilling cooperative first-person shooter from the creators of the critically acclaimed Left 4 Dead franchise. You are at the center of a war against the Ridden. These once-human hosts of a deadly parasite have turned into terrifying creatures bent on devouring what remains of civilization.",
      lastUpdated: "Last updated 3 mins ago",
   },
   {
      image: crysis3Image,
      title: "Crysis 3",
      desciption:
         "Similar to the earlier games in the Crysis series, Crysis 3 is a first-person shooter. Players take control of Prophet as he progresses through New York City to defeat the Ceph, a technologically advanced alien race. Throughout the game, players can slide, sprint, jump and crouch.",
      lastUpdated: "Last updated 3 mins ago",
   },
   {
      image: residentEvil12Image,
      title: "Resident Evil 12",
      desciption:
         "Resident Evil, or Biohazard in Japan and Southeast Asia, is a Japanese horror game media franchise created by Capcom. It consists of survival horror, third-person shooter and first-person shooter games, with players typically surviving in environments inhabited by zombies and other frightening creatures.",
      lastUpdated: "Last updated 3 mins ago",
   },
   {
      image: theWalkingDeadImage,
      title: "The Walking Dead",
      desciption:
         "The Walking Dead is a graphic adventure, played from a third-person perspective with a variety of cinematic camera angles, in which the player, as protagonist Lee Everett, works with a rag-tag group of survivors to stay alive in the midst of a zombie apocalypse.",
      lastUpdated: "Last updated 3 mins ago",
   },
   {
      image: thiefImage,
      title: "Thief",
      desciption:
         "Back 4 Blood is a thrilling cooperative first-person shooter from the creators of the critically acclaimed Left 4 Dead franchise. You are at the center of a war against the Ridden. These once-human hosts of a deadly parasite have turned into terrifying creatures bent on devouring what remains of civilization.",
      lastUpdated: "Last updated 3 mins ago",
   },
   {
      image: untilDawnImage,
      title: "Until Dawn",
      desciption:
         "Back 4 Blood is a thrilling cooperative first-person shooter from the creators of the critically acclaimed Left 4 Dead franchise. You are at the center of a war against the Ridden. These once-human hosts of a deadly parasite have turned into terrifying creatures bent on devouring what remains of civilization.",
      lastUpdated: "Last updated 3 mins ago",
   },
];

const filterImages = (images, searchText) => {
   return images.filter(image => {
      const imageTitle = image.title.toLowerCase();
      const searchLowerCase = searchText.toLowerCase();
      return imageTitle.includes(searchLowerCase);
   });
};

const BestGame = () => {
   const [searchText, setSearchText] = useState('');
   const filteredGames = filterImages(bestGamesData, searchText);
   return (
      <div className="best">
         <NavigationBar />
         <Container>
            <br />
            <h1 className="text-white text-center" id="best">
               BEST GAMES
            </h1>
            <br />
            {/* Search input */}
            <SearchInput
               value={searchText}
               onChange={(newText) => setSearchText(newText)}
            />
            <Row>
               {filteredGames.map((game, index) => (
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
               ))}
            </Row>
         </Container>
      </div>
   );
};

export default BestGame;
