import { PropsWithChildren } from "react";
import styled, { css } from "styled-components";
type ButtonType = "default" | "cta" | "danger";

interface Props {
  type?: HTMLButtonElement["type"];
  onClick?: () => void;
  buttonType?: ButtonType;
}

export default function Button({
  children,
  type,
  onClick,
  buttonType = "default",
}: PropsWithChildren<Props>) {
  return (
    <StButton
      $buttonType={buttonType}
      type={type || "button"}
      onClick={onClick}>
      {children}
    </StButton>
  );
}

const StDangerButtonCss = css<{ $buttonType: ButtonType }>`
  ${({ $buttonType }) =>
    $buttonType === "danger" &&
    css`
      background-color: #dc3545;
      &:hover {
        background-color: #c82333;
      }
    `}
`;

const StCtaButtonCss = css<{ $buttonType: ButtonType }>`
  ${({ $buttonType }) =>
    $buttonType === "cta" &&
    css`
      background-color: #2e7aca;

      &:hover {
        background-color: #0056b3;
      }
    `}
`;

const StButton = styled.button<{ $buttonType: ButtonType }>`
  padding: 1rem 2rem;

  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 1.6rem;
  text-align: center;
  transition: background-color 0.3s, transform 0.2s;

  background-color: #6c757d;
  :hover {
    background-color: #5a6268;
  }

  ${StDangerButtonCss}
  ${StCtaButtonCss}
`;
