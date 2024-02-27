import styled from "styled-components";

export const StForm = styled.form`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

export const StInput = styled.input<{ $isFocus: boolean }>`
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.5rem;

  &::placeholder {
    visibility: hidden;
  }

  ${(props) => !props.$isFocus && "color: transparent;"}
`;

export const StLabel = styled.label<{ $isFocus: boolean }>`
  position: absolute;
  padding: 0.25rem;

  top: 50%;
  left: 0.75rem;

  transform: translateY(calc(-50% - 0.25rem));
  transition: all 0.2s ease-in;

  background-color: white;

  ${(props) =>
    props.$isFocus &&
    `
    top: 0rem;
    left: 0.5rem;
    font-size: 0.8rem;
  `}
`;

export const StInputWrapper = styled.div`
  position: relative;
  flex: 1;
`;
