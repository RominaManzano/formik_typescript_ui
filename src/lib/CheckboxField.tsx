import React from 'react';
import { Field, FieldProps } from 'formik';

interface Props {
  id: string;
  label: string;
  name: string;
}

type RenderCheckbox = (props: FieldProps) => React.ReactNode;

const CheckboxField: React.FC<Props> = ({ id, label, name }: Props) => {
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
