/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import StartGameImage from "./../assets/dices1.png";

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  .content {
    display: flex;
    flex-direction: column;
    align-items: end;
    height: 30%;

    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;

const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px 100px;
  border-radius: 5px;
  cursor: pointer;
  gap: 10px;
  transition: all 0.2s;
  font-size: 16px;

  &:hover {
    background-color: white;
    border: 2px solid black;
    color: black;
  }
`;

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <img src={StartGameImage} alt="Dices" />
      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;
