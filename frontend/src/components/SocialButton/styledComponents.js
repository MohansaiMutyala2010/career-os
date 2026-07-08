import styled from "styled-components";

export const SocialContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 40px;
`;

export const SocialButton = styled.button`
  flex: 1;
  height: 56px;
  border-radius: 18px;
  background: white;
  border: 1px solid #E4E7EC;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: .3s;

  &:hover {
    border-color: #6C63FF;
  }
`;