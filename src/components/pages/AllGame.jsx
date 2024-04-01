import { Container, Row } from "react-bootstrap";
import { useState } from "react";
import SearchInput from "../partials/SearchInput";
import Cards from "../partials/Cards";
import Modals from "../partials/Modals";

import allGameData from "../data/gamesData";

const searchGames = (games, searchText) => {
  return games.filter((game) => {
    const gameTitle = game.title.toLowerCase();
    const searchLowerCase = searchText.toLowerCase();
    return gameTitle.includes(searchLowerCase);
  });
};

export default function AllGame() {
  const [show, setShow] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = (gameId) => {
    setShow(true);
    const game = allGameData.find((game) => game.id === gameId);
    setSelectedGame(game);
  }

  const [searchText, setSearchText] = useState("");
  const searchedGames = searchGames(allGameData, searchText);
  return (
    <div className="all-game">
      <Container style={{ paddingTop: "50px" }}>
        <Modals
          show={show}
          handleClose={handleClose}
          selectedGame={selectedGame}
        />
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
            handleShow={handleShow}
            games={searchedGames}
            emptyHeading={`No matches for "${searchText}"`}
          />
        </Row>
      </Container>
    </div>
  );
};
