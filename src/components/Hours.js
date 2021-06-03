import React from "react";
import styled from "styled-components";

export default function Days({ hoursList }) {
  const list = hoursList;

  return (
    <Main>
      <Container>
        {list.map((item, index) => (
          <Card key={index}>
            <DateContainer>
              <Date>{item.dt_txt.substr(11, 5)}</Date>
            </DateContainer>
            <Temperature>{parseInt(item.main.temp, 10)}º</Temperature>
            <WeatherIconContainer>
              <WeatherIcon
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              />
            </WeatherIconContainer>
            <Description>{item.weather[0].description}</Description>
            <MinContainer>
              <Min>Min {parseInt(item.main.temp_min, 10)}º</Min>
            </MinContainer>
            <MaxContainer>
              <Max>Max {parseInt(item.main.temp_max, 10)}º</Max>
            </MaxContainer>
          </Card>
        ))}
      </Container>
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
  margin: 20px 0;
  flex-wrap: wrap;
  padding: 10px;
`;

const Card = styled.div`
  border-radius: 6px;
  padding: 18px;
  justify-content: space-between;
  box-shadow: 0px 1px 8px rgba(136, 150, 200, 0.4);
  margin-right: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 24px;
`;

const WeatherIconContainer = styled.div`
  width: 85px;
  height: 85px;
  overflow: hidden;
`;
const WeatherIcon = styled.img`
  width: 100%;
  height: 100%;
`;
const Description = styled.span`
  font-size: 12px;
  color: #2a2b2c;
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
  margin-bottom: 10px;
  background-color: #f2f2f2;
  padding: 2px 8px;
  border-radius: 5px;
`;

const Date = styled.span`
  font-size: 12px;
  color: #2a2b2c;
  font-weight: bold;
  text-align: center;
`;

const Temperature = styled.div`
  font-size: 22px;
  font-weight: 800;
  color: #2a2b2c;
`;
