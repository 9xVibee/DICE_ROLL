/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styled from "styled-components";

const RollDiceContainer = styled.div`
  max-width: 250px;
  margin: 0 auto;
  margin-top: 50px;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
    font-weight: 500;
  }
`;

const Button = styled.button`
  margin-top: 50px;
  background-color: black;
  color: white;
  padding: 10px 60px;
  border-radius: 5px;
  cursor: pointer;
  gap: 10px;
  transition: all 0.2s;
  font-size: 16px;
  margin-left: 20px;

  &:hover {
    background-color: white;
    border: 2px solid black;
    color: black;
  }
`;

const RollDice = ({ curretDice, rollDice, setTotalScore }) => {
  return (
    <RollDiceContainer>
      <div className="dice">
        <img
          onClick={rollDice}
          src={`/images/dice_${curretDice}.png`}
          alt=""
        />
      </div>
      <p>Click On Dice To Roll</p>
      <Button onClick={() => setTotalScore(0)}>Reset Score</Button>
    </RollDiceContainer>
  );
};

export default RollDice;
