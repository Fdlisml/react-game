import { Container, Row } from "react-bootstrap";
import { useState } from "react";
import SearchInput from "../partials/SearchInput";
import Cards from "../partials/Cards";
import Modal from "../partials/Modal";

import allGameData from "../data/gamesData";

const searchGames = (games, searchText) => {
  return games.filter((game) => {
    const gameTitle = game.title.toLowerCase();
    const searchLowerCase = searchText.toLowerCase();
    return gameTitle.includes(searchLowerCase);
  });
};

const AllGame = () => {
  const [searchText, setSearchText] = useState("");
  const searchedGames = searchGames(allGameData, searchText);
  return (
    <div className="all-game">
      <Container style={{ paddingTop: "50px" }}>
        <Modal />
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
            emptyHeading={`No matches for "${searchText}"`}
          />
        </Row>
      </Container>
    </div>
  );
};

export default AllGame;
