import { Children, FC } from "react";
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button.styles";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  buttonType?: keyof typeof BUTTON_TYPE_CLASSES;
}

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const getBUtton = (buttonType: ButtonProps["buttonType"]) => {
  switch (buttonType) {
    case "google":
      return GoogleSignInButton;
    case "inverted":
      return InvertedButton;
    default:
      return BaseButton;
  }
};

export const Button: FC<ButtonProps> = ({
  children,
  buttonType,
  ...otherProps
}) => {
  const CustomButton = getBUtton(buttonType);

  //@ts-ignore
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};
