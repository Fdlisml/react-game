import { Container, Row, Col, Image, Card } from "react-bootstrap";
import NavigationBar from "./NavigationBar";
import SearchInput from "./SearchInput";

import minecraftImage from "../assets/trending/minecraft.jpg";
import farcryImage from "../assets/trending/farCry6.jpg";
import lolImage from "../assets/trending/lol.jpg";
import olliworldImage from "../assets/trending/olliworld.jpg";
import valorantImage from "../assets/trending/valorant.jpg";
import wowImage from "../assets/trending/wow.jpg";

import { useState } from 'react';

const trendingGamesData = [
   {
      image: minecraftImage,
      title: "Minecraft",
      description: "Minecraft is a game made up of blocks, creatures, and community. You can survive the night or build a work of art – the choice is all yours. But if the thought of exploring a vast new world all on your own feels overwhelming, then fear not!",
      lastUpdated: "Last updated 3 mins ago",
   },
   {
      image: farcryImage,
      title: "Far Cry 6",
      description: "Lost Between Worlds is a rich, action-packed gauntlet with deadly crystal enemies, multiple player paths, all-new lore, and a wide variety of unique gameplay challenges.",
      lastUpdated: "Last updated 3 mins ago",
   },
   {
      image: lolImage,
      title: "League of Legends",
      description: "League of Legends is a team-based strategy game where two teams of five powerful champions face off to destroy the other's base. Choose from over 140 champions to make epic plays, secure kills, and take down towers as you battle your way to victory.",
      lastUpdated: "Last updated 3 mins ago",
   },
   {
      image: olliworldImage,
      title: "OlliOllu World",
      description:
         "OlliOlli World might be the strangest skateboarding game of all time. It takes place in a fictional realm called Radlandia, which is ruled by skate gods, where players train continuously to become a skate wizard by grinding their way through haunted deserts and mystical forests.",
      lastUpdated: "Last updated 3 mins ago",
   },
   {
      image: valorantImage,
      title: "Valorant",
      description: "Valorant is a team-based first-person tactical hero shooter set in the near future. Players play as one of a set of Agents, characters based on several countries and cultures around the world. In the main game mode, players are assigned to either the attacking or defending team with each team having five players on it.",
      lastUpdated: "Last updated 3 mins ago",
   },
   {
      image: wowImage,
      title: "World of Warcraft",
      description: "Set in the fictional world of Azeroth, WoW allows players to create avatar-style characters and explore a sprawling universe while interacting with nonreal players—called nonplayer characters (NPCs)—and other real-world players (PCs).",
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

const TrendingGame = () => {
   const [searchText, setSearchText] = useState('');
   const filteredGames = filterImages(trendingGamesData, searchText);
   return (
      <div className="trending">
         <NavigationBar />
         <Container>
            <br />
            <h1 className="text-white text-center" id="trending">
               TRENDING GAMES
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
                                 {game.description}
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

export default TrendingGame;
