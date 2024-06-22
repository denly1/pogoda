// src/components/CityList.js
import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  cursor: pointer;
  padding: 10px;
  margin: 5px;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  &:hover {
    background-color: #0056b3;
  }
`;

const CityList = ({ onSelectCity }) => {
  const cities = ['London', 'New York', 'Tokyo', 'Paris', 'Moscow'];

  return (
    <List>
      {cities.map((city) => (
        <ListItem key={city} onClick={() => onSelectCity(city)}>
          {city}
        </ListItem>
      ))}
    </List>
  );
};

export default CityList;
