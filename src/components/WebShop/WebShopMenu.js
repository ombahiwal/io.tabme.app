import React, { useState } from 'react';
import styled from "styled-components";
// import PropTypes from 'prop-types';
/*
* @param  {props} props
*/

const WebShopMenu = props => {
 
return(<GridWrapper>
            {/* <GridItem style={{border:"5px solid rgb(70, 109, 214)"}}>1</GridItem> */} 
            {/* {stripe_payment_method} */}
                        <GridItem >
                                {/* <ItemBox> */}
                              <ItemBox style={{background:`url("https://cdn.tabme.io/user_public_assets/banners/60421879089bfc6871c753f6.png") 100% 0px / 100% no-repeat transparent`}}>
                                  Hello
                                <ItemLabel>Hello</ItemLabel>
                              </ItemBox>
                              {/* <GridImage src={`https://cdn.tabme.io/user_public_assets/banners/60421879089bfc6871c753f6.png`}/> */}
                              Hello
                          </GridItem>
                          <GridItem >
                              <ItemBox>
                                  Hello
                                {/* <ItemLabel>Hello</ItemLabel> */}
                              </ItemBox>
                          </GridItem>
                          <GridItem >
                              <ItemBox>
                                  Hello
                                {/* <ItemLabel>Hello</ItemLabel> */}
                              </ItemBox>
                          </GridItem>
                          <GridItem >
                              <ItemBox>
                                  Hello
                                {/* <ItemLabel>Hello</ItemLabel> */}
                              </ItemBox>
                          </GridItem>
        
    </GridWrapper>);
}

const GridWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  @media (min-width: 350px) {
    grid-template-columns: repeat(2, 1fr); 
  }

  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr); 
  }

`;
const GridImage = styled.img`
height:100px;
margin: 0 0 0 0;
overflow: hidden;
display: -webkit-box;
-webkit-line-clamp: 3;
position: absolute;
right: 0px;
bottom: 0px;
border-radius: 0px 8px 8px 0px;`;

const GridItem = styled.div`
  display:block;
  background-color: dogderblue;
  border-radius:8px;
  color: black;
  padding: 0.5rem;
  height: 10rem;
  width: 100%;
  background:red;
  transition: all 0.2s ease-out;
  box-shadow: rgb(45 45 45 / 5%) 0px 2px 2px, rgb(49 49 49 / 5%) 0px 4px 4px, rgb(42 42 42 / 5%) 0px 8px 8px;
  &.active {
    border: 3px solid rgb(70, 109, 214);
    box-shadow: rgba(45, 45, 45, 0.05) 0px 2px 2px,
      rgba(49, 49, 49, 0.05) 0px 4px 4px, rgba(42, 42, 42, 0.05) 0px 8px 8px,
      rgba(32, 32, 32, 0.05) 0px 16px 16px, rgba(49, 49, 49, 0.05) 0px 32px 32px,
      rgba(35, 35, 35, 0.05) 0px 64px 64px;
    transform: translate(0, -2px);
  }

`;
const ItemLabel = styled.div`
  color:black;
  font-size:0.75rem;
  font-weight:500;
  position:relative;
  top:90%;
  text-align:center;
  -ms-transform: translate(0, -50%);
  transform: translate(0, -50%);

`;

const ItemBox = styled.div`
  display:block;
  height:100%;
  width:100%;
  color:black;
  z-index:100;
  font-size:0.75rem;
  font-weight:500;  
`;

const PaypalBox = styled.div`
  display:block;
  height:100%;
  width:100%;
  color:black;
  font-size:0.75rem;
  font-weight:500;
  background: url("https://cdn.tabme.io/app-public-assets/caret-left-solid.svg") 9% 4.5px / 9px no-repeat transparent;
`;

export default WebShopMenu;