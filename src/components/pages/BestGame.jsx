import { Container, Row } from "react-bootstrap";
import { useState } from 'react';
import SearchInput from "../partials/SearchInput";
import Cards from "../partials/Cards";

import gamesData from "../data/gamesData";

const searchGames = (games, searchText) => {
   return games.filter(game => {
      const gameTitle = game.title.toLowerCase();
      const searchLowerCase = searchText.toLowerCase();
      return gameTitle.includes(searchLowerCase);
   });
};

const BestGame = () => {
   const [searchText, setSearchText] = useState('');
   const bestGamesData = gamesData.filter((game) => game.status === 'best');
   const searchedGames = searchGames(bestGamesData, searchText);
   return (
      <div className="best">
         <Container style={{ paddingTop: '50px' }}>
            <br />
            <h1 className="text-white text-center" id="best">
               BEST GAMES
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

export default BestGame;
