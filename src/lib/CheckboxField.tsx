import React from 'react';
import { Field, FieldProps } from 'formik';

export interface CheckboxProps {
  id: string;
  label: string;
  name: string;
}

export type RenderCheckbox = (props: FieldProps) => React.ReactNode;

const CheckboxField: React.FC<CheckboxProps> = ({
  id,
  label,
  name,
}: CheckboxProps) => {
  const renderCheckbox: RenderCheckbox = ({ field: {
    onChange,
    value,
  } }: FieldProps) => {
    return (
      <React.Fragment>
        <input
          id={id}
          name={name}
          onChange={onChange}
          type="checkbox"
          value={value}
          checked={value}
        />
        <label htmlFor={id}>
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

export default CheckboxField;
