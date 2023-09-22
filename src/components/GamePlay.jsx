/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import TotalScore from "./TotalScore";

const GamePlayContainer = styled.main`
  .top-section {
    padding-top: 20px;
    max-width: 1280px;
    justify-content: space-between;
    margin: 0 auto;
    display: flex;
  }
`;

const GamePlay = () => {
  const [curretDice, setCurrentDice] = useState(1);
  const [selectedNumber, setSelectedNumber] = useState();
  const [totalScore, setTotalScore] = useState(0);
  const [error, SetError] = useState("");

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    let randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber);

    if (!selectedNumber) {
      SetError("You Have Not Selected any number");
      return;
    }
    SetError("");

    if (randomNumber == selectedNumber)
      setTotalScore((prev) => prev + randomNumber);
    else setTotalScore((prev) => prev - randomNumber);

    setSelectedNumber(undefined);
  };

  return (
    <GamePlayContainer>
      <div className="top-section">
        <TotalScore totalScore={totalScore} />
        <NumberSelector
          setError={SetError}
          error={error}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice
        curretDice={curretDice}
        rollDice={rollDice}
        setTotalScore={setTotalScore}
      />
    </GamePlayContainer>
  );
};

export default GamePlay;
