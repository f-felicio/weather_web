import React from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import animationData from "../assets/loading.json";
import { useHistory } from "react-router-dom";

export default function Loading() {
  let history = useHistory();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Main>
      <Container>
        <Lottie options={defaultOptions} />
        <Description>
          Sorry, no results were found for the selected day.
        </Description>
        <BtnSearch
          onClick={() => {
            history.push("/");
          }}
        >
          Take me home!
        </BtnSearch>
      </Container>
    </Main>
  );
}

const Main = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  padding-top: 50px;
  max-width: 30%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;
const Description = styled.div`
  font-size: 17px;
  color: #2a343c;
  text-align: center;
  margin-top: 100px;
`;
const BtnSearch = styled.button`
  cursor: pointer;
  width: 150px;
  margin-top: 10px;
  padding: 6px 10px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  background-color: #1ac0c6;
  box-shadow: 0 4px 6px rgba(136, 150, 200, 0.5);
  z-index: 1;
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  border: none;
  display: flex;
  align-self: center;
`;
