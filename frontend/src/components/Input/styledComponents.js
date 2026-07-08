import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 22px;
`;

export const Label = styled.label`
  font-size: 15px;
  font-weight: 600;
  color: #1f2544;
  margin-bottom: 10px;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 62px;

  border: 1.5px solid #e4e7ec;
  border-radius: 18px;

  padding: 0 18px;

  transition: 0.3s;

  &:focus-within {
    border-color: #6c63ff;
    box-shadow: 0 0 0 4px rgba(108, 99, 255, 0.12);
  }
`;

export const IconContainer = styled.div`
  color: #667085;
  font-size: 20px;
`;

export const StyledInput = styled.input`
  flex: 1;

  border: none;
  outline: none;

  margin-left: 15px;

  font-size: 16px;

  background: transparent;
`;

export const RightIcon = styled.div`
  cursor: pointer;
  color: #667085;
`;