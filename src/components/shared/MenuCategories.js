import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Button, Dropdown} from 'react-bootstrap';
// import { MdAddCircleOutline, MdInfoOutline } from "react-icons/md";
// import {BsInfoCircle, BsPlus } from "react-icons/bs";
// import {Image} from 'react-bootstrap';
// import CurrencySymbol from '../CurrencySymbolComponent';
// import { ImPlus } from "react-icons/im";
// import {Button, ButtonGroup} from 'reactstrap';

/**
 * Card is a component that renders a card with a title and image
 * @param  {props} props
 */






function onscroll_for_menu_bar(navbar,offset, h) {
  // console.log('ss',window.pageYOffset, offset);
  // Categories offset + menubar offset + top bar offset 

  var sticky;
  if(offset <= 0){
    sticky = 400;
  }else{
    sticky = offset - 50;
  }
  if (window.pageYOffset >= sticky && window.pageYOffset >=100) {
    navbar.classList.add("sticky");
    navbar.classList.remove("stickyhide");
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.add("stickyhide");
  }
}

function scrollltoTargetAdjusted(cat){
  // document.getElementById(cat).scrollIntoView();
  var element = document.getElementById(cat);
  var headerOffset = 70;
  var elementPosition = element.getBoundingClientRect().top;
  var offsetPosition = elementPosition - headerOffset;
  // console.log(elementPosition, offsetPosition, window.pageYOffset)
  window.scrollTo({
       top: offsetPosition + window.pageYOffset,
       behavior: "smooth"
  });

}

const MenuCategories = props => {
  
  var active_menu_cat = props.activecat;
  useEffect(()=>{
    var navbar = document.getElementById("menunavbar");
    const menucats_bottom = document.getElementById("menucats").getBoundingClientRect().bottom + window.pageYOffset;
    // console.log(menucats_bottom);
    const onscrollFunc = function(){onscroll_for_menu_bar(navbar, menucats_bottom)};

    window.addEventListener('scroll', onscrollFunc);
  
    return ()=>{
      // on component unmount
      window.removeEventListener('scroll', onscrollFunc);
    }
  }, []);
  
//   const [imageLoaded, setImageLoaded] = useState(false);
  return (<>
    <Wrapper key="1" id="menucats" ref={props.innerRef}
      className={props.className}>
      {props.categories.length > 1 && <center>
        {/* <p></p> */}
        {/* <Button style={{'margin-right':'0', 'margin':'5px'}}  variant="outline-dark"><small><b>{props.activecat}</b></small></Button> */}
                {props.categories.map((cat, idx)=>{
                    return(<><Button style={{'marginRight':'0', 'margin':'5px'}} key={cat} variant="outline-dark" onClick={()=>{scrollltoTargetAdjusted(`${cat}`)}}><small><b>{cat}</b></small></Button> &nbsp;</>);
                })}
      </center>}
    </Wrapper>
{/* <div key="2">
  <center>
<Dropdown>
  <Dropdown.Toggle variant="light" id="dropdown-basic">
    <ActiveCatTitle>
    <b>Menu</b>
    </ActiveCatTitle>
  </Dropdown.Toggle>

  <Dropdown.Menu>
  {props.categories.map((cat, idx)=>{
                    return(<Dropdown.Item className="lineclamp" key={cat} active={cat === props.activecat} onClick={()=>{scrollltoTargetAdjusted(`${cat}`)}}><small><b>{cat}</b></small></Dropdown.Item>);
                })}
  </Dropdown.Menu>
</Dropdown>
<br/>
</center>
</div> */}
    <FixedMenuWrapper key="3" className="stickyhide" id="menunavbar">
    <Dropdown variant="light">
  <Dropdown.Toggle variant="light" id="dropdown-basic">
    <ActiveCatTitle>
    <b>{active_menu_cat}</b>
    </ActiveCatTitle>
  </Dropdown.Toggle>
  <Dropdown.Menu>
  {props.categories.map((cat, idx)=>{
                    return(<Dropdown.Item className="lineclamp" key={cat} active={cat === props.activecat} onClick={()=>{scrollltoTargetAdjusted(`${cat}`)}}><small><b>{cat}</b></small></Dropdown.Item>);
                })}
  </Dropdown.Menu>
</Dropdown>
</FixedMenuWrapper>
    </>
  );
};

MenuCategories.propTypes = {
//   image: PropTypes.string,
//   title: PropTypes.string,
//   text: PropTypes.string,
  activecat: PropTypes.string,
  categories : PropTypes.array,
  innerRef: PropTypes.func,
};

MenuCategories.defaultProps = {
  title: 'Example'
};

export default MenuCategories;

const FixedMenuWrapper = styled.div`
fill:#2f4f4f !important;
width: 100%;
padding:8px;
padding-bottom:10px;
background-color: white;
cursor: pointer;
transition: all 0.3s ease-out;
transform: translateZ(0);
line-height: 1.6;
z-index:100;
box-shadow: 0px 1px 3px 3px rgba(209, 209, 209, .3);

___CSS_0___
`;

const Wrapper = styled.div`

  width: 100%;
  padding:8px;
  padding-top:15px;
  padding-bottom:15px;
  background: white;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 0.75rem 1.5rem rgba(18, 38, 63, 0.03);
  transition: all 0.3s ease-out;
  transform: translateZ(0);
  margin-bottom:15px;
  line-height: 1.6;
  display:flex;
  align-items: center;
  margin-left: auto;
margin-right: auto;
display: block;
  ___CSS_0___
`;
const ActiveCatTitle = styled.span`
color:#2f4f4f !important;
fill:#2f4f4f !important;

`;

// const ImageWrapper = styled.div`
//   position:absolute;

// `;

// const BannerWrapper = styled.div`
// `;


// const TextWrapper = styled.div`
//   ___CSS_0___
// `;


// const LogoImage = styled.img`
//   width: 120px;
//   height: 120px;
//   margin: 1px 1px 1px 1px;
//   border-radius: 50%;
//   display: block;
//   box-shadow: 0px 8px 13px 4px rgb(0 0 0 / 7%);
//   transition: box-shadow 0.3s ease-out, transform 0.3s ease-out,
//     opacity 0.1s ease-out;
//   transition-delay: 0.2s;
//   position: absolute;
//   left:calc(50% - 60px);
//   bottom:-50px;
//   border-style: solid;
//   border-color: white;
//   background-color:white;
//   @media (min-width: 450px) {
//     width: 125px;
//     height:125px;
//     left: calc(50% - 62px)
//   }

//   ___CSS_0___

//   ___CSS_1___
// `;

