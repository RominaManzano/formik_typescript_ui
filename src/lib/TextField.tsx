import React from 'react';
import { Field, FieldProps } from 'formik';

export type RenderInput = (props: FieldProps) => React.ReactNode;

export interface TextFieldProps {
  className?: string;
  disabled?: boolean;
  id?: string | null;
  name: string;
  placeholder?: string;
  style?: object;
  type: string;
}

const TextField: React.FC<TextFieldProps> = ({
  className,
  disabled,
  id,
  name,
  placeholder,
  style,
  type,
}: TextFieldProps) => {
  const renderInput: RenderInput = ({ field }: FieldProps) => (
    <input
      {...field}
      id={id || name}
      type={type}
      className={className}
      style={style}
      placeholder={placeholder}
      disabled={disabled}
    />
  );

  return (
    <Field
      type={type}
      name={name}
      render={renderInput}
    />
  );
};

TextField.defaultProps = {
  className: '',
  disabled: false,
  id: null,
  placeholder: '',
  style: {},
};

export default TextField;
