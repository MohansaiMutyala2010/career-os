import { StyledButton } from "./styledComponents";

export default function Button({
  children,
  type = "button",
  ...props
}) {
  return (
    <StyledButton
      type={type}
      {...props}
    >
      {children}
    </StyledButton>
  );
}