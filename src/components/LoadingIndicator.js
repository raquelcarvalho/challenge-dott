import React from "react";
import styled, { css, keyframes } from "styled-components";

const bump = keyframes`
  from {
    opacity: 0;
		transform: scale(0, 0);
  }

  to {
    opacity: 1;
		transform: scale(1, 1);
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Loading = styled.div`
  display: inline-flex;
`;

const LoadingPicture = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 8px;

  background: ${(props) => props.theme.primary};
  opacity: 0;

  transform: scale(0, 0);
  ${css`
    animation: ${bump} 600ms alternate infinite;
  `}

  &:nth-child(n + 2) {
    animation-delay: 200ms;
  }

  &:nth-child(n + 3) {
    animation-delay: 400ms;
  }

  + * {
    margin-left: 4px;
  }
`;

const LoadingIndicator = (props) => {
  return (
    <LoadingContainer>
      <Loading>
        <LoadingPicture />
        <LoadingPicture />
        <LoadingPicture />
      </Loading>
    </LoadingContainer>
  );
};

export default LoadingIndicator;
