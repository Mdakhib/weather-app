import React from 'react'
import styled from 'styled-components'


const WeatherLogo = styled.img`
  width: 140px;
  height: 140px;
  margin: 40px auto;
`;

const ChooseCityLabel = styled.span`
  color: black;
  font-weight: bold;
  font-size: 18px;
  margin: 10px auto;
`;

const SearchBox = styled.form`
  color: black;
  font-weight: bold;
  font-size: 18px;
  margin: 20px auto;
  display: flex;
  flex-direction: row;
  border: black solid 1px;
  border-radius: 2px;

  & input {
    padding: 10px;
    font-size: 14px;
    border: none;
    outline: none;
    font-weight: bold;
  }

  & button {
    padding: 10px;
    font-size: 14px;
    color:white;
    background-color:black;
    border: none;
    outline: none;
    font-weight: bold;
    cursor: pointer;
  }
`;





function CityComponent(props) {


  const { updateCity, fetchWeather } = props;

    return (
      <>
        <WeatherLogo src="/icons/perfect-day.svg" />
        <ChooseCityLabel>Find Weather of your city</ChooseCityLabel>
        <SearchBox onSubmit={fetchWeather}>
          <input
            type="text"
            placeholder="City"
            onChange={(e) => updateCity(e.target.value)}
          />
          <button type={"submit"}>Search</button>
        </SearchBox>
      </>
    );
}

export default CityComponent

