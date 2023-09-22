/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 72px;
  height: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;

const NumberSelectorDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .box-container {
    display: flex;
    gap: 20px;
  }

  p {
    font-size: 24px;
    font-weight: 700;
  }
`;

const NumberSelector = ({
  selectedNumber,
  setSelectedNumber,
  error,
  setError,
}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const setValues = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <NumberSelectorDiv>
      {error ? (
        <p
          style={{
            color: "red",
            fontWeight: 400,
          }}
        >
          {error}
        </p>
      ) : (
        ""
      )}
      <div className="box-container">
        {arrNumber.map((value, index) => (
          <Box
            isSelected={value === selectedNumber}
            onClick={() => setValues(value)}
            key={index}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorDiv>
  );
};

export default NumberSelector;
