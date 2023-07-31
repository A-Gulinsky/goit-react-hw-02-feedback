import styled from "@emotion/styled";

export const Button = styled.button`
  padding: 10px 15px;
  width: 80px;

  color: white;

  border: 1px solid black;
  background-color: silver;
  border-radius: 4px;

  transition: 250ms;

  &:hover {
    transform: scale(1.02);
  }

  &:active {
    background-color: #0077ff;
  }
`

export const Ul = styled.ul`
  display: flex;
  gap: 10px;
`