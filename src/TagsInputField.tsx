import React from 'react';
import TagsInput, { TagProps, InputProps } from 'react-tagsinput';
import { Field, FieldProps } from 'formik';

import 'react-tagsinput/react-tagsinput.css';

export type HandleTagsChange = (tags: string[]) => void;
export type PasteSplit = (text: string) => string[];

export interface TagsInputProps {
  addOnBlur?: boolean;
  addOnPaste?: boolean;
  className?: string;
  disabled?: boolean;
  focusedClassName?: string;
  inputProps?: InputProps;
  maxTags?: number;
  name: string;
  pasteSplit?: PasteSplit;
  tagProps?: TagProps;
}

const TagsInputField: React.FC<TagsInputProps> = ({
  addOnBlur,
  addOnPaste,
  className,
  disabled,
  focusedClassName,
  inputProps,
  maxTags,
  name,
  pasteSplit,
  tagProps,
}: TagsInputProps) => {
  const renderTagsInput: React.ReactNode = ({ field, form }: FieldProps) => {
    const handleChange: HandleTagsChange = (tags: string[]) => {
      form.setFieldValue(name, tags);
    };

    return (
      <TagsInput
        addOnBlur={addOnBlur}
        addOnPaste={addOnPaste}
        className={className}
        disabled={disabled}
        focusedClassName={focusedClassName}
        inputProps={inputProps}
        maxTags={maxTags}
        onChange={handleChange}
        pasteSplit={pasteSplit}
        tagProps={tagProps}
        value={field.value}
      />
    );
  };

  return (
    <Field
      name={name}
      render={renderTagsInput}
    />
  );
};

TagsInputField.defaultProps = {
  addOnBlur: false,
  addOnPaste: false,
  className: 'react-tagsinput',
  disabled: false,
  focusedClassName: 'react-tagsinput--focused',
  inputProps: {
    className: 'react-tagsinput-input',
    placeholder: 'Add a tag',
  },
  maxTags: -1,
  pasteSplit: (text: string) => text.split(' ').map(word => word.trim()),
  tagProps: {
    className: 'react-tagsinput-tag',
    classNameRemove: 'react-tagsinput-remove',
  },
};

export default TagsInputField;
