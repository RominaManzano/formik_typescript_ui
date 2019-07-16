import React from 'react';
import { Field, FieldProps } from 'formik';

export interface TextFieldProps {
  type: string;
  name: string;
  placeholder: string;
}

export type RenderInput = (props: FieldProps) => React.ReactNode;

const TextField: React.FC<TextFieldProps> = ({
  type,
  name,
  placeholder,
}: TextFieldProps) => {
  const renderInput: RenderInput = ({ field }: FieldProps) => (
    <input {...field} type={type} placeholder={placeholder} />
  );

  return (
    <Field
      type={type}
      name={name}
      render={renderInput}
    />
  );
};

export default TextField;
