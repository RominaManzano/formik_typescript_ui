import React from 'react';
import { Field, FieldProps } from 'formik';

export interface DatePickerProps {
  id: string;
  name: string;
}

export type RenderDatepicker = (props: FieldProps) => React.ReactNode;

const DatePickerField: React.FC<DatePickerProps> = ({
  id,
  name,
}: DatePickerProps) => {
  const renderDatepicker: RenderDatepicker = ({ field }: FieldProps) => {
    return (
      <input
        {...field}
        id={id}
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

export default DatePickerField;
