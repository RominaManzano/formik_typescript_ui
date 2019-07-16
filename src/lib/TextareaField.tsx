import React from 'react';
import { Field, FieldProps } from 'formik';

interface Props {
  name: string;
  placeholder: string;
}

const TextareaField: React.FC<Props> = ({ name, placeholder }: Props) => {
  const renderTexarea: (props: FieldProps) => React.ReactNode =
    ({ field }: FieldProps) => (
      <textarea {...field} placeholder={placeholder} />
    );

  return (
    <Field
      name={name}
      render={renderTexarea}
    />
  );
};

export default TextareaField;
