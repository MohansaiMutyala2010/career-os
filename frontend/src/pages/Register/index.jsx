import React from "react";
import { useState } from "react";


import {useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
});

const [showPassword, setShowPassword] = useState(false);

const [showConfirmPassword, setShowConfirmPassword] = useState(false);

const [errors, setErrors] = useState({});


const validateForm = () => {
  const newErrors = {};

  if (!formData.fullName.trim()) {
    newErrors.fullName = "Full Name is required";
  }

  if (!formData.email.trim()) {
    newErrors.email = "Email is required";
  }

  if (!formData.password) {
    newErrors.password = "Password is required";
  }

  if (!formData.confirmPassword) {
    newErrors.confirmPassword = "Confirm Password is required";
  }

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};



const handleSubmit = async (e) => {
  e.preventDefault();

  // validation

const isValid = validateForm();

  if (!isValid) {
    return;
  }



  // API call
 try {
    const response = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      alert(data.message);

      // Clear the form
      setFormData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      setErrors({});

      // Later we will navigate to Login page
      // navigate("/login");
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error("Registration Error:", error);
    alert("Something went wrong. Please try again.");
  }


}; 

const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
  console.log(e.target.value);
};

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

         <Form  onSubmit={handleSubmit}>

  <Input
    label="Full Name"
    placeholder="Enter your full name"
    icon={<FaUser />}
    name="fullName"
  value={formData.fullName}
  onChange={handleChange}
  />

  <Input
    label="Email Address"
    placeholder="Enter your email"
    icon={<FaEnvelope />}
    name="email"
  value={formData.email}
  onChange={handleChange}
  />

  <Input
    label="Password"
    type="password"
    placeholder="Create a password"
    icon={<FaLock />}
    rightIcon={<FaEye onClick={() => setShowPassword(!showPassword)}
  style={{ cursor: "pointer" }}/>}
    type={showPassword ? "text" : "password"}
  name="password"
  value={formData.password}
  onChange={handleChange}
  />

  <Input
    label="Confirm Password"
    type="password"
    placeholder="Confirm your password"
    icon={<FaLock />}
    rightIcon={<FaEye  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
  style={{ cursor: "pointer" }}/>}
    type={showConfirmPassword  ? "text" : "password"}
  name="confirmPassword"
  value={formData.confirmPassword}
  onChange={handleChange}
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
  <LoginLink onClick={() => navigate("/login")}>Login</LoginLink>
</LoginText>

</Form>



        </RegisterCard>

      </RightSection>

    </RegisterContainer>
  );
}