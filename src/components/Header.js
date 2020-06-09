import React from 'react';
import {View, Text, Platform} from 'react-native';
import styled from 'styled-components';

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background: ${props => props.background};
  padding-top: 30px;
`;

const Title = styled.Text`
  color: ${props => props.color};
  font-weight: bold;
  font-size: 20px;
`;

const Header = props => {
  return (
    <Container background={props.background}>
      <Title color={props.color}> {props.title}</Title>
    </Container>
  );
};

export default Header;
