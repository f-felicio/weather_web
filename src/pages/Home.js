import React, { useState } from "react";
import styled from "styled-components";

// #COMPONENTS
import Header from "../components/Header";
import Days from "../components/Days";
import Search from "../components/Search";
import Chart from "../components/Chart";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [daysList, setDaysList] = useState([]);

  const handleSearch = (response) => {
    setCity(response.city);
    setWeather(response.weather);
    setDaysList(response.daysList);
  };

  return (
    <MainContainer>
      <Search handleSearch={handleSearch} />
      {city !== "" && daysList.length > 1 && (
        <>
          <Header weather={weather} city={city} />
          <Days daysList={daysList} />
          <Chart daysList={daysList} />
        </>
      )}
    </MainContainer>
  );
}

const MainContainer = styled.div`
  background: #fff;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-bottom: 40px;
`;
