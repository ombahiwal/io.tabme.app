import React from 'react';
import styled from "styled-components";
// import PropTypes from 'prop-types';
/*
* @param  {props} props
*/
const SPMGrid = props => {
return(<GridWrapper>
            <GridItem>1</GridItem>
            <GridItem>2</GridItem>
            <GridItem>3</GridItem>
            <GridItem>4</GridItem>
            <GridItem>5</GridItem>
    </GridWrapper>);
}


const GridWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  @media (min-width: 350px) {
    grid-template-columns: repeat(3, 1fr); 
  }

  @media (min-width: 600px) {
    grid-template-columns: repeat(4, 1fr); 
  }
`;

const GridItem = styled.div`
  background-color: dodgerblue;
  border-radius:8px;
  color: white;
  padding: 1rem;
  height: 4rem;
  box-shadow: rgb(45 45 45 / 5%) 0px 2px 2px, rgb(49 49 49 / 5%) 0px 4px 4px, rgb(42 42 42 / 5%) 0px 8px 8px;

`;


export default SPMGrid;