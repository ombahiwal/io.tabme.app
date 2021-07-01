import React from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';
/*
* @param  {props} props
*/
const MenuCatTitle = props => {
return(<MenuTitleContainer> 
    <SubTitleText>{props.text}</SubTitleText>
     {props.children}
    </MenuTitleContainer>);

}

MenuCatTitle.propTypes = {
    text: PropTypes.string,
    children: PropTypes.object,
  };


const MenuTitleContainer = styled.div`
  display: flex;  
  flex-direction: row;
  color:#5c5c5c;
  background-color:white;
  background:white;
  border-top: 1px solid #ededed;
  border-bottom: 1px solid #ededed;
  margin-top:10px;
  margin-bottom:5px;
  padding:10px;
  padding-left:10px;
  justify-content: space-between;
  align-items: center;
  width: calc(100%);
  height: 50px;
  @media(max-width:375px){
      width: 100%;
  }
`;

const SubTitleText = styled.span`
  
  font-style: bold;
  font-weight: 700;
  color: #2f4f4f;
  font-size: 1.1rem;
  text-align: center;
  align-self: center;
  

`;

export default MenuCatTitle;