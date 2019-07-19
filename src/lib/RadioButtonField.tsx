import React from 'react';
import { Field, FieldProps } from 'formik';

export interface RadioButtonProps {
  className?: string | null;
  classNameLabel?: string | null;
  disabled?: boolean;
  id: string;
  label?: string | null;
  labelStyle?: object;
  name: string;
  style?: object;
}

export type RenderRadioButton = (props: FieldProps) => React.ReactNode;

const RadioButtonField: React.FC<RadioButtonProps> = ({
  className,
  classNameLabel,
  disabled,
  id,
  label,
  labelStyle,
  name,
  style,
}: RadioButtonProps) => {
  const renderRadioButton: RenderRadioButton = ({ field: {
    onChange,
    value,
  } }: FieldProps) => {
    const displayLabel: React.ReactNode = label ?
      (
        <label
          className={classNameLabel || ''}
          htmlFor={id}
          style={labelStyle}
        >
          {label}
        </label>
      ) : null;

    return (
      <React.Fragment>
        <input
          className={className || ''}
          checked={id === value}
          disabled={disabled}
          id={id}
          name={name}
          onChange={onChange}
          style={style}
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
  className: null,
  classNameLabel: null,
  disabled: false,
  label: null,
  labelStyle: {},
  style: {},
};

export default RadioButtonField;
