import React from 'react';
import { Field, FieldProps } from 'formik';

interface Props {
  type: string;
  name: string;
  placeholder: string;
}

const TextField: React.FC<Props> = ({ type, name, placeholder }: Props) => {
  const renderInput: (props: FieldProps) => React.ReactNode =
    ({ field }: FieldProps) => (
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
