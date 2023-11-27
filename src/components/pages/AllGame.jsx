import { Container, Row } from "react-bootstrap";
import SearchInput from "../partials/SearchInput";
import Cards from "../partials/Cards";

import theWalkingDeadImage from "../../assets/best/theWalkingDead.jpg";
import residentEvil12Image from "../../assets/best/residentEvil2.jpg";
import olliworldImage from "../../assets/trending/olliworld.jpg";
import minecraftImage from "../../assets/trending/minecraft.jpg";
import back4bloodImage from "../../assets/best/back4blood.jpg";
import valorantImage from "../../assets/trending/valorant.jpg";
import untilDawnImage from "../../assets/best/untilDawn.jpg";
import farcryImage from "../../assets/trending/farCry6.jpg";
import crysis3Image from "../../assets/best/crysis3.jpg";
import thiefImage from "../../assets/best/thief.jpg";
import lolImage from "../../assets/trending/lol.jpg";
import wowImage from "../../assets/trending/wow.jpg";


import { useState } from 'react';

const allGameData = [
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
   },{
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
   }
];

const searchGames = (games, searchText) => {
   return games.filter(game => {
      const gameTitle = game.title.toLowerCase();
      const searchLowerCase = searchText.toLowerCase();
      return gameTitle.includes(searchLowerCase);
   });
};

const AllGame = () => {
   const [searchText, setSearchText] = useState('');
   const searchedGames = searchGames(allGameData, searchText);
   return (
      <div className="all-game">
         <Container style={{ paddingTop: '50px' }}>
            <br />
            <h1 className="text-white text-center" id="all-game">
               All Game
            </h1>
            <br />
            <SearchInput
               value={searchText}
               onChange={(newText) => setSearchText(newText)}
            />
            <Row>
               <Cards
                  games={searchedGames}
                  emptyHeading={`No matches for "${searchText}"`} />
            </Row>
         </Container>
      </div>
   );
};

export default AllGame;
