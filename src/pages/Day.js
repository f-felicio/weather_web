import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

// #COMPONENTS
import Header from "../components/Header";
import Hours from "../components/Hours";

// #SERVICES
import getWeather from "../services/getWeather";
import Loading from "../components/Loading";

export default function Day() {
  const { day } = useParams();
  const [city, setCity] = useState("New York");
  const [weather, setWeather] = useState({
    current: { weather: [{ description: "" }] },
  });
  const [hoursList, setHoursList] = useState([]);

  useEffect(() => {
    getData("New York");
  }, []);

  const getData = async (item) => {
    const weather = await getWeather(item);
    const week = weather.list;
    let dayCode = null;
    switch (day) {
      case "sunday":
        dayCode = 0;
        break;
      case "monday":
        dayCode = 1;
        break;
      case "tuesday":
        dayCode = 2;
        break;
      case "wednesday":
        dayCode = 3;
        break;
      case "thursday":
        dayCode = 4;
        break;
      case "friday":
        dayCode = 5;
        break;
      case "saturday":
        dayCode = 6;
        break;

      default:
        break;
    }
    let hoursList = [];
    week.map((item) => {
      const realDate = new Date(item.dt * 1000);
      const codDay = realDate.getDay();
      if (codDay === dayCode) {
        hoursList.push(item);
      }
    });
    const response = { weather, hoursList, city };
    handleSearch(response);
  };

  const handleSearch = (response) => {
    setCity(response.city);
    setWeather({ list: response.hoursList });
    setHoursList(response.hoursList);
  };

  return (
    <MainContainer>
      {city !== "" && hoursList.length > 0 && (
        <>
          <Header weather={weather} city={city} day={day} />
          <Hours hoursList={hoursList} />
        </>
      )}
      {hoursList.length === 0 && <Loading />}
    </MainContainer>
  );
}

const MainContainer = styled.div`
  background: #fff;
  flex: 1;
`;
