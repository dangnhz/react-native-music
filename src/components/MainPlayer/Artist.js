import React from 'react';
import styled from 'styled-components';

const Container = styled.View`
  width: 100%;
  padding: 5px 0px;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #c6c7de;
`;

const AttrRecognizerStatic = props => {
  return (
    <Container>
      <Title>{props.title}</Title>
    </Container>
  );
};

export default AttrRecognizerStatic;
