import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NewsIcon from '../../assets/img/nav-earth.png';
import TakeoutIcon from '../../assets/img/takeout.png';
import media from 'styled-media-query';

const Aside = () => {
  return (
    <SideBar>
      <AppTitle>
        <Link to="/" style={{color: '#696969', margin: '0 0 20px 0'}}>Get API</Link>
      </AppTitle>
      <SideBarList>
        <li><IconImage src={NewsIcon} alt="news" />NEWS</li>
        <li><Link to="/japan_news" style={{color: '#696969', margin: '20px 0 20px 20px'}}>JAPAN</Link></li>
        <li><Link to="/anime_news" style={{color: '#696969', margin: '20px 0 20px 20px'}}>ANIME</Link></li>

        <li><IconImage src={TakeoutIcon} alt="take out" />TAKE OUT</li>
        <li><Link to="/hyogo_take" style={{color: '#696969', margin: '20px 0 20px 20px'}}>HYOGO</Link></li>
      </SideBarList>
      <Footer>Copyright 2020 API</Footer>
    </SideBar>
  );
}

const SideBar = styled.aside`
  font-family: 'Julius Sans One', sans-serif;
  width: 200px;
  padding: 30px;
  border-right: 1px solid #d3d3d3;
  background: #fff;
  top: 0;
  bottom: 0;
  position: fixed;
  z-index: 1;
  ${media.lessThan("medium")`
    display: none;
  `}
`;
const AppTitle = styled.h2`
  margin: 0 0 50px 0;
`;
const IconImage = styled.img`
  width: 15px;
  margin: 0 5px 0 0;
  top: 1px;
  position: relative;
`;
const SideBarList = styled.ul`
  color: #dc143c;
`;
const Footer = styled.footer`
  font-size: 10px;
  bottom: 30px;
  position: fixed;
`;

export default Aside;
