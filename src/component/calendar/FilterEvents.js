import React from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const FilterEvents = ({ category, setCategory }) => {
  return (
    <FilterContainer>
      <h2>Filter Events</h2>
      <Select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
      </Select>
    </FilterContainer>
  );
};

export default FilterEvents;
