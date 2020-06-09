import React from 'react';
import {View, Image, Text} from 'react-native';
import styled from 'styled-components';

const Container = styled.View`
  height: 250px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
`;

const ArtworkImage = styled.Image`
  width: 250px;
  height: 250px;
  border-radius: 250px;
`;

const ArtworkShadow = styled.View`
  width: 250px;
  height: 250px;
  border-radius: 250px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.45);
`;

const Circle = styled.View`
  width: ${props => props.size};
  height: ${props => props.size};
  border-radius: 100px;
  background: ${props => props.color};
  position: absolute;
  ${props => (props.left ? `left: ${props.left} ` : null)};
  ${props => (props.right ? `right: ${props.right} ` : null)};
`;
const Artwork = props => {
  const image = {
    uri:
      'https://images.unsplash.com/photo-1504898770365-14faca6a7320?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  };

  return (
    <Container>
      <Circle size="130px" left="20px" color="#F3F5F9" />
      <Circle size="130px" right="20px" color="#F3F5F9" />
      <Circle size="200px" color="#DAE5EF" left="40px" />
      <Circle size="200px" color="#DAE5EF" right="40px" />
      <ArtworkShadow>
        <ArtworkImage source={image} />
      </ArtworkShadow>
    </Container>
  );
};

export default Artwork;
