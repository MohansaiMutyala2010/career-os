import styled from "styled-components";

export const StyledButton = styled.button`
  width: 100%;
  height: 60px;

  border: none;
  border-radius: 18px;

  background: #6c63ff;
  color: white;

  font-size: 18px;
  font-weight: 600;

  cursor: pointer;

  transition: all 0.3s ease;

  &:hover {
    background: #5848f7;
    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;