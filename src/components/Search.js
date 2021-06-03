import React, { useState } from "react";
import styled from "styled-components";

// #SERVICES
import getWeather from "../services/getWeather";

export default function Search({ handleSearch }) {
  const [city, setCity] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const getData = async () => {
    const weather = await getWeather(city);
    const week = weather.list;
    let daysList = [];
    week.map((item) => {
      let hour = item;
      const humanDate = new Date(item.dt * 1000);
      const codDay = humanDate.getDay();
      const findDay = daysList.findIndex((x) => x.id === codDay);
      if (findDay && findDay >= 0) {
        daysList[findDay].hours.push(hour);
      } else if (findDay === 0) {
        daysList[0].hours.push(hour);
      } else {
        const day = {};
        switch (codDay) {
          case 0:
            day.label = "Sunday";
            break;
          case 1:
            day.label = "Monday";
            break;
          case 2:
            day.label = "Tuesday";
            break;
          case 3:
            day.label = "Wednesday";
            break;
          case 4:
            day.label = "Thursday";
            break;
          case 5:
            day.label = "Friday";
            break;
          case 6:
            day.label = "Saturday";
            break;
          default:
            break;
        }
        day.id = codDay;
        day.hours = [];
        day.hours.push(item);
        daysList.push(day);
      }
    });
    const response = { weather, daysList, city };
    handleSearch(response);
  };

  return (
    <MainContainer>
      <Label>Type a city</Label>
      <FormInput
        placeholder="ex: tokyo, paris"
        onChange={(e) => {
          setCity(e.target.value);
          setErrorMsg("");
        }}
        value={city}
      />
      <BtnSearch onClick={getData}>Search</BtnSearch>
      <ErrorText>{errorMsg}</ErrorText>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  align-items: center;
  justify-content: center;
`;
const Label = styled.p`
  color: #2a2b2c;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`;
const FormInput = styled.input`
  background-color: transparent;
  margin-bottom: 20px;
  height: 35px;
  border: none;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #a5a6a7;
  font-size: 20px;
  font-weight: 200;
  align-self: center;
  text-align: center;
  text-transform: capitalize;
`;
const ErrorText = styled.span`
  color: #2a2b2c;
  text-align: center;
  margin-top: 20px;
  font-size: 13px;
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
