import { ChangeEvent, FC } from "react";
import { FormInputLabel, Input, Group } from "./form-input.styles";

interface FormInputProps {
  label: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type: string;
  required: boolean;
  name: string;
  value: string;
}

export const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      <FormInputLabel shrink={otherProps.value.length ? true : false}>
        {label}
      </FormInputLabel>
    </Group>
  );
};
