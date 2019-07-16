import React from 'react';
import { Field, FieldProps } from 'formik';

export interface RadioButtonProps {
  id: string;
  label: string;
  name: string;
}

export type RenderRadioButton = (props: FieldProps) => React.ReactNode;

const RadioButtonField: React.FC<RadioButtonProps> = ({
  name,
  label,
  id,
}: RadioButtonProps) => {
  const renderRadioButton: RenderRadioButton = ({ field: {
    onChange,
    value,
  } }: FieldProps) => {
    return (
      <React.Fragment>
        <input
          id={id}
          name={name}
          onChange={onChange}
          type="radio"
          checked={id === value}
          value={id}
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
      render={renderRadioButton}
    />
  );
};

export default RadioButtonField;
