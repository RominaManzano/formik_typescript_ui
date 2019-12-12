import React from 'react';
import { Field, FieldProps } from 'formik';

type RefType = string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null | undefined;

export interface TextFieldProps {
  className?: string | null;
  disabled?: boolean;
  forwardRef?: RefType;
  id?: string | null;
  name: string;
  max?: string | number;
  maxLength?: number;
  min?: string | number;
  minLength?: number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onInput?: (event: React.FormEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  pattern?: string;
  placeholder?: string | null;
  style?: object;
  type?: string;
}

export type RenderInput = (fieldProps: FieldProps) => React.ReactNode;

const TextField: React.FC<TextFieldProps> = ({
  className,
  disabled,
  forwardRef,
  id,
  name,
  max,
  maxLength,
  min,
  minLength,
  onChange,
  onInput,
  onKeyDown,
  pattern,
  placeholder,
  style,
  type,
}: TextFieldProps) => {
  const renderInput: RenderInput = ({ field }: FieldProps) => (
    <input
      {...field}
      className={className || ''}
      disabled={disabled}
      id={id || name}
      max={max}
      maxLength={maxLength}
      min={min}
      minLength={minLength}
      onChange={onChange || field.onChange}
      onInput={onInput}
      onKeyDown={onKeyDown}
      pattern={pattern}
      placeholder={placeholder || ''}
      ref={forwardRef}
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
  forwardRef: undefined,
  id: null,
  max: undefined,
  maxLength: undefined,
  min: undefined,
  minLength: undefined,
  onChange: undefined,
  onInput: undefined,
  onKeyDown: undefined,
  pattern: undefined,
  placeholder: null,
  style: {},
  type: 'text',
};

export default TextField;
