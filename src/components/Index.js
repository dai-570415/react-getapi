import React from 'react';
import styled from 'styled-components';

const Index = () => {
  // head情報
  const title = 'APIでつなぐ | GET API';
  const description = '世の中のAPI情報をつなぐまとめアプリです。';

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

  return (
    <>
      <Dashborad>
        {/* ここにTOPページのデザインを自由におこなう */}
      </Dashborad>
    </>
  );
}

const Dashborad = styled.div`
  width: 100%;
  margin: 0 auto;
`;
export default Index;
