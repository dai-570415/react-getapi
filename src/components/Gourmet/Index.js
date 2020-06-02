import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import noImage from '../../assets/img/noimage.png'

const keyId = 'YourKey'; // ぐるなびAPI KEY
let pref = 'PREF28'; // 28は兵庫県
let hitPerPage = 99; // 件数（Max100）
let lunch = 1; // 0 or 1
let takeout = 1; // 0 or 1
let bento = 0; // 0 or 1
let deliverly = 1; // 0 or 1

// 検索クエリ
let URL = `https://api.gnavi.co.jp/RestSearchAPI/v3/?
keyid=${keyId}&
pref=${pref}&
hit_per_page=${hitPerPage}&
lunch=${lunch}&
takeout=${takeout}&
bento=${bento}&
deliverly=${deliverly}`;

const GourmetIndex = () => {
  // head情報
  const title = '【テイクアウト】TAKE OUT Information | ぐるてく';
  const description = '最新のテイクアウトできるお店をリアルタイムにお届け！！';

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
      setArticles(res.data.rest);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <GourNavis>
        {articles.map((item) => (
            <Item key={item.id}>
              {item.image_url.shop_image1 ? (
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <Image src={ item.image_url.shop_image1 } alt={item.category} />
                </a>
              ) : (
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <NoImage src={ noImage } alt="NoImage" />
                </a>
              )}
              <ItemTextArea>
                <NextLink href={item.url} rel="noopener noreferrer" target="_blank">詳細</NextLink>
                {item.category && (<SubText>{item.category}</SubText>)}
                {item.name && (<Title>{item.name}</Title>)} 
              </ItemTextArea>
            </Item>
        ))}
      </GourNavis>
    </>
  );
}

// styled-components
const GourNavis = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1024px;
  margin: 0 auto;
`;
const Item = styled.div`
  width: 30%;
  margin: 0 10px 40px;
  border: 1px solid #ccc;
  background: #fff;
`;
const Image = styled.img`
  display: block; 
  width: 100%;
  height: 250px;
  object-fit: cover;
`;
const NoImage = styled.img`
  display: block;   
  width: 100%;
  height: 250px;
  object-fit: cover;
  opacity: .3;
`;
const ItemTextArea = styled.div`
  width: 100%;
  padding: 25px;
`;
const SubText = styled.div`
  font-size: 12px;
  line-height: 0.75em;
  margin: 0 0 5px 0;
`;
const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  line-height: 1.25em;
`;
const NextLink = styled.a`
  display: block;
  font-size: 14px;
  text-align: right;
  text-decoration: none;
  color: #ff7f50;
  margin: 0 0 15px 0;
`;
export default GourmetIndex;
