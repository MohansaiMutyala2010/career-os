import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const RegisterContainer = styled.div`
  min-height: 100vh;
  display: flex;
  background: linear-gradient(135deg, #f8f9ff 0%, #eef2ff 100%);
  padding: 30px;

  @media (max-width: ${device.mobile}) {
    flex-direction: column;
    padding: 20px;
  }
`;

export const LeftSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;

  @media (max-width: ${device.mobile}) {
    padding: 20px;
  }
`;

export const LeftContent = styled.div`
  max-width: 560px;
`;

export const Illustration = styled.img`
  width: 100%;
  max-width: 500px;
  display: block;
  margin: 0 auto 40px;

  @media (max-width: ${device.mobile}) {
    max-width: 320px;
    margin-bottom: 30px;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 58px;
  line-height: 1.1;
  color: #1f2544;
  font-weight: 700;
  margin-bottom: 20px;

  span {
    color: #6c63ff;
  }

  @media (max-width: ${device.mobile}) {
    font-size: 40px;
    text-align: center;
  }
`;

export const HeroDescription = styled.p`
  font-size: 20px;
  color: #667085;
  line-height: 1.8;
  margin-bottom: 40px;

  @media (max-width: ${device.mobile}) {
    text-align: center;
    font-size: 18px;
  }
`;

export const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 50px;
`;

export const FeatureCard = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

export const FeatureIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 18px;
  background: #ede9fe;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #6c63ff;
  font-size: 24px;
`;

export const FeatureText = styled.div``;

export const FeatureTitle = styled.h3`
  margin: 0;
  font-size: 20px;
  color: #1f2544;
`;

export const FeatureDescription = styled.p`
  margin-top: 6px;
  color: #667085;
  font-size: 16px;
`;

export const TestimonialCard = styled.div`
  background: white;
  border-radius: 24px;
  padding: 28px;
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.08);
`;

export const Quote = styled.p`
  font-size: 18px;
  color: #334155;
  line-height: 1.8;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const Avatar = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 15px;
`;

export const UserName = styled.h4`
  margin: 0;
  color: #1f2544;
`;

export const UserRole = styled.p`
  margin: 3px 0 0;
  color: #667085;
`;

export const RightSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RegisterCard = styled.div`
  width: 100%;
  max-width: 560px;
  background: white;
  border-radius: 36px;
  padding: 50px;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.08);

  @media (max-width: ${device.mobile}) {
    padding: 30px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 40px;
`;

export const Logo = styled.img`
  width: 45px;
  height: 45px;
`;

export const LogoText = styled.h2`
  margin: 0;
  color: #1f2544;
  font-size: 30px;
`;

export const FormTitle = styled.h1`
  font-size: 46px;
  color: #1f2544;
  margin-bottom: 12px;
`;

export const FormSubtitle = styled.p`
  color: #667085;
  font-size: 20px;
  margin-bottom: 40px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: flex-start;

  gap: 12px;

  margin: 10px 0 30px;

  input{
    margin-top:4px;
    cursor:pointer;
  }

  label{
    font-size:15px;
    color:#667085;
    line-height:1.7;
  }

  span{
    color:#6C63FF;
    cursor:pointer;
    font-weight:600;
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 35px 0;
  gap: 15px;

  hr {
    flex: 1;
    border: none;
    height: 1px;
    background: #E4E7EC;
  }

  span {
    color: #98A2B3;
    font-size: 15px;
  }
`;

export const LoginText = styled.p`
  margin-top: 35px;
  text-align: center;
  color: #667085;
  font-size: 15px;
`;

export const LoginLink = styled.span`
  color: #6c63ff;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    text-decoration: underline;
  }
`;