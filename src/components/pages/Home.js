import React from 'react';
import styled from 'styled-components';
import hm7 from '../images/hm7.jpg';
import Hm3 from '../images/Hm3.jpg';
import '../Css/ListStyle.css';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ContentContainer = styled.div`
  max-width: 800px;
  padding: 20px;
`;

const StyledText = styled.h1`
  font-family: 'Luckiest Guy', sans-serif;
  margin-bottom: 10px;
  top: 0;
  color: #fff;
  font-weight: bold;
  background-image: linear-gradient(45deg, #4ecdc4, #2b5876);
  -webkit-background-clip: text;
  background-clip: text;
  display: inline-block;
`;

const ImageContainer = styled.div`
  position: relative;
  text-align: center;
  margin-right: -104px;
  margin: 26px;
  left: 188px;
`;

const LargeImage = styled.img`
  width: 70%;
  height: 50%;
  border-radius: 10px;
`;

const SmallImage = styled.img`
  position: absolute;
  bottom: -15%;
  left: 50%;
  height: 98px;
  transform: translateX(-50%);
  width: 297px;
  border-radius: 10px;
  margin-left: 35px;
`;

const Home = () => {
  return (
    <Container>
      <ContentContainer>
        <div className='headings'>
          <div>
            <StyledText>Your Growth partners</StyledText>
            <p>
              There is no one-size-fits-all solution in the digital world, <br/>
              hence we focus on developing customised marketing strategies <br/>
              that deliver measurable and long-term results.
            </p>
          </div>
        </div>
        <ImageContainer>
          <LargeImage src={hm7} alt="" />
          <SmallImage src={Hm3} alt="" />
        </ImageContainer>
      </ContentContainer>
    </Container>
  );
};

export default Home;
