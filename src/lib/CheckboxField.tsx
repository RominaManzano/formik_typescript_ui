import React from 'react';
import { Field, FieldProps } from 'formik';

export interface CheckboxProps {
  className?: string | null;
  classNameLabel?: string | null;
  disabled?: boolean;
  id?: string | null;
  label: string;
  labelStyle?: object;
  name: string;
  style?: object;
}

export type RenderCheckbox = (props: FieldProps) => React.ReactNode;

const CheckboxField: React.FC<CheckboxProps> = ({
  className,
  classNameLabel,
  disabled,
  id,
  label,
  labelStyle,
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
          className={className || ''}
          disabled={disabled}
          id={id || name}
          name={name}
          onChange={onChange}
          style={style}
          type="checkbox"
          value={value}
        />
        <label
          htmlFor={id || name}
          className={classNameLabel || ''}
          style={labelStyle}
        >
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
  className: null,
  classNameLabel: null,
  disabled: false,
  id: null,
  labelStyle: {},
  style: {},
};

export default CheckboxField;
