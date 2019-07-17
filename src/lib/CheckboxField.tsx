import React from 'react';
import { Field, FieldProps } from 'formik';

export interface CheckboxProps {
  className?: string;
  disabled?: boolean;
  id?: string | null;
  label: string;
  name: string;
  style?: object;
}

export type RenderCheckbox = (props: FieldProps) => React.ReactNode;

const CheckboxField: React.FC<CheckboxProps> = ({
  className,
  disabled,
  id,
  label,
  name,
  style,
}: CheckboxProps) => {
  const renderCheckbox: RenderCheckbox = ({ field: {
    onChange,
    value,
  } }: FieldProps) => {
    return (
      <React.Fragment>
        <input
          checked={value}
          className={className}
          disabled={disabled}
          id={id || name}
          name={name}
          onChange={onChange}
          style={style}
          type="checkbox"
          value={value}
        />
        <label htmlFor={id || name}>
          {label}
        </label>
      </React.Fragment>
    );
  };

  return (
    <Field
      name={name}
      render={renderCheckbox}
    />
  );
};

CheckboxField.defaultProps = {
  className: '',
  disabled: false,
  id: null,
  style: {},
};

export default CheckboxField;
