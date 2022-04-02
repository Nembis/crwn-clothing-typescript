import { ChangeEvent, FC } from "react";
import "./form-input.styles.scss";

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
    <div className="group">
      <input className="form-input" {...otherProps} />
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    </div>
  );
};
