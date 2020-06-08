import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NewsIcon from '../../assets/img/nav-earth.png';
import TakeoutIcon from '../../assets/img/takeout.png';
import HumbergerIconImage from '../../assets/img/humberger.png';
import CloseIconImage from '../../assets/img/close.png';

const Drawer = () => {
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);

  console.log(close);
  
  const openFunc = () => {
    setOpen(true);
    setClose(false);
  }
  const closeFunc = () => {
    setOpen(false);
    setClose(true);
  }

  return (
    <React.Fragment>
      {!open && <OpenButton onClick={openFunc}><OpenIcon src={HumbergerIconImage} alt="humberger" /></OpenButton>}
      
      {open && (
        <React.Fragment>
          <CloseButton onClick={closeFunc}><CloseIcon src={CloseIconImage} alt="close" /></CloseButton>
          <Open>
          <SideBarList>
                <li><IconImage src={NewsIcon} alt="news" />NEWS</li>
                <li><Link to="/japan_news" style={{color: '#696969', margin: '20px 0 20px 20px'}}>JAPAN</Link></li>
                <li><Link to="/anime_news" style={{color: '#696969', margin: '20px 0 20px 20px'}}>ANIME</Link></li>

                <li><IconImage src={TakeoutIcon} alt="take out" />TAKE OUT</li>
                <li><Link to="/hyogo_take" style={{color: '#696969', margin: '20px 0 20px 20px'}}>HYOGO</Link></li>
            </SideBarList>
          </Open>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

const Open = styled.div`
  display: block;
  color: #000;
  width: 100%;
  height: 100vh;
  background: #eee;
  top: 45px;
  left: 15px;
  position: fixed;
`;
const OpenButton = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 45px;
  padding: 12px 15px;
  background: #eee;
  top: 0;
  left: 0;
  position: fixed;
`;
const OpenIcon = styled.img`
  width: 20px;
`;
const CloseButton = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 45px;
  padding: 12px 15px;
  background: #eee;
  top: 0;
  left: 0;
  position: fixed;
`;
const CloseIcon = styled.img`
  width: 20px;
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

export default Drawer;
