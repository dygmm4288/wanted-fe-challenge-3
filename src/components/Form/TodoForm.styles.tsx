import styled from "styled-components";

export const StForm = styled.form`
  display: flex;
  flex-direction: row;
`;

export const StInput = styled.input<{ $isFocus: boolean }>`
  width: 100%;
  padding: 0.75rem;

  &::placeholder {
    visibility: hidden;
  }

  ${(props) => !props.$isFocus && "color: transparent"}
`;

export const StLabel = styled.label<{ $isFocus: boolean }>`
  position: absolute;

  top: 50%;
  left: 0.75rem;

  transform: translateY(-50%);
  transition: all 0.2s ease-in;

  background-color: white;

  ${(props) =>
    props.$isFocus &&
    `
    top: 0%;
    left: 0.5rem;
    font-size: 0.8rem;
  `}
`;

export const StInputWrapper = styled.div`
  position: relative;
  flex: 1;
`;