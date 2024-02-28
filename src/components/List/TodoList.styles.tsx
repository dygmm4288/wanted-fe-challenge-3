import styled from "styled-components";

export const StUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  height: 100vh;
  overflow: scroll;
`;

export const StLi = styled.li`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;

  justify-content: space-between;
`;

export const StP = styled.p<{ $isDone: boolean }>`
  flex: 1;
  ${(props) => props.$isDone && "text-decoration: line-through;"}

  font-size: 1.25rem;
`;

export const StButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;
