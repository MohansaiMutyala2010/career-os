import {
  SocialButton,
} from "./styledComponents";

export default function Social({
  children,
  ...props
}) {
  return (
    <SocialButton {...props}>
      {children}
    </SocialButton>
  );
}