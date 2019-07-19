import React from 'react';
import { Field, FieldProps } from 'formik';

export interface TextFieldProps {
  className?: string | null;
  disabled?: boolean;
  id?: string | null;
  name: string;
  placeholder?: string | null;
  style?: object;
  type?: string;
}

export type RenderInput = (fieldProps: FieldProps) => React.ReactNode;

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
      className={className || ''}
      style={style}
      placeholder={placeholder || ''}
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
  className: null,
  disabled: false,
  id: null,
  placeholder: null,
  style: {},
  type: 'text',
};

export default TextField;
