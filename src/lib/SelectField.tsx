// tslint:disable: no-any
import React from 'react';
import Select from 'react-select';
import { Field, FieldProps } from 'formik';

import Option from './OptionType';

export interface SelectProps {
  autoFocus?: boolean;
  className?: string | null;
  id?: string | null;
  isDisabled?: boolean;
  isLoading?: boolean;
  isMulti?: boolean;
  isSearchable?: boolean;
  name: string;
  options: Option[];
  placeholder?: string | null;
  style?: object;
}

export type RenderSelect = (props: FieldProps) => React.ReactNode;
export type GetValue = () => any;
export type HandleChange = (option: any) => void;

const SelectField: React.FC<SelectProps> = ({
  autoFocus,
  className,
  id,
  isDisabled,
  isLoading,
  isMulti,
  isSearchable,
  name,
  options,
  placeholder,
  style,
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
        autoFocus={autoFocus}
        className={className || ''}
        id={id || name}
        isDisabled={isDisabled}
        isLoading={isLoading}
        isMulti={isMulti}
        isSearchable={isSearchable}
        name={name}
        onChange={handleChange}
        options={options}
        placeholder={placeholder || ''}
        styles={style}
        value={getValue()}
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

SelectField.defaultProps = {
  autoFocus: false,
  className: null,
  id: null,
  isDisabled: false,
  isLoading: false,
  isMulti: false,
  isSearchable: false,
  placeholder: null,
  style: {},
};

export default SelectField;
