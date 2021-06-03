import React from "react";
import styled from "styled-components";

export default function Header({ weather, city, day }) {
  return (
    <Main>
      {weather.list && (
        <Container>
          <CityName>{city}</CityName>
          {day && <DayName>{day}</DayName>}
          <Row>
            <Col>
              <Temperature>
                {parseInt(weather.list[0].main.temp, 10)} Fº
              </Temperature>
              <Description>
                {weather.list[0].weather[0].description}
              </Description>
            </Col>
            <Col>
              <WeatherIconContainer>
                <WeatherIcon
                  src={`https://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}@2x.png`}
                />
              </WeatherIconContainer>
            </Col>
          </Row>

          <Row>
            <Col>
              <MinValue>
                {parseInt(weather.list[0].main.temp_min, 10)}º
              </MinValue>
              <Min>Min</Min>
            </Col>
            <Col>
              <MaxValue>
                {parseInt(weather.list[0].main.temp_max, 10)}º
              </MaxValue>
              <Max>Max</Max>
            </Col>
          </Row>
        </Container>
      )}
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  justify-content: center;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
const Col = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  padding: 10px 20px;
  margin-top: 10px;
  width: 490px;
`;

const CityName = styled.div`
  font-size: 28px;
  letter-spacing: 1.2px;
  font-weight: 500;
  color: #2a343c;
  text-align: center;
  text-transform: capitalize;
`;
const DayName = styled.div`
  text-align: center;
  color: #1ac0c6;
  font-size: 14px;
  font-weight: bold;
  text-transform: capitalize;
`;
const Temperature = styled.div`
  font-size: 72px;
  font-weight: 800;
  color: #2a343c;
  margin-top: 40px;
`;

const Description = styled.div`
  font-size: 24px;
  color: #2a343c;
  text-transform: capitalize;
  margin-bottom: 30px;
`;
const Min = styled.span`
  font-size: 18px;
  color: #2a6fdb;
`;
const MinValue = styled.span`
  font-size: 42px;
  color: #2a6fdb;
`;
const Max = styled.span`
  font-size: 18px;
  color: #c7417b;
`;
const MaxValue = styled.span`
  font-size: 42px;
  color: #c7417b;
`;
const WeatherIconContainer = styled.div`
  width: 125px;
  height: 125px;
  overflow: hidden;
`;
const WeatherIcon = styled.img`
  width: 100%;
  height: 100%;
`;
