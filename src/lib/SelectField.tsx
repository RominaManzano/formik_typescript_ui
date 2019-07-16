// tslint:disable: no-any
import React from 'react';
import Select from 'react-select';
import { Field, FieldProps } from 'formik';

import Option from './OptionType';

export interface SelectProps {
  options: Option[];
  name: string;
  placeholder?: string;
  isMulti?: boolean;
  isSearchable?: boolean;
}

export type RenderSelect = (props: FieldProps) => React.ReactNode;
export type GetValue = () => any;
export type HandleChange = (option: any) => void;

const SelectField: React.FC<SelectProps> = ({
  isMulti,
  isSearchable,
  name,
  options,
  placeholder,
}: SelectProps) => {
  const renderSelect: RenderSelect = (fieldProps: FieldProps) => {
    const { form }: FieldProps = fieldProps;

    const getValue: GetValue = () => {
      const { field }: FieldProps = fieldProps;

      if (options) {
        return isMulti
          ? options.filter(option => field.value.indexOf(option.value) >= 0)
          : options.find(option => option.value === field.value);
      }

      return isMulti ? [] : ('' as any);
    };

    const handleChange: HandleChange = (option: any) => {
      form.setFieldValue(
        name,
        isMulti
          ? (option as Option[]).map((item: Option) => item.value)
          : (option as Option).value,
      );
    };

    return (
      <Select
        name={name}
        values={getValue()}
        options={options}
        placeholder={placeholder}
        onChange={handleChange}
        isMulti={isMulti}
        isSearchable={isSearchable}
      />
    );
  };

  return (
    <Field
      name={name}
      render={renderSelect}
    />
  );
};

export default SelectField;
