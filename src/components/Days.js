import React, { useState } from "react";
import styled from "styled-components";

export default function Days({ daysList }) {
  const [hoursList, setHoursList] = useState([]);
  return (
    <Main>
      <Container>
        {daysList.map((item, index) => (
          <Card
            key={index}
            onClick={() => {
              setHoursList(item.hours);
            }}
          >
            <DateContainer>
              <Date>{item.label}</Date>
            </DateContainer>
            <MinContainer>
              <Min>Min {parseInt(item.hours[0].main.temp_min, 10)}º</Min>
            </MinContainer>
            <MaxContainer>
              <Max>Max {parseInt(item.hours[0].main.temp_max, 10)}º</Max>
            </MaxContainer>
            <WeatherIconContainer>
              <WeatherIcon
                src={`https://openweathermap.org/img/wn/${item.hours[0].weather[0].icon}@2x.png`}
              />
            </WeatherIconContainer>
            <Description>{item.hours[0].weather[0].description}</Description>
          </Card>
        ))}
      </Container>

      <HoursContainer>
        {hoursList.map((item, index) => (
          <HourCard key={index}>
            <Hour>{item.dt_txt.substr(11, 5)}</Hour>
            <HourTemp>{parseInt(item.main.temp, 10)}º</HourTemp>
          </HourCard>
        ))}
      </HoursContainer>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  margin-top: 20px;
`;
const HoursContainer = styled.div`
  display: flex;
  margin-top: 20px;
  flex-wrap: wrap;
  width: 740px;
  margin-bottom: 50px;
`;

const Card = styled.div`
  cursor: pointer;
  border-radius: 6px;
  padding: 18px;
  justify-content: space-between;
  box-shadow: 0px 1px 8px rgba(136, 150, 200, 0.4);
  margin-right: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const WeatherIconContainer = styled.div`
  width: 95px;
  height: 95px;
  overflow: hidden;
`;
const WeatherIcon = styled.img`
  width: 100%;
  height: 100%;
`;
const Description = styled.span`
  font-size: 12px;
  color: #2a343c;
  text-align: center;
  opacity: 0.7;
  text-transform: capitalize;
  margin-bottom: 8px;
`;
const MinContainer = styled.div`
  background-color: #e9f0fb;
  border-radius: 20px;
  padding: 3px 12px;
  margin-bottom: 10px;
`;
const Min = styled.span`
  font-size: 12px;
  color: #2a6fdb;
  font-weight: bold;
`;
const MaxContainer = styled.div`
  background-color: #f9ebf1;
  border-radius: 20px;
  padding: 3px 12px;
`;
const Max = styled.span`
  font-size: 12px;
  color: #c7417b;
  font-weight: bold;
`;
const DateContainer = styled.div`
  height: 20px;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-bottom: 30px;
`;

const Date = styled.span`
  font-size: 12px;
  color: #2a343c;
  font-weight: bold;
  text-align: center;
`;

const HourCard = styled.div`
  border-radius: 6px;
  padding: 10px;
  justify-content: space-between;
  box-shadow: 0px 1px 8px rgba(136, 150, 200, 0.4);
  margin-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fef7f7;
  margin: 8px;
`;

const Hour = styled.span`
  font-size: 14px;
  color: #2a343c;
  text-align: center;
  margin-bottom: 8px;
`;

const HourTemp = styled.span`
  font-size: 18px;
  color: #2a343c;
  font-weight: bold;
  text-align: center;
`;
