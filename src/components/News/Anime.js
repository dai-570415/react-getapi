import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import media from 'styled-media-query';
import Drawer from '../elements/Drawer';

// GAS API
const URL = 'YourURL'; // GAS URL

const GasApi = () => {
  // head情報
  const title = '【アニメ最新ニュース】ANIME NEWS 24 | ANI NEWS';
  const description = 'アニメ情報をリアルタイムにお届け！！';

  document.title = title;
  const headData = document.head.children;
  for (let i = 0; i < headData.length; i++) {
      const nameVal = headData[i].getAttribute('name');
      if (nameVal !== null) {
          if (nameVal.indexOf('description') !== -1) {
              headData[i].setAttribute('content', description);
          }
          // OGP(twitter)の設定
          if (nameVal.indexOf('twitter:title') !== -1) {
              headData[i].setAttribute('content', title);
          }
          if (nameVal.indexOf('twitter:description') !== -1) {
              headData[i].setAttribute('content', description);
          }
      }
  }
  // ここまでhead情報

  const [articles, setArticles] = useState([]);
  
  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const res = await axios.get(URL);
      setArticles(res.data);
    } catch (error) {
      console.error(error);
    }
  }
 
  return (
    <>
    <Drawer />
    <NewsTitle>ANIME NEWS <Red>24</Red></NewsTitle>
    <News>
      {articles.map((item) => (
        <Item key={item.url}>
          <Author>
            <div>
              {item.author ? (
                <div style={{fontSize: '14px',fontWeight: 700}}>{item.author.substr(0,18)}</div>
              ) : (
                <div style={{fontSize: '14px',fontWeight: 700,color: '#ccc'}}>null</div>
              )}
              
              <div style={{fontSize: '10px',color: '#696969'}}>{item.publishedAt.substr(0,10)}</div>
            </div>
          </Author>
          <Image src={ item.urlToImage } alt={item.title} />
          <Description>
            {item.description.substr(0,40)}...
            <NextLink href={item.url} rel="noopener noreferrer" target="_blank">続きをよむ</NextLink>
          </Description>
        </Item>
      ))}  
    </News>
    </>
  );
}

// styled-components
const NewsTitle = styled.h1`
  display: block;
  font-family: Julius Sans One, sans-serif;
  text-align: center;
  margin: 0 auto 50px;
`;
const Red = styled.span`
  color: #dc143c;
`;
const News = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1024px;
  margin: 0 auto;
`;
const Item = styled.div`
  width: 30%;
  margin: 0 10px 40px;
  padding: 15px;
  border: 1px solid #ccc;
  background: #fff;
  ${media.lessThan("medium")`
    width: 85%;
  `}
`;
const Author = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 10px 0;
`;
const Description = styled.p`
  font-size: 14px;
  line-height: 1.75em;
`;
const NextLink = styled.a`
  display: block;
  font-size: 12px;
  text-align: right;
  text-decoration: none;
  color: #ff7f50;
  width: 100%;
  margin: 10px 0 0 0;
`;
const Image = styled.img`
  display: block; 
  width: 100%;
  height: 170px;
  object-fit: cover;
  margin: 0 0 10px 0;
  background: #eee;
`;

export default GasApi;