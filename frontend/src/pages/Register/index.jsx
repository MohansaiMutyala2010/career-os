import {
  FaRoute,
  FaRobot,
  FaChartLine,
} from "react-icons/fa";

import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
} from "react-icons/fa";

import Input from "../../components/Input";

import illustration from "../../assets/illustration.png";
import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.jpeg";

import Button from "../../components/Button";

import { FaGoogle, FaGithub } from "react-icons/fa";

import {
  RegisterContainer,
  LeftSection,
  LeftContent,
  Illustration,
  HeroTitle,
  HeroDescription,
  FeatureList,
  FeatureCard,
  FeatureIcon,
  FeatureText,
  FeatureTitle,
  FeatureDescription,
  TestimonialCard,
  Quote,
  UserInfo,
  Avatar,
  UserName,
  UserRole,
  RightSection,
  RegisterCard,
  LogoContainer,
  Logo,
  LogoText,
  FormTitle,
  FormSubtitle,
  Form,CheckboxContainer,Divider,LoginText,
  LoginLink,
} from "./styledComponents";

import Social from "../../components/SocialButton";
import { SocialContainer } from "../../components/SocialButton/styledComponents";

export default function Register() {
  return (
    <RegisterContainer>

      {/* LEFT SECTION */}

      <LeftSection>

        <LeftContent>

          <Illustration
            src={illustration}
            alt="Career Illustration"
          />

          <HeroTitle>
            Build your
            <br />
            <span>dream career</span>
          </HeroTitle>

          <HeroDescription>
            Personalized roadmaps, AI mentor,
            daily tasks and progress tracking —
            everything you need to grow.
          </HeroDescription>

          <FeatureList>

            <FeatureCard>

              <FeatureIcon>
                <FaRoute />
              </FeatureIcon>

              <FeatureText>
                <FeatureTitle>
                  Personalized Roadmaps
                </FeatureTitle>

                <FeatureDescription>
                  Get a clear path tailored to your goals.
                </FeatureDescription>

              </FeatureText>

            </FeatureCard>

            <FeatureCard>

              <FeatureIcon>
                <FaRobot />
              </FeatureIcon>

              <FeatureText>

                <FeatureTitle>
                  AI Mentor
                </FeatureTitle>

                <FeatureDescription>
                  Learn with AI guidance every step.
                </FeatureDescription>

              </FeatureText>

            </FeatureCard>

            <FeatureCard>

              <FeatureIcon>
                <FaChartLine />
              </FeatureIcon>

              <FeatureText>

                <FeatureTitle>
                  Track Progress
                </FeatureTitle>

                <FeatureDescription>
                  Stay consistent and achieve more.
                </FeatureDescription>

              </FeatureText>

            </FeatureCard>

          </FeatureList>

          <TestimonialCard>

            <Quote>
              "Career OS helped me go from confused
              to confident. Highly recommended!"
            </Quote>

            {/*<UserInfo>

              <Avatar
                src={avatar}
                alt="User"
              />

              <div>

                <UserName>
                  Priya Sharma
                </UserName>

                <UserRole>
                  SDE at Amazon
                </UserRole>

              </div>

            </UserInfo>*/}

          </TestimonialCard>

        </LeftContent>

      </LeftSection>

      {/* RIGHT SECTION */}

      <RightSection>

        <RegisterCard>

          <LogoContainer>

            <Logo
              src={logo}
              alt="Career OS"
            />

            <LogoText>
              Career OS
            </LogoText>

          </LogoContainer>

          <FormTitle>
            Create your account
          </FormTitle>

          <FormSubtitle>
            Let's get you started
          </FormSubtitle>

         <Form>

  <Input
    label="Full Name"
    placeholder="Enter your full name"
    icon={<FaUser />}
  />

  <Input
    label="Email Address"
    placeholder="Enter your email"
    icon={<FaEnvelope />}
  />

  <Input
    label="Password"
    type="password"
    placeholder="Create a password"
    icon={<FaLock />}
    rightIcon={<FaEye />}
  />

  <Input
    label="Confirm Password"
    type="password"
    placeholder="Confirm your password"
    icon={<FaLock />}
    rightIcon={<FaEye />}
  />

  <CheckboxContainer>

  <input
    type="checkbox"
    id="terms"
  />

  <label htmlFor="terms">
    I agree to the
    <span> Terms of Service </span>
    and
    <span> Privacy Policy</span>
  </label>

</CheckboxContainer>
<Button type="submit">
  Create Account
</Button>

<Divider>
  <hr />
  <span>or continue with</span>
  <hr />
</Divider>

<SocialContainer>
  <Social>
    <FaGoogle />
    Google
  </Social>

  <Social>
    <FaGithub />
    GitHub
  </Social>
</SocialContainer>

<LoginText>
  Already have an account?{" "}
  <LoginLink>Login</LoginLink>
</LoginText>

</Form>



        </RegisterCard>

      </RightSection>

    </RegisterContainer>
  );
}