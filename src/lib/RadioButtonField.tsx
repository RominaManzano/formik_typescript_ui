import React from 'react';
import { Field, FieldProps } from 'formik';

export interface RadioButtonProps {
  className?: string;
  classNameLabel?: string;
  disabled?: boolean;
  id: string;
  inputStyle?: object;
  label?: string | null;
  labelStyle?: object;
  name: string;
}

export type RenderRadioButton = (props: FieldProps) => React.ReactNode;

const RadioButtonField: React.FC<RadioButtonProps> = ({
  className,
  classNameLabel,
  disabled,
  id,
  inputStyle,
  label,
  labelStyle,
  name,
}: RadioButtonProps) => {
  const renderRadioButton: RenderRadioButton = ({ field: {
    onChange,
    value,
  } }: FieldProps) => {
    const displayLabel: React.ReactNode = label ?
      (
        <label
          className={classNameLabel}
          htmlFor={id}
          style={labelStyle}
        >
          {label}
        </label>
      ) : null;

    return (
      <React.Fragment>
        <input
          className={className}
          checked={id === value}
          disabled={disabled}
          id={id}
          name={name}
          onChange={onChange}
          style={inputStyle}
          type="radio"
          value={id}
        />
        {displayLabel}
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

RadioButtonField.defaultProps = {
  className: '',
  classNameLabel: '',
  disabled: false,
  inputStyle: {},
  label: null,
  labelStyle: {},
};

export default RadioButtonField;
