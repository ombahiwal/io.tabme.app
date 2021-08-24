import React, { useState } from 'react';
import WebShopMenu from './WebShopMenu';
import {Container, Navbar, Row, Col} from 'react-bootstrap';
const WebShop = (props)=>{
    
    return(<div> 
        <Container>
            <Row>
                <Navbar style={{padding:'15px'}} expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">
                            <span className="logo">tabme<span className="dot">.</span></span>
                        </Navbar.Brand>
                    </Container>    
                </Navbar>
            </Row>
            <Row>
                <Col>
                {/* <WebShopMenu/> */}<br/>
                </Col>
            </Row>
            <Row>
                <Col>
                <WebShopMenu/>
                </Col>
            </Row>
        </Container>
                
                
            </div>);
}
export default WebShop;