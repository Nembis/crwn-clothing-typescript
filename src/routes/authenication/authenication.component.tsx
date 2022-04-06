import { FC } from "react";
import { SignInForm } from "../../components/sign-in-form/sign-in-form.component";
import { SignUpForm } from "../../components/sign-up-form/sign-up-form.component";
import { AuthenticationContainer } from "./authenication.styles";

interface SignInProps {}

export const Authenication: FC<SignInProps> = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};
