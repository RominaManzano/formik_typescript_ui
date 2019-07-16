import React from 'react';
import { Field, FieldProps } from 'formik';

interface Props {
  id: string;
  label: string;
  name: string;
}

type RenderRadioButton = (props: FieldProps) => React.ReactNode;

const RadioButtonField: React.FC<Props> = ({ name, label, id }: Props) => {
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
