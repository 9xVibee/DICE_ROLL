/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Img1 from "./../assets/dice_1.png";
import Img2 from "./../assets/dice_2.png";
import Img3 from "./../assets/dice_3.png";
import Img4 from "./../assets/dice_4.png";
import Img5 from "./../assets/dice_5.png";
import Img6 from "./../assets/dice_6.png";

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

const ImgObj = {
  1: Img1,
  2: Img2,
  3: Img3,
  4: Img4,
  5: Img5,
  6: Img6,
};

const RollDice = ({ curretDice, rollDice, setTotalScore }) => {
  const [currentRollDice, setCurrentRollDice] = useState(ImgObj[curretDice]);
  useEffect(() => {
    setCurrentRollDice(ImgObj[curretDice]);
  }, [curretDice]);
  
  return (
    <RollDiceContainer>
      <div className="dice">
        <img onClick={rollDice} src={currentRollDice} alt="" />
      </div>
      <p>Click On Dice To Roll</p>
      <Button onClick={() => setTotalScore(0)}>Reset Score</Button>
    </RollDiceContainer>
  );
};

export default RollDice;
