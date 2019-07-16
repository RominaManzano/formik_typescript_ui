import React from 'react';
import { Field, FieldProps } from 'formik';

export interface TexareaProps {
  className?: string;
  disabled?: boolean;
  id?: string | null;
  name: string;
  placeholder: string;
  style?: object;
}

export type RenderTextarea = (fieldProps: FieldProps) => React.ReactNode;

const TextareaField: React.FC<TexareaProps> = ({
  className,
  disabled,
  id,
  name,
  placeholder,
  style,
}: TexareaProps) => {
  const renderTexarea: RenderTextarea = ({ field }: FieldProps) => (
    <textarea
      {...field}
      id={id || name}
      className={className}
      disabled={disabled}
      placeholder={placeholder}
      style={style}
    />
  );

  return (
    <Field
      name={name}
      render={renderTexarea}
    />
  );
};

TextareaField.defaultProps = {
  className: '',
  disabled: false,
  id: null,
  style: {},
};

export default TextareaField;
