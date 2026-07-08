import {
  InputContainer,
  Label,
  InputWrapper,
  IconContainer,
  StyledInput,
  RightIcon,
} from "./styledComponents";

export default function Input({
  label,
  icon,
  rightIcon,
  ...props
}) {
  return (
    <InputContainer>

      <Label>{label}</Label>

      <InputWrapper>

        <IconContainer>

          {icon}

        </IconContainer>

        <StyledInput {...props} />

        {rightIcon && (
          <RightIcon>

            {rightIcon}

          </RightIcon>
        )}

      </InputWrapper>

    </InputContainer>
  );
}