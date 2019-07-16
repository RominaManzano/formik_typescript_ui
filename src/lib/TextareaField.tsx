import React from 'react';
import { Field, FieldProps } from 'formik';

export interface TexareaProps {
  name: string;
  placeholder: string;
}

export type RenderTextarea = (props: FieldProps) => React.ReactNode;

const TextareaField: React.FC<TexareaProps> = ({
  name,
  placeholder,
}: TexareaProps) => {
  const renderTexarea: RenderTextarea = ({ field }: FieldProps) => (
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
