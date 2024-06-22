// src/components/CitySelector.js
import React, { useState } from 'react';
import styled from 'styled-components';

const Select = styled.select`
  padding: 10px;
  margin: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 10px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: #0056b3;
  }
`;

const CitySelector = ({ onSelectCity }) => {
  const [selectedCity, setSelectedCity] = useState('');

  const handleChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSelectCity(selectedCity);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Select value={selectedCity} onChange={handleChange}>
        <option value="London">London</option>
        <option value="New York">New York</option>
        <option value="Tokyo">Tokyo</option>
        <option value="Paris">Paris</option>
        <option value="Moscow">Moscow</option>
      </Select>
      <Button type="submit">Select City</Button>
    </form>
  );
};

export default CitySelector;
