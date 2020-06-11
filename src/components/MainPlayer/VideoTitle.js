import React from 'react';
import styled from 'styled-components';

const Container = styled.View`
  width: 100%;
`;

const Title = styled.Text`
  color: #0a2f64;
  font-size: 18px;
`;

const VideoTitle = props => {
  return (
    <Container>
      <Title>{props.title}</Title>
    </Container>
  );
};

export default VideoTitle;
