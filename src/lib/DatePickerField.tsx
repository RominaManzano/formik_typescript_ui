import React from 'react';
import { Field, FieldProps } from 'formik';

interface Props {
  id: string;
  name: string;
}

type RenderDatepicker = (props: FieldProps) => React.ReactNode;

const DatePickerField: React.FC<Props> = ({ id, name }: Props) => {
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
