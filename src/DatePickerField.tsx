import React from 'react';
import { Field, FieldProps } from 'formik';

export interface DatePickerProps {
  className?: string | null;
  disabled?: boolean;
  id?: string | null;
  maxDate?: string | null;
  minDate?: string | null;
  name: string;
  style?: object;
}

export type RenderDatepicker = (props: FieldProps) => React.ReactNode;

const DatePickerField: React.FC<DatePickerProps> = ({
  className,
  disabled,
  id,
  maxDate,
  minDate,
  name,
  style,
}: DatePickerProps) => {
  const renderDatepicker: RenderDatepicker = ({ field }: FieldProps) => {
    return (
      <input
        {...field}
        className={className || ''}
        disabled={disabled}
        id={id || name}
        max={maxDate || ''}
        min={minDate || ''}
        style={style}
        type="date"
      />
    );
  };

  return (
    <Field
      name={name}
      render={renderDatepicker}
    />
  );
};

DatePickerField.defaultProps = {
  className: null,
  disabled: false,
  id: null,
  maxDate: null,
  minDate: null,
  style: {},
};

export default DatePickerField;
