import styled from 'styled-components';
import { pxToRem } from '@/styles/_common';

export const Spinner = () => {
  return (
    <div>
      <StyledSpinner viewBox="0 0 50 50">
        <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="2" />
      </StyledSpinner>
    </div>
  );
};

const StyledSpinner = styled.svg`
  display: flex;
  width: ${pxToRem(50)};
  height: ${pxToRem(50)};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  & .path {
    stroke: #5652bf;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;
