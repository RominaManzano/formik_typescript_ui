import React from 'react';
import { Field, FieldProps } from 'formik';

type RefType = string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null | undefined;

export interface TextFieldProps {
  className?: string | null;
  disabled?: boolean;
  id?: string | null;
  name: string;
  maxLength?: number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onInput?: (event: React.FormEvent<HTMLInputElement>) => void;
  placeholder?: string | null;
  ref?: RefType;
  style?: object;
  type?: string;
}

export type RenderInput = (fieldProps: FieldProps) => React.ReactNode;

const TextField: React.FC<TextFieldProps> = ({
  className,
  disabled,
  id,
  name,
  maxLength,
  onChange,
  onInput,
  placeholder,
  ref,
  style,
  type,
}: TextFieldProps) => {
  const renderInput: RenderInput = ({ field }: FieldProps) => (
    <input
      {...field}
      className={className || ''}
      disabled={disabled}
      id={id || name}
      maxLength={maxLength}
      onChange={onChange || field.onChange}
      onInput={onInput}
      placeholder={placeholder || ''}
      ref={ref}
      style={style}
      type={type}
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
  maxLength: undefined,
  onChange: undefined,
  onInput: undefined,
  placeholder: null,
  ref: undefined,
  style: {},
  type: 'text',
};

export default TextField;
